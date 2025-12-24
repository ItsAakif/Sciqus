import { Router, Response } from 'express';
import prisma from '../db/prisma';
import { authenticate, authorize, AuthRequest } from '../middleware/auth';

const router = Router();

router.post('/insert', authenticate, authorize('admin'), async (req: AuthRequest, res: Response) => {
  try {
    const { name, email, courseId } = req.body;

    if (!name || !email || !courseId) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const result = await prisma.$queryRaw`
      SELECT * FROM insert_student_with_course(
        ${name}::VARCHAR,
        ${email}::VARCHAR,
        ${courseId}::VARCHAR
      )
    `;

    res.status(201).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to insert student' });
  }
});

router.put('/update/:id', authenticate, authorize('admin'), async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, courseId } = req.body;

    const result = await prisma.$queryRaw`
      SELECT * FROM update_student_with_course(
        ${id}::VARCHAR,
        ${name || null}::VARCHAR,
        ${email || null}::VARCHAR,
        ${courseId || null}::VARCHAR
      )
    `;

    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to update student' });
  }
});

router.delete('/delete/:id', authenticate, authorize('admin'), async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const result = await prisma.$queryRaw<{delete_student_safe: boolean}[]>`
      SELECT delete_student_safe(${id}::VARCHAR)
    `;

    if (result[0]?.delete_student_safe) {
      res.json({ message: 'Student deleted successfully' });
    } else {
      res.status(500).json({ error: 'Failed to delete student' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to delete student' });
  }
});

router.get('/by-course/:courseId', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const { courseId } = req.params;

    const students = await prisma.$queryRaw`
      SELECT * FROM get_students_by_course(${courseId}::VARCHAR)
    `;

    res.json(students);
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Failed to fetch students' });
  }
});

export default router;
