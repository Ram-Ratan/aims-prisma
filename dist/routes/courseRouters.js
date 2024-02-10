"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const courseController_1 = require("../controllers/courseController");
const router = express_1.default.Router();
router.get("/get-all-courses", courseController_1.getAllCourses);
router.post("/add-course", courseController_1.addCourse);
exports.default = router;
