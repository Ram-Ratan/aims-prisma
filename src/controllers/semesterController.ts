import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient();

export const getAllSemester = async (req: Request, res: Response) => {
  try {
    const response = await prisma.semester.findMany();
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addSemester = async (req: Request, res: Response) => {
  const semesterObject = req?.body;
  try {
    const response = await prisma.semester.create({
      data: semesterObject,
    });
    console.log(response);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
