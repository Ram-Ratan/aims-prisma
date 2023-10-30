import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient();

export const markAttendance = async (req: Request, res: Response) => {
  const data = req.body.students.map((student:any)=>{
    return {
      courseId: req.body.courseId,
      studentId: student.id,
      isPresent: student.isPresent,
      date: new Date(req.body.date)
    }
  })
  try {
    const response = await prisma.attendance.createMany({
      data: data,
      skipDuplicates: true
    })
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAttendanceByCourseAndDate = async (req: Request, res: Response) => {
  const date =  new Date(req.body.date);
  const courseId = req.body.courseId;
  try {
    const response = await prisma.attendance.findMany({
      where: {
        date: date,
        courseId: courseId,
      },
      include: {
        student: true
      }
    })
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAttendanceByCourseDateId = async (
  req: Request,
  res: Response
) => {
  const date = new Date(req.body.date);
  const courseId = req.body.courseId;
  const studentId = req.body.studentId;
  try {
    const response = await prisma.attendance.findMany({
      where: {
        date: date,
        courseId: courseId,
        studentId: studentId
      }
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};