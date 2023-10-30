import express from "express";
import { createStudent, getAllStudents } from "../controllers/studentController";

const router = express.Router();

router.get("/get-all-students", getAllStudents);
router.post("/create-student",createStudent);

export default router;
