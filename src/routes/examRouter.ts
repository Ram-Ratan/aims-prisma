import express from "express";
import { addExamEntries, getExamEntriesByCourseExam, getExamEntriesByExamStudentId, updateExamEntries } from "../controllers/examController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/add-exam-entries",authenticateToken,addExamEntries);
router.post("/update-exam-entries",authenticateToken, updateExamEntries);
router.get("/get-exam-entries-by-course-exam",authenticateToken, getExamEntriesByCourseExam);
router.get("/get-exam-entries-by-exam-student",authenticateToken, getExamEntriesByExamStudentId);


export default router;
