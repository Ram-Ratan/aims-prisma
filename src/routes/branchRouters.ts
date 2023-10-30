import express from "express";
import { addBranch, getAllBranch } from "../controllers/branchController";

const router = express.Router();

router.get("/get-all-branch", getAllBranch);
router.post("/add-branch", addBranch);

export default router;
