"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get("/get-all-users", userController_1.getAllUsers);
router.post("/get-user", userController_1.getUser);
router.post("/add-user", userController_1.addUser);
router.post("/add-multiple-user", userController_1.addMultipleUsers);
router.post("/signup", userController_1.signup);
router.post("/login", userController_1.login);
router.get("/get-user", authMiddleware_1.authenticateToken, userController_1.getUserAuth);
router.post("/reset-password", userController_1.resetPassword);
exports.default = router;
