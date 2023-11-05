import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient();

export const courseRegistration = async (req: Request, res: Response) => {
  const data = req?.body?.courses?.map((course:any)=>{
    return {
        courseId: course,
        studentId: req?.body?.studentId
    }
  })
  try {
    const courses = await prisma.studentCourseRegistration.createMany({
        data: data,
        skipDuplicates: true
    })
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const courserRegisteredById = async (req: Request, res: Response) => {
  try {
    const userId = req?.query?.id?.toString()
    const response = await prisma.student.findUnique({
        where: {
            userId: userId
        },
        select: {
            courseRegistered: {
                include: {
                    course: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        }
    })
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getStudentByCourse = async (req: Request, res: Response) => {
  try {
    const courseId = req?.query?.courseId?.toString();
    const response = await prisma.studentCourseRegistration.findMany({
      orderBy:{
        student:{
          rollNo: "asc"
        }
      },
      where:{
        courseId: courseId
      },
      include:{
        student:{
          select:{
            rollNo: true,
            fullName: true,
          }
        }
      }
    })
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};




