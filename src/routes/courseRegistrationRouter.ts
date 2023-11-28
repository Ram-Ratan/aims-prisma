import express from "express";
import { courseRegistration, courserRegisteredById, getStudentByCourse } from "../controllers/courseRegistrationController";
import { authenticateToken } from "../middleware/authMiddleware";
const router = express.Router();

router.post("/register",authenticateToken, courseRegistration);
router.get("/course-registered-by-id",courserRegisteredById);
router.get("/get-student-by-course", getStudentByCourse);

export default router;
