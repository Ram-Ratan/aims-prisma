import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient();

interface AuthenticatedRequest extends Request {
  user?: { userId: string };
}

export const getFacultyDetails = async (req: AuthenticatedRequest, res: Response) => {
  const userId = req?.user?.userId;
  try {
    const users = await prisma.faculty.findUnique({
      where: {
        userId: userId
      },
      select:{
        fullName: true,
        department: true,
        email: true,
        courseAssigned:{
          select:{
            course:{
              select:{
                name: true
              }
            }
          }
        }
      }
    });
    console.log(res);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllFaculty = async (
  req: Request,
  res: Response
) => {
  try {
    const faculty = await prisma.faculty.findMany({});
    res.json(faculty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addFaculty = async (req: Request, res: Response) => {
  const { fullName, email, userId, department } = req.body;
  try {
    const users = await prisma.faculty.create({
      data:{
        fullName: fullName,
        email: email,
        userId: userId,
        department: department
      }
    });
    console.log(res);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
