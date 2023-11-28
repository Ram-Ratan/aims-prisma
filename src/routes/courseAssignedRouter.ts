import express from "express";
import { courserAssignedById, courserAssignment } from "../controllers/courseAssignedController";
import { authenticateToken } from "../middleware/authMiddleware";
const router = express.Router();

router.get("/course-assigned-by-id",authenticateToken, courserAssignedById);
router.post("/course-assignment", authenticateToken, courserAssignment);


export default router;
