import express from "express";
import { getAttendanceByCourseAndDate, getAttendanceByCourseDateId, markAttendance } from "../controllers/attendanceController";
const router = express.Router();

router.post("/mark-attendance", markAttendance);
router.post("/attendance-by-course-and-date", getAttendanceByCourseAndDate);
router.post("/attendance-by-course-date-id", getAttendanceByCourseDateId);



export default router;
