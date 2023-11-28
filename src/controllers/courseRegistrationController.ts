import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient();

interface AuthenticatedRequest extends Request {
  user?: { userId: string };
}

export const courseRegistration = async (req: AuthenticatedRequest, res: Response) => {
 
  try {
     const student = await prisma.student.findUnique({
       where: {
         userId: req?.user?.userId,
       },
     });
     const data = req?.body?.courses?.map((course: any) => {
       return {
         courseId: course,
         studentId: student?.id,
       };
     });
     console.log(data);
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

export const courserRegisteredById = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req?.user?.userId;
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




