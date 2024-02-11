import express from "express";
import { courseRegistration, courserRegisteredById, getStudentByCourse, isRegistered } from "../controllers/courseRegistrationController";
import { authenticateToken } from "../middleware/authMiddleware";
const router = express.Router();

router.post("/register",authenticateToken, courseRegistration);
router.get("/course-registered-by-id",authenticateToken, courserRegisteredById);
router.get("/get-student-by-course", getStudentByCourse);
router.get("/is-registered", isRegistered);

export default router;
