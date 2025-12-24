# Backend Task 

A backend system for managing students and their associated courses with proper SQL database design, authentication, and role-based access control.

## Live Demo

**Minimal Frontend**: https://aakifmudelbackendtask.vercel.app/

**Test Credentials**:
- **Admin Account**: 
  - Email: `admin@test.com`
  - Password: `admin123`
- **Student Account**: 
  - Email: `student@test.com`
  - Password: `student123`

## Technology Stack

- **Backend**: Node.js, TypeScript, Express.js
- **Database**: PostgreSQL (Neon)
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Frontend**: React, TypeScript (Bonus)
- **Deployment**: Fly.io compatible

## Features Implemented

### Database Design
- ✅ Course table with primary key, unique constraints
- ✅ Student table with foreign key to Course
- ✅ Enforced referential integrity at database level
- ✅ Proper data types and constraints

### Backend API
- ✅ Add student with course assignment (validates course existence)
- ✅ Retrieve students with course information (SQL JOIN)
- ✅ Retrieve students enrolled in specific course
- ✅ Update student details with course reassignment
- ✅ Delete student with proper relationship handling
- ✅ Transaction management for data consistency
- ✅ Stored procedures for insert, update, delete, and query operations

### Authentication & Authorization
- ✅ JWT-based authentication
- ✅ Admin role: Full CRUD access
- ✅ Student role: Read-only access to own data

### Bonus Features
- ✅ Simple React frontend for student registration and viewing
- ✅ Course filtering functionality
- ✅ Update student functionality

## Database Schema

### Courses
- `id` - UUID primary key
- `course_name` - Course name
- `course_code` - Unique course code
- `course_duration` - Duration in weeks
- `created_at` - Timestamp

### Students
- `id` - UUID primary key
- `name` - Student name
- `email` - Unique email
- `course_id` - Foreign key to courses
- `created_at` - Timestamp

### Users
- `id` - UUID primary key
- `email` - Unique email
- `password` - Hashed password
- `name` - User name
- `role` - admin or student
- `created_at` - Timestamp

## API Endpoints

### Authentication
```
POST /api/auth/register - Register new user
POST /api/auth/login    - Login user
```

### Courses
```
POST   /api/courses     - Create course (admin only)
GET    /api/courses     - Get all courses
GET    /api/courses/:id - Get course with students
```

### Students
```
POST   /api/students     - Create student (admin only) [USES TRANSACTION]
GET    /api/students     - Get all students with course info [USES SQL JOIN]
GET    /api/students/:id - Get student details
PUT    /api/students/:id - Update student (admin only) [USES TRANSACTION]
DELETE /api/students/:id - Delete student (admin only)
```

### Stored Procedures
```
POST   /api/procedures/insert          - Insert student via stored procedure
PUT    /api/procedures/update/:id      - Update student via stored procedure
DELETE /api/procedures/delete/:id      - Delete student via stored procedure
GET    /api/procedures/by-course/:id   - Get students by course via stored procedure
```

### Health Check
```
GET /api/health - Health status
```

## Setup Instructions

### Prerequisites
- Node.js 18+
- PostgreSQL database (Neon recommended)

### Backend Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
DATABASE_URL="postgresql://user:password@host:5432/dbname"
JWT_SECRET="your-secret-key"
PORT=3000
NODE_ENV=development
```

3. Initialize database:
```bash
npx prisma migrate dev
npx prisma generate
```

4. Run development server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
REACT_APP_API_URL=http://localhost:3000/api
```

4. Run development server:
```bash
npm start
```

## Usage

### Admin Access
Admins can:
- Create courses
- Add students
- Update student information
- Delete students
- View all data

### Student Access
Students can:
- View course information

