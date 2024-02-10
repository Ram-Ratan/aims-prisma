import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient();

export const getAllCourses = async (req: Request, res: Response) => {
  console.log("get all courses called")
  const { semesterId, branchId, batchId } = req.params;
  try {
    const courses = await prisma.course.findMany({
      where: {
        AND: [
        { batchId: batchId?.toString() },
        {semester: {
          some: {
            id: semesterId
          }
        }},
        {branch: {
          some: {
            id: branchId
          }
        }}]
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
    // const response = await prisma.course.create({
    //     data: {
    //       name: courseName,
    //       semester:{
    //         connect:{
    //           sem: semester
    //         }
    //       },
    //       branch: {
    //         connect: {
    //           name: branch
    //         }
    //       }
    //     }
    // })
    // console.log(response);
    // res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
