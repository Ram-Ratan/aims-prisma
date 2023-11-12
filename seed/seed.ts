// seed.ts
import { PrismaClient } from "../generated/client";

const prisma = new PrismaClient();

async function seedData() {
  try {
    let user:any[] = [];
    for (let index = 20201; index <= 20249; index++) {
        const obj = {
          username: `${index}@iiitu.ac.in`,
          password: "12345",
          email: `${index}@iiitu.ac.in`,
          role: "STUDENT"
        };
        user.push(obj);
    }
    await prisma.user.createMany({
      data: user,
    });
    const students = await prisma.user.findMany({
        where:{
            role: "STUDENT"
        }
    })

    

    const semesterData = [
        {
            sem: 1,
        },
        {
            sem: 2,
        },
        {
            sem: 3,
        },
        {
            sem: 4,
        },
        {
            sem: 5,
        },
        {
            sem: 6,
        },
        {
            sem: 7,
        },
        {
            sem: 8,
        }
    ]
    const semesters = await prisma.semester.createMany({
        data: semesterData
    })

    const branchData = [
      {
        name: "CSE",
      },
      {
        name: "ECE",
      },
      {
        name: "IT",
      },
    ];

    const branchs = await prisma.branch.createMany({
        data: branchData
    })
    // const user = await prisma.user.findMany({});
    const branch = await prisma.branch.findMany({});
    const semester = await prisma.semester.findMany({});


    let student: any[] = [];
    for (let index = 20201; index <= 20249; index++) {
      const obj = {
        rollNo: index.toString(),
        fullName: "",
        semesterId: semester[6]?.id,
        branchId: branch[1]?.id,
        mobileNo: "",
        email: students[index-20201]?.email,
        userId: students[index-20201]?.id,
      };
      student.push(obj);
    }

    await prisma.student.createMany({
      data: student
    });


    const courseData = [
      {
        name: "Professional Ethics",
        courseId: "HMC701",
        branchId: branch[1].id,
        semesterId: semester[6].id,
      },
      {
        name: "Fiber Optics and Communication",
        courseId: "ECPE41",
        branchId: branch[1].id,
        semesterId: semester[6].id,
      },
      {
        name: "VLSI Design",
        courseId: "ECPE42",
        branchId: branch[1].id,
        semesterId: semester[6].id,
      },
      {
        name: "Antenna and Wave Propagation",
        courseId: "ECPE51",
        branchId: branch[1].id,
        semesterId: semester[6].id,
      },
      {
        name: "Application specific integrated Circuit",
        courseId: "ECPE52",
        branchId: branch[1].id,
        semesterId: semester[6].id,
      },
      {
        name: "Nanoscience and Nanotechnology",
        courseId: "ECPE61",
        branchId: branch[1].id,
        semesterId: semester[6].id,
      },
      {
        name: "Wireless Communication",
        courseId: "ECPE62",
        branchId: branch[1].id,
        semesterId: semester[6].id,
      },
    ];
    const courseS = await prisma.course.createMany({
        data: courseData
    })

    console.log("Data seeded successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedData();
