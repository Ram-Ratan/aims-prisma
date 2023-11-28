import express from "express";
import { addFaculty, getAllFaculty, getFacultyDetails } from "../controllers/facultyController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/get-faculty",authenticateToken, getFacultyDetails);
router.get("/get-all-faculty", authenticateToken, getAllFaculty);

router.post("/add-faculty", addFaculty);


export default router;
