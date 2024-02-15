import { Request, Response } from "express";
import { PrismaClient, attenanceType, classType } from "../../generated/client";

const prisma = new PrismaClient();
interface AuthenticatedRequest extends Request {
  user?: { userId: string };
}

export const markAttendance = async (req: Request, res: Response) => {
  const data = req.body.attendance.map((student: any) => {
    return {
      courseId: req.body.courseId,
      classType: req.body.classType,
      attendanceType:req.body.attendanceType,
      studentId: student.id,
      isPresent: student.isPresent,
      date: new Date(req.body.date),
    };
  });
  try {
    const response = await prisma.attendance.createMany({
      data: data,
      skipDuplicates: true,
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateAttendance = async (req: Request, res: Response) => {
  try {
    const result = req.body.attendance.map(async (student: any) => {
      await prisma.attendance.update({
        where: {
          courseId_classType_attendanceType_studentId_date: {
            classType: req.body.classType,
            attendanceType: req.body.attenanceType,
            courseId: req.body.courseId,
            studentId: student.id,
            date: new Date(req.body.date),
          },
        },
        data: {
          isPresent: student.isPresent,
        },
      });
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAttendanceByCourseAndDate = async (
  req: Request,
  res: Response
) => {
  const date = new Date(req.body.date);
  const courseId = req.body.courseId;
  try {
    const response = await prisma.attendance.findMany({
      where: {
        date: date,
        courseId: courseId,
        classType: req.body.classType,
        attendanceType: req.body.attenanceType
      },
      include: {
        student: true,
      },
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAttendanceByCourseDateId = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  const startDate = req.body?.startDate;
  const endDate = req.body?.endDate;
  const courseId = req.body.courseId;
  const userId = req?.user?.userId;
  try {
    const response = await prisma.attendance.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
        courseId: courseId,
        classType: req.body.classType,
        attendanceType: req.body.attenanceType,
        student: {
          user: {
            id: userId,
          },
        },
      },
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getClassType = async (req: Request, res: Response) => {
  try {
    const result = Object.values(classType);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAttendanceType = async (req: Request, res: Response) => {
  try {
    const result = Object.values(attenanceType);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};