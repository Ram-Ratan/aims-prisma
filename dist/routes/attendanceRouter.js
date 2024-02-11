"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const attendanceController_1 = require("../controllers/attendanceController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get("/get-class-type", attendanceController_1.getClassType);
router.get("/get-attendance-type", attendanceController_1.getAttendanceType);
router.post("/mark-attendance", attendanceController_1.markAttendance);
router.post("/update-attendance", authMiddleware_1.authenticateToken, attendanceController_1.updateAttendance);
router.post("/attendance-by-course-and-date", authMiddleware_1.authenticateToken, attendanceController_1.getAttendanceByCourseAndDate);
router.post("/attendance-by-course-date-id", authMiddleware_1.authenticateToken, attendanceController_1.getAttendanceByCourseDateId);
exports.default = router;
