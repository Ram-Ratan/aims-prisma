import express from "express";
import { addExam, addExamEntries, getExam, getExamEntriesByCourseExam, getExamEntriesByExamStudentId, updateExamEntries } from "../controllers/examController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/get-exam", getExam);
router.post("/add-exam", addExam);
router.post("/add-exam-entries",authenticateToken,addExamEntries);
router.post("/update-exam-entries",authenticateToken, updateExamEntries);

router.get("/get-exam-entries-by-course-exam",authenticateToken, getExamEntriesByCourseExam);
router.get("/get-exam-entries-by-exam-student",authenticateToken, getExamEntriesByExamStudentId);


export default router;
