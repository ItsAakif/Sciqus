import { Router, Response } from 'express';
import prisma from '../db/prisma';
import { authenticate, authorize, AuthRequest } from '../middleware/auth';

const router = Router();

router.post('/', authenticate, authorize('admin'), async (req: AuthRequest, res: Response) => {
  try {
    const { name, email, courseId } = req.body;

    if (!name || !email || !courseId) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const student = await prisma.$transaction(async (tx) => {
      const course = await tx.course.findUnique({
        where: { id: courseId }
      });

      if (!course) {
        throw new Error('Course does not exist');
      }

      const existingStudent = await tx.student.findUnique({
        where: { email }
      });

      if (existingStudent) {
        throw new Error('Email already registered');
      }

      return await tx.student.create({
        data: {
          name,
          email,
          courseId
        },
        include: {
          course: true
        }
      });
    });

    res.status(201).json(student);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to create student' });
  }
});

router.get('/', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const { courseId } = req.query;

    if (req.user?.role === 'student') {
      const student = await prisma.student.findFirst({
        where: { 
          OR: [
            { userId: req.user.userId },
            { email: req.user.email }
          ]
        },
        include: {
          course: true
        }
      });

      if (!student) {
        return res.status(404).json({ error: 'Student record not found for this user' });
      }

      return res.json([student]);
    }

    const where = courseId ? { courseId: courseId as string } : {};

    const students = await prisma.student.findMany({
      where,
      include: {
        course: true
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

router.get('/:id', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const student = await prisma.student.findUnique({
      where: { id },
      include: {
        course: true
      }
    });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    if (req.user?.role === 'student') {
      if (student.userId !== req.user.userId && student.email !== req.user.email) {
        return res.status(403).json({ error: 'Access denied' });
      }
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch student' });
  }
});

router.put('/:id', authenticate, authorize('admin'), async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, courseId } = req.body;

    const updatedStudent = await prisma.$transaction(async (tx) => {
      const student = await tx.student.findUnique({
        where: { id }
      });

      if (!student) {
        throw new Error('Student not found');
      }

      if (courseId) {
        const course = await tx.course.findUnique({
          where: { id: courseId }
        });

        if (!course) {
          throw new Error('Course does not exist');
        }
      }

      if (email && email !== student.email) {
        const existingStudent = await tx.student.findUnique({
          where: { email }
        });

        if (existingStudent) {
          throw new Error('Email already registered');
        }
      }

      return await tx.student.update({
        where: { id },
        data: {
          ...(name && { name }),
          ...(email && { email }),
          ...(courseId && { courseId })
        },
        include: {
          course: true
        }
      });
    });

    res.json(updatedStudent);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to update student' });
  }
});

router.delete('/:id', authenticate, authorize('admin'), async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const student = await prisma.student.findUnique({
      where: { id }
    });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    await prisma.student.delete({
      where: { id }
    });

    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete student' });
  }
});

export default router;
