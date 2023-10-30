import express from "express";
import { addSemester, getAllSemester } from "../controllers/semesterController";

const router = express.Router();

router.get("/get-all-semester", getAllSemester);
router.post("/add-semester", addSemester);

export default router;
