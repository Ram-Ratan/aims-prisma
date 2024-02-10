"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAdmins = void 0;
const client_1 = require("../../generated/client");
const prisma = new client_1.PrismaClient();
const getAllAdmins = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAllAdmins = getAllAdmins;
