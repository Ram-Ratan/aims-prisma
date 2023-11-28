import express from "express";
import { addMultipleUsers, addUser, getAllUsers, getUser, getUserAuth, login, signup } from "../controllers/userController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/get-all-users", getAllUsers);
router.post("/get-user",getUser);
router.post("/add-user", addUser);
router.post("/add-multiple-user", addMultipleUsers)
router.post("/signup",signup);
router.post("/login", login);
router.get("/get-user",authenticateToken,getUserAuth);


export default router;
