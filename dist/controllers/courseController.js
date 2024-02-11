"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllStremElective = exports.addCourse = exports.getAllCourses = void 0;
const client_1 = require("../../generated/client");
const prisma = new client_1.PrismaClient();
const getAllCourses = async (req, res) => {
    console.log("get all courses called");
    const { semesterId, branchId, batchId } = req.params;
    try {
        const courses = await prisma.course.findMany({
            where: {
                batchId: batchId?.toString(),
                semester: {
                    some: {
                        id: semesterId
                    }
                },
                branch: {
                    some: {
                        id: branchId
                    }
                }
            }
        });
        const groupedCourses = {};
        for (const course of courses) {
            if (!groupedCourses[course.courseType]) {
                groupedCourses[course.courseType] = [];
            }
            groupedCourses[course.courseType].push(course);
        }
        // Send the grouped courses as a response
        res.json(groupedCourses);
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.addCourse = addCourse;
const getAllStremElective = async (req, res) => {
    try {
        const response = await prisma.steamElective.findMany({});
        console.log(response);
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAllStremElective = getAllStremElective;
