import express from "express";
import { courseRegistration, courserRegisteredById, getStudentByCourse } from "../controllers/courseRegistrationController";
const router = express.Router();

router.post("/register", courseRegistration);
router.get("/course-registered-by-id",courserRegisteredById);
router.get("/get-student-by-course", getStudentByCourse);

export default router;
