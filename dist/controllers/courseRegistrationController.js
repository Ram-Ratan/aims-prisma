"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRegistered = exports.getStudentByCourse = exports.courserRegisteredById = exports.courseRegistration = void 0;
const client_1 = require("../../generated/client");
const prisma = new client_1.PrismaClient();
const courseRegistration = async (req, res) => {
    try {
        const student = await prisma.student.findUnique({
            where: {
                userId: req?.user?.userId,
            },
        });
        const data = req?.body?.courses?.map((course) => {
            return {
                courseId: course,
                studentId: student?.id,
            };
        });
        console.log(data);
        const courses = await prisma.courseRegistration.createMany({
            data: data,
            skipDuplicates: true
        });
        res.json(courses);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.courseRegistration = courseRegistration;
const courserRegisteredById = async (req, res) => {
    try {
        const userId = req?.user?.userId;
        const response = await prisma.student.findUnique({
            where: {
                userId: userId
            },
            select: {
                courseRegistered: {
                    include: {
                        course: {
                            select: {
                                name: true
                            }
                        }
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
exports.courserRegisteredById = courserRegisteredById;
const getStudentByCourse = async (req, res) => {
    try {
        const courseId = req?.query?.courseId?.toString();
        const response = await prisma.courseRegistration.findMany({
            orderBy: {
                student: {
                    rollNo: "asc"
                }
            },
            where: {
                courseId: courseId
            },
            include: {
                student: {
                    select: {
                        rollNo: true,
                        fullName: true,
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
exports.getStudentByCourse = getStudentByCourse;
const isRegistered = async (req, res) => {
    const { studentId, semesterId } = req.query;
    try {
        const response = await prisma.courseRegistration.findMany({
            where: {
                studentId: studentId?.toString(),
                semesterId: semesterId?.toString()
            }
        });
        console.log(response);
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.isRegistered = isRegistered;
