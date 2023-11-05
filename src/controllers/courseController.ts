import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient();

export const getAllCourses = async (req: Request, res: Response) => {
  console.log("get all courses called")
  const {semesterId, branchId} = req?.query;
  try {
    const courses = await prisma.course.findMany({
      where:{
        semesterId: semesterId?.toString(),
        branchId: branchId?.toString(),
      }
    });
    console.log(courses)
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addCourse = async (req: Request, res: Response) => {
    const {courseName,courseId, branch,semester} = req?.body;
  try {
    const response = await prisma.course.create({
        data: {
          name: courseName,
          semester:{
            connect:{
              sem: semester
            }
          },
          branch: {
            connect: {
              name: branch
            }
          },
          courseId: courseId
        }
    })
    console.log(response);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
