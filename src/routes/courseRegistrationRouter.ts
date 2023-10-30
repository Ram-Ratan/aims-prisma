import express from "express";
import { courseRegistration, courserRegisteredById } from "../controllers/courseRegistrationController";
const router = express.Router();

router.post("/register", courseRegistration);
router.get("/course-registered-by-id",courserRegisteredById);

export default router;
