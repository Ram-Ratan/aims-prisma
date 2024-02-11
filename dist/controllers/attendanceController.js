"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttendanceType = exports.getClassType = exports.getAttendanceByCourseDateId = exports.getAttendanceByCourseAndDate = exports.updateAttendance = exports.markAttendance = void 0;
const client_1 = require("../../generated/client");
const prisma = new client_1.PrismaClient();
const markAttendance = async (req, res) => {
    const data = req.body.attendance.map((student) => {
        return {
            courseId: req.body.courseId,
            classType: req.body.classType,
            attenanceType: req.body.attenanceType,
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
                    courseId_classType_attendanceType_studentId_date: {
                        classType: req.body.classType,
                        attendanceType: req.body.attenanceType,
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
                classType: req.body.classType,
                attendanceType: req.body.attenanceType
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
const getClassType = async (req, res) => {
    try {
        const result = Object.values(client_1.classType);
        res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getClassType = getClassType;
const getAttendanceType = async (req, res) => {
    try {
        const result = Object.values(client_1.attenanceType);
        res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAttendanceType = getAttendanceType;
