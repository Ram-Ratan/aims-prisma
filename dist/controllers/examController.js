"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExamEntriesByExamStudentId = exports.getExamEntriesByCourseExam = exports.updateExamEntries = exports.addExamEntries = exports.addExam = exports.getExam = void 0;
const client_1 = require("../../generated/client");
const prisma = new client_1.PrismaClient();
const getExam = async (req, res) => {
    try {
        const response = await prisma.exam.findMany();
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getExam = getExam;
const addExam = async (req, res) => {
    const { name } = req?.body;
    try {
        const response = await prisma.exam.create({
            data: {
                name: name,
                code: name
            },
        });
        console.log(response);
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.addExam = addExam;
const addExamEntries = async (req, res) => {
    const marksObject = req?.body?.marks?.map((ele) => {
        console.log({
            examId: req?.body?.examId,
            courseId: req?.body?.courseId,
            studentId: ele?.studentId,
            marksObtained: ele?.marksObtained,
            remarks: ele?.remarks,
        });
        return {
            examId: req?.body?.examId,
            courseId: req?.body?.courseId,
            studentId: ele?.studentId,
            marksObtained: ele?.marksObtained,
            remarks: ele?.remarks
        };
    });
    try {
        const response = await prisma.examMarksEntry.createMany({
            data: marksObject,
        });
        console.log(response);
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.addExamEntries = addExamEntries;
const updateExamEntries = async (req, res) => {
    try {
        const response = req.body?.marks?.map(async (ele) => {
            await prisma.examMarksEntry.update({
                where: {
                    examId_studentId_courseId: {
                        examId: req?.body?.examId,
                        courseId: req?.body?.courseId,
                        studentId: ele?.studentId,
                    },
                },
                data: {
                    marksObtained: ele?.marksObtained,
                    remarks: ele?.remarks,
                },
            });
        });
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.updateExamEntries = updateExamEntries;
const getExamEntriesByCourseExam = async (req, res) => {
    const examId = req?.query?.examId?.toString();
    const courseId = req?.query?.courseId?.toString();
    try {
        const response = await prisma.examMarksEntry.findMany({
            where: {
                examId: examId,
                courseId: courseId
            }
        });
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getExamEntriesByCourseExam = getExamEntriesByCourseExam;
const getExamEntriesByExamStudentId = async (req, res) => {
    const examId = req?.query?.examId?.toString();
    const userId = req?.user?.userId;
    try {
        const response = await prisma.examMarksEntry.findMany({
            where: {
                examId: examId,
                student: {
                    userId: userId
                }
            },
            include: {
                course: {
                    select: {
                        name: true
                    }
                }
            }
        });
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getExamEntriesByExamStudentId = getExamEntriesByExamStudentId;
