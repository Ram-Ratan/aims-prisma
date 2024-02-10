"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const examController_1 = require("../controllers/examController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get("/get-exam", examController_1.getExam);
router.post("/add-exam", examController_1.addExam);
router.post("/add-exam-entries", authMiddleware_1.authenticateToken, examController_1.addExamEntries);
router.post("/update-exam-entries", authMiddleware_1.authenticateToken, examController_1.updateExamEntries);
router.get("/get-exam-entries-by-course-exam", authMiddleware_1.authenticateToken, examController_1.getExamEntriesByCourseExam);
router.get("/get-exam-entries-by-exam-student", authMiddleware_1.authenticateToken, examController_1.getExamEntriesByExamStudentId);
exports.default = router;