"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const courseRegistrationController_1 = require("../controllers/courseRegistrationController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.post("/register", authMiddleware_1.authenticateToken, courseRegistrationController_1.courseRegistration);
router.get("/course-registered-by-id", authMiddleware_1.authenticateToken, courseRegistrationController_1.courserRegisteredById);
router.get("/get-student-by-course", courseRegistrationController_1.getStudentByCourse);
router.get("/is-registered", courseRegistrationController_1.isRegistered);
exports.default = router;
