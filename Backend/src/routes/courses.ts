import { Router, Response } from 'express';
import prisma from '../db/prisma';
import { authenticate, authorize, AuthRequest } from '../middleware/auth';

const router = Router();

router.post('/', authenticate, authorize('admin'), async (req: AuthRequest, res: Response) => {
  try {
    const { courseName, courseCode, courseDuration } = req.body;

    if (!courseName || !courseCode || !courseDuration) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingCourse = await prisma.course.findUnique({
      where: { courseCode }
    });

    if (existingCourse) {
      return res.status(400).json({ error: 'Course code already exists' });
    }

    const course = await prisma.course.create({
      data: {
        courseName,
        courseCode,
        courseDuration: parseInt(courseDuration)
      }
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create course' });
  }
});

router.get('/', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: 'desc' }
    });

    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

router.get('/:id', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        students: true
      }
    });

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});

export default router;
