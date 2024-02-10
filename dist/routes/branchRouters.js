"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const branchController_1 = require("../controllers/branchController");
const router = express_1.default.Router();
router.get("/get-all-branch", branchController_1.getAllBranch);
router.post("/add-branch", branchController_1.addBranch);
exports.default = router;
