"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBranch = exports.getAllBranch = void 0;
const client_1 = require("../../generated/client");
const prisma = new client_1.PrismaClient();
const getAllBranch = async (req, res) => {
    try {
        const response = await prisma.branch.findMany();
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.getAllBranch = getAllBranch;
const addBranch = async (req, res) => {
    const branchObject = req?.body;
    try {
        const response = await prisma.branch.create({
            data: branchObject,
        });
        console.log(response);
        res.json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.addBranch = addBranch;
