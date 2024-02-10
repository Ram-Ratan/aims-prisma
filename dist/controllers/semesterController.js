"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSemester = exports.getAllSemester = void 0;
const client_1 = require("../../generated/client");
const prisma = new client_1.PrismaClient();
const getAllSemester = async (req, res) => {
    try {
        const response = await prisma.semester.findMany();
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAllSemester = getAllSemester;
const addSemester = async (req, res) => {
    const semesterObject = req?.body;
    try {
        const response = await prisma.semester.create({
            data: semesterObject,
        });
        console.log(response);
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.addSemester = addSemester;
