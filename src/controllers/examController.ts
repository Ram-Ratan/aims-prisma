import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient();
interface AuthenticatedRequest extends Request {
  user?: { userId: string };
}

export const getExam = async (req: Request, res: Response) => {
  try {
    const response = await prisma.exam.findMany();
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addExam = async (req: Request, res: Response) => {
  const {name} = req?.body;
  try {
    const response = await prisma.exam.create({
      data: {
        name: name,
        code: name
      },
    });
    console.log(response);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addExamEntries = async (req: Request, res: Response) => {
  const marksObject = req?.body?.marks?.map((ele:any)=>{
    console.log({
      examId: req?.body?.examId,
      courseId: req?.body?.courseId,
      studentId: ele?.studentId,
      marksObtained: ele?.marksObtained,
      remarks: ele?.remarks,
    });
    return {
        examId: req?.body?.examId,
        courseId: req?.body?.courseId,
        studentId: ele?.studentId,
        marksObtained: ele?.marksObtained,
        remarks: ele?.remarks
    }
  })
  try {
    const response = await prisma.examMarksEntry.createMany({
      data: marksObject,
    });
    console.log(response);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateExamEntries = async (req: Request, res: Response) => {
  try {
    const response = req.body?.marks?.map(async (ele:any)=>{
      await prisma.examMarksEntry.update({
        where: {
          examId_studentId_courseId: {
            examId: req?.body?.examId,
            courseId: req?.body?.courseId,
            studentId: ele?.studentId,
          },
        },
        data: {
          marksObtained: ele?.marksObtained,
          remarks: ele?.remarks,
        },
      });
    })
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getExamEntriesByCourseExam = async (req: Request, res: Response) => {
    const examId = req?.query?.examId?.toString();
    const courseId = req?.query?.courseId?.toString();
  try {
    const response = await prisma.examMarksEntry.findMany({
        where: {
            examId: examId,
            courseId: courseId
        }
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getExamEntriesByExamStudentId = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const examId = req?.query?.examId?.toString();
  const userId = req?.user?.userId;
  try {
    const response = await prisma.examMarksEntry.findMany({
      where: {
        examId: examId,
        student:{
          userId: userId
        }
      },
      include:{
        course: {
          select:{
            name: true
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

