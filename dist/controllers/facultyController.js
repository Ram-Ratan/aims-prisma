"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFaculty = exports.getAllFaculty = exports.getFacultyDetails = void 0;
const client_1 = require("../../generated/client");
const prisma = new client_1.PrismaClient();
const getFacultyDetails = async (req, res) => {
    const userId = req?.user?.userId;
    try {
        const users = await prisma.faculty.findUnique({
            where: {
                userId: userId
            },
            select: {
                fullName: true,
                department: true,
                email: true,
                courseAssigned: {
                    select: {
                        course: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        });
        console.log(res);
        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getFacultyDetails = getFacultyDetails;
const getAllFaculty = async (req, res) => {
    try {
        const faculty = await prisma.faculty.findMany({});
        res.json(faculty);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAllFaculty = getAllFaculty;
const addFaculty = async (req, res) => {
    const { fullName, email, userId, department } = req.body;
    try {
        const users = await prisma.faculty.create({
            data: {
                fullName: fullName,
                email: email,
                userId: userId,
                department: department
            }
        });
        console.log(res);
        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.addFaculty = addFaculty;
