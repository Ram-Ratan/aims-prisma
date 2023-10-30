import express from "express";
import { getUsers } from "../controllers/userController";
import { addCourse, getAllCourses } from "../controllers/courseController";
const router = express.Router();

router.get("/get-all-courses", getAllCourses);
router.post("/add-course",addCourse);

export default router;
