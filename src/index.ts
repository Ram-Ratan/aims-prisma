import express from "express";
import { PrismaClient } from "../generated/client";
import userRoutes from "./routes/userRouter";

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


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


app.use("/api", userRoutes);






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
