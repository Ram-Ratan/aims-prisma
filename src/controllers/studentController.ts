import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient();

interface AuthenticatedRequest extends Request {
  user?: { userId: string };
}

export const getStudents = async (req: AuthenticatedRequest, res: Response) => {
  const userId = req?.user?.userId;
  try {
    const response = await prisma.student.findUnique({
      where:{
        userId: userId?.toString()
      },
      include:{
        semester:true,
        branch:true,
        courseRegistered: {
          select:{
            course: true
          }
        }
      }
    });
    console.log(response);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createStudent = async (req: Request, res: Response) => {
  const {rollNo,fullName,mobileNo,email,branchName,currentSemester,batchCode} = req?.body;
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
        batch: {
          connect: {
            code: batchCode
          }
        }
      }
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


