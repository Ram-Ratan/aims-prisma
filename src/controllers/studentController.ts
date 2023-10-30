import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient();

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const response = await prisma.student.findMany();
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createStudent = async (req: Request, res: Response) => {
  const {rollNo,fullName,mobileNo,email,branchName,currentSemester} = req?.body;
  try {
    const response = await prisma.student.create({
      data: {
        rollNo: rollNo,
        fullName: fullName,
        mobileNo: mobileNo,
        email: email,
        user:{
          connect:{
            username:email
          }
        },
        branch:{
          connect:{
            name: branchName
          }
        },
        semester:{
          connect: {
            sem: currentSemester
          }
        },
      }
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


