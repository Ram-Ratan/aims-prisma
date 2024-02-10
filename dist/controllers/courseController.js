"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCourse = exports.getAllCourses = void 0;
const client_1 = require("../../generated/client");
const prisma = new client_1.PrismaClient();
const getAllCourses = async (req, res) => {
    console.log("get all courses called");
    const { semesterId, branchId } = req?.query;
    try {
        const courses = await prisma.course.findMany({
            where: {
                semesterId: semesterId?.toString(),
                branchId: branchId?.toString(),
            }
        });
        console.log(courses);
        res.json(courses);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAllCourses = getAllCourses;
const addCourse = async (req, res) => {
    const { courseName, courseId, branch, semester } = req?.body;
    try {
        const response = await prisma.course.create({
            data: {
                name: courseName,
                semester: {
                    connect: {
                        sem: semester
                    }
                },
                branch: {
                    connect: {
                        name: branch
                    }
                },
                courseId: courseId
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
exports.addCourse = addCourse;
