import express from "express";
import { addExam, addExamEntries, getExam, getExamEntriesByCourseExam, getExamEntriesByExamStudentId } from "../controllers/examController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/get-exam", getExam);
router.post("/add-exam", addExam);
router.post("/add-exam-entries",addExamEntries);
router.get("/get-exam-entries-by-course-exam",getExamEntriesByCourseExam);
router.get("/get-exam-entries-by-exam-student",authenticateToken, getExamEntriesByExamStudentId);


export default router;
