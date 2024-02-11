import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient();

export const getAllCourses = async (req: Request, res: Response) => {
  console.log("get all courses called")
  const { semesterId, branchId, batchId } = req.params;
  try {
    const courses = await prisma.course.findMany({
      where: {
        batchId: batchId?.toString() ,
        semester: {
          some: {
            id: semesterId
          }
        },
        branch: {
          some: {
            id: branchId
          }
        }
      }
    });
    const groupedCourses: { [courseType: string]: typeof courses } = {};
    for (const course of courses) {
      if (!groupedCourses[course.courseType]) {
        groupedCourses[course.courseType] = [];
      }
      groupedCourses[course.courseType].push(course);
    }

    res.json(groupedCourses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addCourse = async (req: Request, res: Response) => {
    const {courseName,courseId, branch,semester} = req?.body;
  try {
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllStremElective = async (req: Request, res: Response) => {
  try {
    const response = await prisma.steamElective.findMany({});
    console.log(response);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};