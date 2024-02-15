import express from "express";
import { addExamEntries, getExamCode, getExamEntriesByCourseExam, getExamEntriesByExamStudentId, getExamType, updateExamEntries } from "../controllers/examController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/get-exam-type", getExamType);
router.get("/get-exam-code", getExamCode);
router.post("/add-exam-entries",authenticateToken,addExamEntries);
router.post("/update-exam-entries",authenticateToken, updateExamEntries);
router.post("/get-exam-entries-by-course-exam",authenticateToken, getExamEntriesByCourseExam);
router.post("/get-exam-entries-by-exam-student",authenticateToken, getExamEntriesByExamStudentId);


export default router;
