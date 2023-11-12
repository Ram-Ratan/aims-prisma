import express from "express";
import { addExam, addExamEntries, getExam, getExamEntriesByCourseExam, getExamEntriesByExamStudentId } from "../controllers/examController";

const router = express.Router();

router.get("/get-exam", getExam);
router.post("/add-exam", addExam);
router.post("/add-exam-entries",addExamEntries);
router.get("/get-exam-entries-by-course-exam",getExamEntriesByCourseExam);
router.get("/get-exam-entries-by-exam-student", getExamEntriesByExamStudentId);


export default router;
