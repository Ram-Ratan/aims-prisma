"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courserAssignment = exports.courserAssignedById = void 0;
const client_1 = require("../../generated/client");
const prisma = new client_1.PrismaClient();
const courserAssignedById = async (req, res) => {
    try {
        const userId = req?.user?.userId;
        const response = await prisma.faculty.findUnique({
            where: {
                userId: userId,
            },
            select: {
                courseAssigned: {
                    include: {
                        course: true
                    }
                }
            },
        });
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.courserAssignedById = courserAssignedById;
const courserAssignment = async (req, res) => {
    try {
        const data = req.body?.courses.map((course) => {
            return {
                courseId: course,
                facultyId: req.body?.faculty
            };
        });
        const response = await prisma.facultyCourseAssignment.createMany({
            data
        });
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.courserAssignment = courserAssignment;
