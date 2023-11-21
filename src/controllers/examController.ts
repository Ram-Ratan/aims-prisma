import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient();

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
  req: Request,
  res: Response
) => {
  const examId = req?.query?.examId?.toString();
  const userId = req?.query?.studentId?.toString();
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

