const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData extends LoginCredentials {
  name: string;
  role?: string;
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

class ApiService {
  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    const token = this.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  }

  async login(credentials: LoginCredentials) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) throw new Error('Login failed');
    const data = await response.json();
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data;
  }

  async register(data: RegisterData) {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Registration failed');
    const result = await response.json();
    localStorage.setItem('token', result.token);
    localStorage.setItem('user', JSON.stringify(result.user));
    return result;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  async getCourses(): Promise<Course[]> {
    const response = await fetch(`${API_URL}/courses`, {
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error('Failed to fetch courses');
    return response.json();
  }

  async getStudents(): Promise<Student[]> {
    const response = await fetch(`${API_URL}/students`, {
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error('Failed to fetch students');
    return response.json();
  }

  async getStudentsByCourse(courseId: string): Promise<Student[]> {
    const response = await fetch(`${API_URL}/students?courseId=${courseId}`, {
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error('Failed to fetch students');
    return response.json();
  }

  async createStudent(data: { name: string; email: string; courseId: string }) {
    const response = await fetch(`${API_URL}/students`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create student');
    return response.json();
  }

  async deleteStudent(id: string) {
    const response = await fetch(`${API_URL}/students/${id}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error('Failed to delete student');
    return response.json();
  }

  async updateStudent(id: string, data: { name?: string; email?: string; courseId?: string }) {
    const response = await fetch(`${API_URL}/students/${id}`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update student');
    return response.json();
  }
}

export default new ApiService();
