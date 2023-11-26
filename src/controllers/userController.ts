import { Request, Response } from "express";
import { PrismaClient } from "../../generated/client";
import bcrypt from "bcrypt";

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
  console.log("getUser called");
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
