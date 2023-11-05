import express from "express";
import { createStudent, getStudents } from "../controllers/studentController";

const router = express.Router();

router.get("/get-student", getStudents);
router.post("/create-student",createStudent);

export default router;
