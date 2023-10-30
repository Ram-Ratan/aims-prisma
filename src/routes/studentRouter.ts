import express from "express";
import { getUsers } from "../controllers/userController";
import { getAllStudents } from "../controllers/studentController";

const router = express.Router();

router.get("/get-all-students", getAllStudents);

export default router;
