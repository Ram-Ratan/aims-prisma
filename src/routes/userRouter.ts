import express from "express";
import { addMultipleUsers, addUser, getAllUsers, getUser, signup } from "../controllers/userController";

const router = express.Router();

router.get("/get-all-users", getAllUsers);
router.post("/get-user",getUser);
router.post("/add-user", addUser);
router.post("/add-multiple-user", addMultipleUsers)
router.post("/signup",signup);

export default router;
