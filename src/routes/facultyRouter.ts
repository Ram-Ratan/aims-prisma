import express from "express";
import { addFaculty, getFacultyDetails } from "../controllers/facultyController";

const router = express.Router();

router.get("/get-faculty", getFacultyDetails);
router.post("/add-faculty", addFaculty);


export default router;
