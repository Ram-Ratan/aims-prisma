import express from "express";
import { addFaculty, getFacultyDetails } from "../controllers/facultyController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/get-faculty",authenticateToken, getFacultyDetails);
router.post("/add-faculty", addFaculty);


export default router;
