"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.getUserAuth = exports.login = exports.signup = exports.addUser = exports.addMultipleUsers = exports.getUser = exports.getAllUsers = void 0;
const client_1 = require("../../generated/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
const prisma = new client_1.PrismaClient();
const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAllUsers = getAllUsers;
const getUser = async (req, res) => {
    const { username, password } = req?.body;
    try {
        const users = await prisma.user.findUnique({
            where: {
                username: username,
                password: password,
            },
        });
        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getUser = getUser;
const addMultipleUsers = async (req, res) => {
    try {
        const response = await prisma.user.createMany({
            data: req.body,
            skipDuplicates: true,
        });
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.addMultipleUsers = addMultipleUsers;
const addUser = async (req, res) => {
    try {
        const response = await prisma.user.create({
            data: req.body,
        });
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.addUser = addUser;
const signup = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email: email,
                username: email,
                password: hashedPassword,
                role: role,
            },
        });
        switch (role) {
            case "STUDENT":
                const { student } = req.body;
                await prisma.student.create({
                    data: {
                        userId: user.id,
                        fullName: student?.fullName,
                        rollNo: student?.rollNo,
                        semesterId: student?.semesterId,
                        branchId: student?.branchId,
                        mobileNo: student?.mobileNo,
                        email: user?.email,
                    },
                });
                break;
            case "FACULTY":
                const { faculty } = req.body;
                await prisma.faculty.create({
                    data: {
                        fullName: faculty?.fullName,
                        email: user?.email,
                        userId: user?.id,
                        department: faculty?.department,
                    },
                });
                break;
            case "ADMIN":
                const { admin } = req.body;
                await prisma.admin.create({
                    data: {
                        fullName: admin?.fullName,
                        email: user?.email,
                        userId: user?.id,
                    },
                });
                break;
        }
        res.status(201).json({ id: user.id, email: user.email });
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
        console.log(error);
    }
};
exports.signup = signup;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const passwordMatch = await bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.json({ token });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.login = login;
const getUserAuth = async (req, res) => {
    const { username, password } = req?.body;
    try {
        const userId = req?.user?.userId;
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                email: true,
                role: true
            }
        });
        res.json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getUserAuth = getUserAuth;
const resetPassword = async (req, res) => {
    const { email, oldPassword, newPassword } = req?.body;
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const passwordMatch = await bcrypt_1.default.compare(oldPassword, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const hashedPassword = await bcrypt_1.default.hash(newPassword, 10);
        const result = await prisma.user.update({
            where: {
                email: email
            },
            data: {
                password: hashedPassword,
            }
        });
        res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.resetPassword = resetPassword;
