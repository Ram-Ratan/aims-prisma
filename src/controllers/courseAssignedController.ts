import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";

const prisma = new PrismaClient();

interface AuthenticatedRequest extends Request {
  user?: { userId: string };
}

export const courserAssignedById = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req?.user?.userId;
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

