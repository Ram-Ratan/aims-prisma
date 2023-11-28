import express from "express";
import { courserAssignedById } from "../controllers/courseAssignedController";
import { authenticateToken } from "../middleware/authMiddleware";
const router = express.Router();

router.get("/course-assigned-by-id",authenticateToken, courserAssignedById);

export default router;
