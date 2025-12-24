-- Database Schema

-- Courses Table
CREATE TABLE courses (
    id VARCHAR PRIMARY KEY,
    course_name VARCHAR NOT NULL,
    course_code VARCHAR UNIQUE NOT NULL,
    course_duration INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Students Table with Foreign Key
CREATE TABLE students (
    id VARCHAR PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    course_id VARCHAR NOT NULL,
    user_id VARCHAR UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_course
        FOREIGN KEY (course_id)
        REFERENCES courses(id)
);

-- Users Table (for authentication)
CREATE TABLE users (
    id VARCHAR PRIMARY KEY,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    role VARCHAR NOT NULL,
    name VARCHAR NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_students_course_id ON students(course_id);
CREATE INDEX idx_students_email ON students(email);
CREATE INDEX idx_courses_code ON courses(course_code);
