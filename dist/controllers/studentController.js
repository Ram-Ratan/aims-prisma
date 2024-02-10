"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = exports.getStudents = void 0;
const client_1 = require("../../generated/client");
const prisma = new client_1.PrismaClient();
const getStudents = async (req, res) => {
    const userId = req?.user?.userId;
    try {
        const response = await prisma.student.findUnique({
            where: {
                userId: userId?.toString()
            },
            include: {
                semester: true,
                branch: true,
                courseRegistered: {
                    select: {
                        course: true
                    }
                }
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
exports.getStudents = getStudents;
const createStudent = async (req, res) => {
    const { rollNo, fullName, mobileNo, email, branchName, currentSemester } = req?.body;
    try {
        const response = await prisma.student.create({
            data: {
                rollNo: rollNo,
                fullName: fullName,
                mobileNo: mobileNo,
                email: email,
                user: {
                    connect: {
                        username: email
                    }
                },
                branch: {
                    connect: {
                        name: branchName
                    }
                },
                semester: {
                    connect: {
                        sem: currentSemester
                    }
                },
            }
        });
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.createStudent = createStudent;
