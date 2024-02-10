"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttendanceByCourseDateId = exports.getAttendanceByCourseAndDate = exports.updateAttendance = exports.markAttendance = void 0;
const client_1 = require("../../generated/client");
const prisma = new client_1.PrismaClient();
const markAttendance = async (req, res) => {
    const data = req.body.attendance.map((student) => {
        return {
            courseId: req.body.courseId,
            studentId: student.id,
            isPresent: student.isPresent,
            date: new Date(req.body.date),
        };
    });
    try {
        const response = await prisma.attendance.createMany({
            data: data,
            skipDuplicates: true,
        });
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.markAttendance = markAttendance;
const updateAttendance = async (req, res) => {
    try {
        const result = req.body.attendance.map(async (student) => {
            await prisma.attendance.update({
                where: {
                    courseId_studentId_date: {
                        courseId: req.body.courseId,
                        studentId: student.id,
                        date: new Date(req.body.date),
                    },
                },
                data: {
                    isPresent: student.isPresent,
                },
            });
        });
        res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.updateAttendance = updateAttendance;
const getAttendanceByCourseAndDate = async (req, res) => {
    const date = new Date(req.body.date);
    const courseId = req.body.courseId;
    try {
        const response = await prisma.attendance.findMany({
            where: {
                date: date,
                courseId: courseId,
            },
            include: {
                student: true,
            },
        });
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAttendanceByCourseAndDate = getAttendanceByCourseAndDate;
const getAttendanceByCourseDateId = async (req, res) => {
    const startDate = req.body?.startDate;
    const endDate = req.body?.endDate;
    const courseId = req.body.courseId;
    const userId = req?.user?.userId;
    try {
        const response = await prisma.attendance.findMany({
            where: {
                date: {
                    gte: startDate,
                    lte: endDate,
                },
                courseId: courseId,
                student: {
                    user: {
                        id: userId,
                    },
                },
            },
        });
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAttendanceByCourseDateId = getAttendanceByCourseDateId;