import express from "express";
import { PrismaClient } from "../generated/client";
import userRoutes from "./routes/userRouter";
import courseRoutes from "./routes/courseRouters";
import semesterRouter from "./routes/semesterRouter";
import branchRouter from "./routes/branchRouters";
import studentRouter from "./routes/studentRouter";
import courseRegistrationRouter from "./routes/courseRegistrationRouter";
import attendanceRouter from "./routes/attendanceRouter";
const cors = require("cors");
const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());
async function main() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully");
    // Perform database operations here
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch(console.error);


app.use("/user", userRoutes);
app.use("/student", studentRouter);
app.use("/faculty", userRoutes);
app.use("/admin", userRoutes);
app.use("/course", courseRoutes);
app.use("/attendance", userRoutes);
app.use("/semester", semesterRouter);
app.use("/branch", branchRouter);
app.use("/course-registration",courseRegistrationRouter);
app.use("/attendance", attendanceRouter);













// app.get("/users", async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.json(users);
// });

// app.post("/users", async (req, res) => {
//   const { email, name } = req.body;
//   const user = await prisma.user.create({
//     data: {
//       email,
//       name,
//     },
//   });
//   res.json(user);
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
