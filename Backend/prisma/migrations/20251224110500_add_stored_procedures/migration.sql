-- CreateTable
CREATE TABLE IF NOT EXISTS "stored_procedures" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);

-- Stored Procedure: Insert Student with Course Validation
CREATE OR REPLACE FUNCTION insert_student_with_course(
    p_name VARCHAR,
    p_email VARCHAR,
    p_course_id VARCHAR
) RETURNS TABLE (
    id VARCHAR,
    name VARCHAR,
    email VARCHAR,
    course_id VARCHAR,
    created_at TIMESTAMP
) AS $$
BEGIN
    -- Check if course exists
    IF NOT EXISTS (SELECT 1 FROM courses WHERE id = p_course_id) THEN
        RAISE EXCEPTION 'Course does not exist';
    END IF;

    -- Check if email already exists
    IF EXISTS (SELECT 1 FROM students WHERE email = p_email) THEN
        RAISE EXCEPTION 'Email already registered';
    END IF;

    -- Insert student
    RETURN QUERY
    INSERT INTO students (id, name, email, course_id, created_at)
    VALUES (gen_random_uuid()::TEXT, p_name, p_email, p_course_id, NOW())
    RETURNING students.id, students.name, students.email, students.course_id, students.created_at;
END;
$$ LANGUAGE plpgsql;

-- Stored Procedure: Update Student with Course Reassignment
CREATE OR REPLACE FUNCTION update_student_with_course(
    p_student_id VARCHAR,
    p_name VARCHAR DEFAULT NULL,
    p_email VARCHAR DEFAULT NULL,
    p_course_id VARCHAR DEFAULT NULL
) RETURNS TABLE (
    id VARCHAR,
    name VARCHAR,
    email VARCHAR,
    course_id VARCHAR,
    created_at TIMESTAMP
) AS $$
BEGIN
    -- Check if student exists
    IF NOT EXISTS (SELECT 1 FROM students WHERE id = p_student_id) THEN
        RAISE EXCEPTION 'Student not found';
    END IF;

    -- Check if new course exists (if provided)
    IF p_course_id IS NOT NULL AND NOT EXISTS (SELECT 1 FROM courses WHERE id = p_course_id) THEN
        RAISE EXCEPTION 'Course does not exist';
    END IF;

    -- Check email uniqueness (if provided and different)
    IF p_email IS NOT NULL AND EXISTS (
        SELECT 1 FROM students 
        WHERE email = p_email AND id != p_student_id
    ) THEN
        RAISE EXCEPTION 'Email already registered';
    END IF;

    -- Update student
    RETURN QUERY
    UPDATE students
    SET 
        name = COALESCE(p_name, students.name),
        email = COALESCE(p_email, students.email),
        course_id = COALESCE(p_course_id, students.course_id)
    WHERE id = p_student_id
    RETURNING students.id, students.name, students.email, students.course_id, students.created_at;
END;
$$ LANGUAGE plpgsql;

-- Stored Procedure: Delete Student with Course Handling
CREATE OR REPLACE FUNCTION delete_student_safe(
    p_student_id VARCHAR
) RETURNS BOOLEAN AS $$
DECLARE
    student_exists BOOLEAN;
BEGIN
    -- Check if student exists
    SELECT EXISTS(SELECT 1 FROM students WHERE id = p_student_id) INTO student_exists;
    
    IF NOT student_exists THEN
        RAISE EXCEPTION 'Student not found';
    END IF;

    -- Delete student (foreign key is not restricting this)
    DELETE FROM students WHERE id = p_student_id;
    
    RETURN TRUE;
END;
$$ LANGUAGE plpgsql;

-- Stored Procedure: Get Students by Course
CREATE OR REPLACE FUNCTION get_students_by_course(
    p_course_id VARCHAR
) RETURNS TABLE (
    student_id VARCHAR,
    student_name VARCHAR,
    student_email VARCHAR,
    course_name VARCHAR,
    course_code VARCHAR,
    course_duration INTEGER
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        s.id,
        s.name,
        s.email,
        c.course_name,
        c.course_code,
        c.course_duration
    FROM students s
    INNER JOIN courses c ON s.course_id = c.id
    WHERE c.id = p_course_id
    ORDER BY s.created_at DESC;
END;
$$ LANGUAGE plpgsql;
