"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("../generated/client");
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const courseRouters_1 = __importDefault(require("./routes/courseRouters"));
const semesterRouter_1 = __importDefault(require("./routes/semesterRouter"));
const branchRouters_1 = __importDefault(require("./routes/branchRouters"));
const studentRouter_1 = __importDefault(require("./routes/studentRouter"));
const courseRegistrationRouter_1 = __importDefault(require("./routes/courseRegistrationRouter"));
const courseAssignedRouter_1 = __importDefault(require("./routes/courseAssignedRouter"));
const attendanceRouter_1 = __importDefault(require("./routes/attendanceRouter"));
const facultyRouter_1 = __importDefault(require("./routes/facultyRouter"));
const examRouter_1 = __importDefault(require("./routes/examRouter"));
const cors = require("cors");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(cors());
async function main() {
    try {
        await prisma.$connect();
        console.log("Database connected successfully");
        // Perform database operations here
    }
    catch (error) {
        console.error("Error connecting to the database:", error);
    }
    finally {
        await prisma.$disconnect();
    }
}
main().catch(console.error);
app.use("/user", userRouter_1.default);
app.use("/student", studentRouter_1.default);
app.use("/faculty", facultyRouter_1.default);
app.use("/admin", userRouter_1.default);
app.use("/course", courseRouters_1.default);
app.use("/attendance", userRouter_1.default);
app.use("/semester", semesterRouter_1.default);
app.use("/branch", branchRouters_1.default);
app.use("/course-registration", courseRegistrationRouter_1.default);
app.use("/course-assigned", courseAssignedRouter_1.default);
app.use("/attendance", attendanceRouter_1.default);
app.use("/exam", examRouter_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
