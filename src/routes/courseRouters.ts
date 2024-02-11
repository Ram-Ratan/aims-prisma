import express from "express";
import { addCourse, getAllCourses, getAllStremElective } from "../controllers/courseController";
const router = express.Router();

router.get("/get-all-courses/:batchId/:branchId/:semesterId", getAllCourses);
router.post("/add-course", addCourse);
router.get("/get-all-stream-elective", getAllStremElective);

export default router;
