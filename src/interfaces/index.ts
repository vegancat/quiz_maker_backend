export interface User {
  authData: {
    username: string;
    password: string;
  };
  lName: string;
  fName: string;
}

export interface Student extends User {
  courses: string[];
  questions: string[];
}

export interface Instructor extends User {
  courses: string[];
}

export interface Module {
  id: number;
  name: string;
}

export interface Course {
  courseId: string;
  password: string;
  name: string;
  logo: string;
  instructor: string;
  students: string[];
  modules: Module[];
}

export interface Question {
  title: string;
  body?: string;
  answer: string;
  studentId: string;
  courseId: string;
  moduleId: number;
  usage: {
    count: number;
    exams: string[];
  };
}
