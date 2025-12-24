import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@test.com' },
    update: {},
    create: {
      email: 'admin@test.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin'
    }
  });

  const course1 = await prisma.course.upsert({
    where: { courseCode: 'CS101' },
    update: {},
    create: {
      courseName: 'Computer Science',
      courseCode: 'CS101',
      courseDuration: 16
    }
  });

  const course2 = await prisma.course.upsert({
    where: { courseCode: 'BUS201' },
    update: {},
    create: {
      courseName: 'Business Administration',
      courseCode: 'BUS201',
      courseDuration: 12
    }
  });

  const studentPassword = await bcrypt.hash('student123', 10);
  const studentUser = await prisma.user.upsert({
    where: { email: 'student@test.com' },
    update: {},
    create: {
      email: 'student@test.com',
      password: studentPassword,
      name: 'Student User',
      role: 'student'
    }
  });

  console.log('Seed data created:', { admin, studentUser, course1, course2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
