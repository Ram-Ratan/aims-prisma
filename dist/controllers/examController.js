"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExamCode = exports.getExamType = exports.getExamEntriesByExamStudentId = exports.getExamEntriesByCourseExam = exports.updateExamEntries = exports.addExamEntries = void 0;
const client_1 = require("../../generated/client");
const prisma = new client_1.PrismaClient();
const addExamEntries = async (req, res) => {
    const marksObject = req?.body?.marks?.map((ele) => {
        console.log({
            examCode: req.body.examCode,
            examType: req.body.examType,
            courseId: req?.body?.courseId,
            studentId: ele?.studentId,
            marksObtained: ele?.marksObtained,
            remarks: ele?.remarks,
        });
        return {
            examCode: req.body.examCode,
            examType: req.body.examType,
            courseId: req?.body?.courseId,
            studentId: ele?.studentId,
            marksObtained: ele?.marksObtained,
            remarks: ele?.remarks
        };
    });
    try {
        const response = await prisma.marksEntry.createMany({
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
            await prisma.marksEntry.update({
                where: {
                    examCode_examType_courseId_studentId: {
                        examCode: req.body.examCode,
                        examType: req.body.examType,
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
    const examCode = req.query.examCode?.toString();
    const examType = req?.query?.examType?.toString();
    const courseId = req?.query?.courseId?.toString();
    try {
        // const response = await prisma.marksEntry.findMany({
        //     where: {
        //       examCode: examCode,
        //       examType: examType,
        //       courseId: courseId
        //     }
        // });
        // res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getExamEntriesByCourseExam = getExamEntriesByCourseExam;
const getExamEntriesByExamStudentId = async (req, res) => {
    const examCode = req?.query?.examCode;
    const examType = req?.query?.examType;
    const userId = req?.user?.userId;
    try {
        // const response = await prisma.marksEntry.findMany({
        //   where: {
        //     examCode: examCode,
        //     examType: examType,
        //     student:{
        //       userId: userId
        //     }
        //   },
        //   include:{
        //     course: {
        //       select:{
        //         name: true
        //       }
        //     }
        //   }
        // });
        // res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getExamEntriesByExamStudentId = getExamEntriesByExamStudentId;
const getExamType = async (req, res) => {
    try {
        const result = Object.values(client_1.examType);
        res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getExamType = getExamType;
const getExamCode = async (req, res) => {
    try {
        const result = Object.values(client_1.examCode);
        res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getExamCode = getExamCode;
