import express from "express";
import { courserAssignedById } from "../controllers/courseAssignedController";
const router = express.Router();

router.get("/course-assigned-by-id", courserAssignedById);

export default router;
