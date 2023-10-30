import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient();

export const getAllBranch = async (req: Request, res: Response) => {
  try {
    const response = await prisma.branch.findMany();
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addBranch = async (req: Request, res: Response) => {
  const branchObject = req?.body;
  try {
    const response = await prisma.branch.create({
      data: branchObject,
    });
    console.log(response);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
