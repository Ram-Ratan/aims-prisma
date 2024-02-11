import express from "express";
import { getAttendanceByCourseAndDate, getAttendanceByCourseDateId, getAttendanceType, getClassType, markAttendance, updateAttendance } from "../controllers/attendanceController";
import { authenticateToken } from "../middleware/authMiddleware";
const router = express.Router();

router.get("/get-class-category", getClassType);
router.get("/get-class-type", getAttendanceType);
router.post("/mark-attendance", markAttendance);
router.post("/update-attendance",authenticateToken, updateAttendance);
router.post("/attendance-by-course-and-date",authenticateToken, getAttendanceByCourseAndDate);
router.post("/attendance-by-course-date-id",authenticateToken, getAttendanceByCourseDateId);



export default router;
