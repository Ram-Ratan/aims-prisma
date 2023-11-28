import express from "express";
import { getAttendanceByCourseAndDate, getAttendanceByCourseDateId, markAttendance, updateAttendance } from "../controllers/attendanceController";
import { authenticateToken } from "../middleware/authMiddleware";
const router = express.Router();

router.post("/mark-attendance", markAttendance);
router.post("/update-attendance",authenticateToken, updateAttendance);
router.post("/attendance-by-course-and-date",authenticateToken, getAttendanceByCourseAndDate);
router.post("/attendance-by-course-date-id",authenticateToken, getAttendanceByCourseDateId);



export default router;
