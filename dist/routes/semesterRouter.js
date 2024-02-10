"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const semesterController_1 = require("../controllers/semesterController");
const router = express_1.default.Router();
router.get("/get-all-semester", semesterController_1.getAllSemester);
router.post("/add-semester", semesterController_1.addSemester);
exports.default = router;
