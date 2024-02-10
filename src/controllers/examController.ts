import { Request, Response } from "express";
import { PrismaClient, examCode, examType } from "../../generated/client";

const prisma = new PrismaClient();
interface AuthenticatedRequest extends Request {
  user?: { userId: string };
}

export const addExamEntries = async (req: Request, res: Response) => {
  const marksObject = req?.body?.marks?.map((ele:any)=>{
    console.log({
      examCode: req.body.examCode,
      examType: req.body.examType,
      courseId: req?.body?.courseId,
      studentId: ele?.studentId,
      marksObtained: ele?.marksObtained,
      remarks: ele?.remarks,
    });
    return {
        examCode: req.body.examCode,
        examType: req.body.examType,
        courseId: req?.body?.courseId,
        studentId: ele?.studentId,
        marksObtained: ele?.marksObtained,
        remarks: ele?.remarks
    }
  })
  try {
    const response = await prisma.marksEntry.createMany({
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
      await prisma.marksEntry.update({
        where: {
          examCode_examType_courseId_studentId: {
            examCode: req.body.examCode,
            examType: req.body.examType,
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
  const examCode = req.query.examCode?.toString();
  const examType = req?.query?.examType?.toString();
    const courseId = req?.query?.courseId?.toString();
  try {
    // const response = await prisma.marksEntry.findMany({
    //     where: {
    //       examCode: examCode,
    //       examType: examType,
    //       courseId: courseId
    //     }
    // });
    // res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getExamEntriesByExamStudentId = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const examCode = req?.query?.examCode;
  const examType = req?.query?.examType;
  const userId = req?.user?.userId;
  try {
    // const response = await prisma.marksEntry.findMany({
    //   where: {
    //     examCode: examCode,
    //     examType: examType,
    //     student:{
    //       userId: userId
    //     }
    //   },
    //   include:{
    //     course: {
    //       select:{
    //         name: true
    //       }
    //     }
    //   }
    // });
    // res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getExamType = async (req: Request, res: Response) => {
  try {
    const result = examType;
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getExamCode = async (req: Request, res: Response) => {
  try {
    const result = examCode;
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};