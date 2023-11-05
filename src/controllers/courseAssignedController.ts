import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient();

export const courserAssignedById = async (req: Request, res: Response) => {
  try {
    const userId = req?.query?.id?.toString();
    const response = await prisma.faculty.findUnique({
      where: {
        userId: userId,
      },
      select: {
        courseAssigned:{
            include:{
                course: true
            }
        }
      },
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

