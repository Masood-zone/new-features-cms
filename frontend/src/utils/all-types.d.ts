// Real-time types
interface LoginFormProps {
  email: string;
  password: string;
}

interface User {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
    phone: string;
    role: string;
    avatar?: string;
    gender: string;
    assigned_class?: {
      id: number;
      name: string;
      description: string;
      supervisorId: number;
    };
  };
}
interface FormUser {
  id: number;
  email: string;
  name: string;
  phone: string;
  role: string;
  avatar?: string;
  gender: string;
}

type Student = {
  id: string | number;
  name: string;
  age: number;
  classId: string | number;
  gender: "male" | "female";
  hasPaid?: boolean;
  amount?: number;
  owing?: number;
  settingsAmount?: number;
  paidBy?: number;
  class?: Class;
};

interface OwingStudentsResponse {
  class: {
    id: number;
    name: string;
    description: string;
    supervisorId: number;
    createdAt: string;
    updatedAt: string;
  };
  owingStudents: OwingStudent[];
  totalOwing: number;
  count: number;
}

interface PaymentResponse {
  student: OwingStudent;
  paymentAmount: number;
  previousOwing: number;
  newOwing: number;
  excessPayment: number;
  fullyPaid: boolean;
}

type RecordsAmount = {
  id?: number;
  name?: string;
  value?: string;
};

type Admin = {
  id?: number;
  name: string;
  phone: string;
  assigned_class?: {
    id: number;
    name: string;
  };
  role: string;
  email: string;
  gender: "male" | "female";
  password?: string;
};

type Teacher = {
  id?: number;
  name: string;
  phone: string;
  assigned_class?: {
    id: number;
    name: string;
  };
  role: string;
  email: string;
  gender: "male" | "female";
  password?: string;
};

type Class = {
  id: number;
  name: string;
  description: string;
  supervisorId: string | number;
  class_teacher?: {
    name: string;
  };
};

interface AuthStore {
  user: User | null | undefined;
  token: token | string | null;
  assigned_class: Class | null;
  isAuthenticated: boolean;
  login: (user) => void;
  logout: () => void;
  isLoading?: boolean;
  setLoading: () => void;
  setLoaded: () => void;
}

interface ProtectedRouteProps {
  children: ReactNode;
  roles?: string[];
}

type CanteenRecord = {
  id: number;
  amount?: number;
  submitedAt: string | Date;
  submitedBy?: number | Date | null;
  payedBy?: number | null;
  isPrepaid?: boolean;
  hasPaid?: boolean;
  classId?: number;
  class?: {
    id: number;
    name: string;
    description: string;
    supervisorId: number;
  };
  settingsAmount: number;
  isAbsent: boolean;
  student?: {
    id?: number;
    name: string;
  } | null;
};

type StudentRecord = {
  id?: number;
  amount?: number;
  payedBy: number | null;
  isPrepaid: boolean;
  hasPaid: boolean;
  submitedBy: number;
  classId: number;
  settingsAmount?: number;
  isAbsent: boolean;
  date?: string;
};

interface AdminAnalytics {
  totalTeachers: number;
  totalStudents: number;
  totalCollections: number;
  totalClasses: number;
}

interface TeacherRecord {
  id: number;
  name: string;
  totalAmount: number;
}

interface TeacherRecord {
  classId: number;
  date: string;
  unpaidStudents?: Array<{
    id: number;
    amount: number;
    paidBy: string;
    hasPaid: boolean;
    date: string;
  }>;
  paidStudents?: Array<{
    id: number;
    amount: number;
    paidBy: string;
    hasPaid: boolean;
    date: string;
  }>;
  absentStudents?: Array<{
    id: number;
    amount_owing: number;
    paidBy: string;
    hasPaid: boolean;
    date: string;
  }>;
  submittedBy: number;
  teacher?: {
    id: number;
    name: string;
  };
}

interface SubmitTeacherRecordPayload {
  classId: number;
  date: string;
  unpaidStudents?: Array<{
    id: number;
    amount: number;
    paidBy: string;
    hasPaid: boolean;
    date: string;
  }>;
  paidStudents?: Array<{
    id: number;
    amount: number;
    paidBy: string;
    hasPaid: boolean;
    date: string;
  }>;
  absentStudents?: Array<{
    id: number;
    amount_owing: number;
    paidBy: string;
    hasPaid: boolean;
    date: string;
  }>;
  submittedBy: number;
}

type Expense = {
  id: number;
  amount: number;
  date: string;
  description: string;
  references?: Reference;
  submittedBy?: number;
};

type Reference = {
  id?: number;
  name?: string;
  description?: string;
};

interface ForgotPasswordFormProps {
  email: string;
}

interface VerifyOTPFormProps {
  otp: string;
}

interface ResetPasswordFormProps {
  password: string;
  confirmPassword: string;
}
