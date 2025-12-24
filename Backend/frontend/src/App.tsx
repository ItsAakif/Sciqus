import React, { useState, useEffect } from 'react';
import './App.css';
import api from './services/api';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface Student {
  id: string;
  name: string;
  email: string;
  courseId: string;
  course: {
    courseName: string;
    courseCode: string;
  };
}

interface Course {
  id: string;
  courseName: string;
  courseCode: string;
  courseDuration: number;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [students, setStudents] = useState<Student[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [filterCourse, setFilterCourse] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user, filterCourse]);

  const loadData = async () => {
    try {
      const coursesData = await api.getCourses();
      setCourses(coursesData);

      if (filterCourse) {
        const studentsData = await api.getStudentsByCourse(filterCourse);
        setStudents(studentsData);
      } else {
        const studentsData = await api.getStudents();
        setStudents(studentsData);
      }
    } catch (err) {
      setError('Failed to load data');
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (isLogin) {
        const data = await api.login({ email, password });
        setUser(data.user);
        setSuccess('Login successful');
      } else {
        const data = await api.register({ email, password, name });
        setUser(data.user);
        setSuccess('Registration successful');
      }
      setEmail('');
      setPassword('');
      setName('');
    } catch (err) {
      setError(isLogin ? 'Login failed' : 'Registration failed');
    }
  };

  const handleLogout = () => {
    api.logout();
    setUser(null);
    setStudents([]);
    setCourses([]);
  };

  const handleCreateStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!studentName || !studentEmail || !selectedCourse) {
      setError('All fields are required');
      return;
    }

    try {
      if (editingStudent) {
        await api.updateStudent(editingStudent.id, {
          name: studentName,
          email: studentEmail,
          courseId: selectedCourse
        });
        setSuccess('Student updated successfully');
        setEditingStudent(null);
      } else {
        await api.createStudent({
          name: studentName,
          email: studentEmail,
          courseId: selectedCourse
        });
        setSuccess('Student created successfully');
      }
      setStudentName('');
      setStudentEmail('');
      setSelectedCourse('');
      await loadData();
    } catch (err) {
      setError(editingStudent ? 'Failed to update student' : 'Failed to create student');
    }
  };

  const handleEditStudent = (student: Student) => {
    setEditingStudent(student);
    setStudentName(student.name);
    setStudentEmail(student.email);
    setSelectedCourse(student.courseId);
    setError('');
    setSuccess('');
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
    setStudentName('');
    setStudentEmail('');
    setSelectedCourse('');
    setError('');
    setSuccess('');
  };

  const handleDeleteStudent = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this student?')) {
      return;
    }

    try {
      await api.deleteStudent(id);
      setSuccess('Student deleted successfully');
      await loadData();
    } catch (err) {
      setError('Failed to delete student');
    }
  };

  if (!user) {
    return (
      <div className="auth-container">
        <div className="card">
          <h1>{isLogin ? 'Login' : 'Register'}</h1>
          <form onSubmit={handleAuth}>
            {!isLogin && (
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {isLogin ? 'Login' : 'Register'}
            </button>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
          </form>
          <div className="auth-toggle">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Register' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Student Management</h1>
        <div className="header-info">
          <span>{user.name} ({user.role})</span>
          <button onClick={handleLogout} className="btn btn-secondary">
            Logout
          </button>
        </div>
      </div>

      {user.role === 'admin' && (
        <div className="card">
          <h2>{editingStudent ? 'Edit Student' : 'Add Student'}</h2>
          <form onSubmit={handleCreateStudent}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Course</label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
              >
                <option value="">Select a course</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.courseName} ({course.courseCode})
                  </option>
                ))}
              </select>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" className="btn btn-primary">
                {editingStudent ? 'Update Student' : 'Add Student'}
              </button>
              {editingStudent && (
                <button type="button" onClick={handleCancelEdit} className="btn btn-secondary">
                  Cancel
                </button>
              )}
            </div>
          </form>
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
        </div>
      )}

      <div className="card">
        <h2>Students</h2>
        {user.role === 'admin' && (
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>Filter by Course</label>
            <select
              value={filterCourse}
              onChange={(e) => setFilterCourse(e.target.value)}
            >
              <option value="">All Courses</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.courseName} ({course.courseCode})
                </option>
              ))}
            </select>
          </div>
        )}
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Course Code</th>
              {user.role === 'admin' && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course.courseName}</td>
                <td>{student.course.courseCode}</td>
                {user.role === 'admin' && (
                  <td>
                    <button
                      onClick={() => handleEditStudent(student)}
                      className="btn btn-primary"
                      style={{ marginRight: '10px' }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteStudent(student.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
