"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const facultyController_1 = require("../controllers/facultyController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get("/get-faculty", authMiddleware_1.authenticateToken, facultyController_1.getFacultyDetails);
router.get("/get-all-faculty", authMiddleware_1.authenticateToken, facultyController_1.getAllFaculty);
router.post("/add-faculty", facultyController_1.addFaculty);
exports.default = router;
