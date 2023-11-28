import express from "express";
import { createStudent, getStudents } from "../controllers/studentController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/get-student",authenticateToken, getStudents);
router.post("/create-student",createStudent);

export default router;
