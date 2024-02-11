import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

const prisma = new PrismaClient();

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { username, password } = req?.body;
  try {
    const users = await prisma.user.findUnique({
      where: {
        username: username,
        password: password,
      },
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addMultipleUsers = async (req: Request, res: Response) => {
  try {
    const response = await prisma.user.createMany({
      data: req.body,
      skipDuplicates: true,
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const response = await prisma.user.create({
      data: req.body,
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email: email,
        username: email,
        password: hashedPassword,
        role: role,
      },
    });

    switch (role) {
      case "STUDENT":
        const { student } = req.body;
        await prisma.student.create({
          data: {
            userId: user.id,
            fullName: student?.fullName,
            rollNo: student?.rollNo,
            semesterId: student?.semesterId,
            branchId: student?.branchId,
            mobileNo: student?.mobileNo,
            email: user?.email,
            batchId:student?.batchId
          },
        });
        break;
      case "FACULTY":
        const { faculty } = req.body;
        await prisma.faculty.create({
          data: {
            fullName: faculty?.fullName,
            email: user?.email,
            userId: user?.id,
            department: faculty?.department,
          },
        });
        break;
      case "ADMIN":
        const { admin } = req.body;
        await prisma.admin.create({
          data: {
            fullName: admin?.fullName,
            email: user?.email,
            userId: user?.id,
          },
        });
        break;
    }
    res.status(201).json({ id: user.id, email: user.email });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};


export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      },
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
interface AuthenticatedRequest extends Request {
  user?: { userId: string };
}

export const getUserAuth = async (req: AuthenticatedRequest, res: Response) => {
  const { username, password } = req?.body;
  try {
    const userId = req?.user?.userId;
    const user = await prisma.user.findUnique({
      where:{
        id: userId,
      },
      select:{
        email: true,
        role: true
      }
    })
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  const { email, oldPassword, newPassword } = req?.body;
  try {

    const user = await prisma.user.findUnique({
      where: {
        email
      },
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const result = await prisma.user.update({
      where: {
        email: email
      },
      data: {
        password: hashedPassword,
      }
    })
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};