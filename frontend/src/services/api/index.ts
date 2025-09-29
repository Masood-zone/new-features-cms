import { apiClient } from "../root";

/**
 * Fetch all records.
 */
export const fetchRecords = async () => {
  try {
    const response = await apiClient.get("/records");
    return response.data;
  } catch (error) {
    console.error("Error fetching records:", error);
    throw error;
  }
};
export const fetchDashboardSummary = async () => {
  try {
    const response = await apiClient.get("/records/dashboard-summary");
    return response.data;
  } catch (error) {
    console.error("Error fetching records:", error);
    throw error;
  }
};
/**
 * Fetch canteen amount.
 */
export const fetchRecordsAmount = async () => {
  try {
    const response = await apiClient.get("/settings/amount");
    return response.data;
  } catch (error) {
    console.error("Error fetching records amount:", error);
    throw error;
  }
};

/**
 * Update User
 */
export const updateUser = async (data: FormUser) => {
  try {
    const response = await apiClient.patch(`/users/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
/**
 * Update Teacher
 */
export const updateTeacher = async (data: Teacher) => {
  try {
    const response = await apiClient.patch(`/teachers/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
/**
 * Update Teacher
 */
export const updateAdmin = async (data: Admin) => {
  try {
    const response = await apiClient.patch(`/admins/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

/**
 * Fetch all admins.
 */
export const fetchAdmins = async () => {
  try {
    const response = await apiClient.get("/admins");
    return response.data;
  } catch (error) {
    console.error("Error fetching teachers:", error);
    throw error;
  }
};
/**
 * Fetch admin
 */
export const fetchAdmin = async (id: number) => {
  try {
    const response = await apiClient.get(`/admins/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teacher:", error);
    throw error;
  }
};
/**
 * Create Admin
 */
export const createAdmin = async (data: Admin) => {
  try {
    const response = await apiClient.post("/auth/signup", data);
    return response.data;
  } catch (error) {
    console.error("Error creating teacher:", error);
    throw error;
  }
};
/**
 * Fetch all teachers.
 */
export const fetchTeachers = async () => {
  try {
    const response = await apiClient.get("/teachers");
    return response.data.teachers;
  } catch (error) {
    console.error("Error fetching teachers:", error);
    throw error;
  }
};
/**
 * Fetch teacher
 */
export const fetchTeacher = async (id: number) => {
  try {
    const response = await apiClient.get(`/teachers/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teacher:", error);
    throw error;
  }
};
/**
 * Create teacher
 */
export const createTeacher = async (data: Teacher) => {
  try {
    const response = await apiClient.post("/auth/signup", data);
    return response.data;
  } catch (error) {
    console.error("Error creating teacher:", error);
    throw error;
  }
};
/**
 * Fetch References
 */
export const fetchReferences = async () => {
  try {
    const response = await apiClient.get("/references");
    return response.data;
  } catch (error) {
    console.error("Error fetching references:", error);
    throw error;
  }
};

/**
 * Fetch all classes.
 */
export const fetchClasses = async () => {
  try {
    const response = await apiClient.get("/classes");
    return response.data;
  } catch (error) {
    console.error("Error fetching classes:", error);
    throw error;
  }
};

/**
 * Update class
 */
export const updateClass = async (data: Class) => {
  try {
    const response = await apiClient.put(`/classes/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating class:", error);
    throw error;
  }
};
/**
 * Update References
 */
export const updateReference = async (data: Reference) => {
  try {
    const response = await apiClient.put(`/references/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating references:", error);
    throw error;
  }
};

/**
 * Create a new class.
 * @param data - Class creation data.
 */
export const createClass = async (data: {
  name: string;
  description: string;
  supervisorId: number;
}) => {
  try {
    const response = await apiClient.post("/classes", data);
    return response.data;
  } catch (error) {
    console.error("Error creating class:", error);
    throw error;
  }
};

/**
 * Create a References
 */
export const createReference = async (data: Reference) => {
  try {
    const response = await apiClient.post("/references", data);
    return response.data;
  } catch (error) {
    console.error("Error creating reference:", error);
    throw error;
  }
};

/**
 * Fetch class by id.
 */
export const fetchClass = async (id: number) => {
  try {
    const response = await apiClient.get(`/classes/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching class:", error);
    throw error;
  }
};

/**
 * Fetch all students.
 */
export const fetchStudents = async () => {
  try {
    const response = await apiClient.get("/students");
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

/**
 * Fetch all owing students
 */
export const fetchAllOwingStudents = async () => {
  try {
    const response = await apiClient.get("/admins/owing-students");
    return response.data;
  } catch (error) {
    console.error("Error fetching owing students:", error);
    throw error;
  }
};
/**
 * Fetch all students in a class.
 */
export const fetchStudentsInClass = async (id: number) => {
  try {
    const response = await apiClient.get(`/students/class/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching students in class:", error);
    throw error;
  }
};

/**
 * Fetch all expenses.
 */
export const fetchExpenses = async () => {
  try {
    const response = await apiClient.get("/expenses");
    return response.data;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    throw error;
  }
};

/**
 * Create a new expense.
 */
export const createExpense = async (data: Expense) => {
  try {
    const response = await apiClient.post("/expenses", data);
    return response.data;
  } catch (error) {
    console.error("Error creating expense:", error);
    throw error;
  }
};

/**
 * Fetch expense by id.
 */
export const fetchExpense = async (id: number) => {
  try {
    const response = await apiClient.get(`/expenses/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching expense:", error);
    throw error;
  }
};

// Fetch reference by id

export const fetchReference = async (id: number) => {
  try {
    const response = await apiClient.get(`/references/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching reference:", error);
    throw error;
  }
};
/**
 * Update an expense.
 */
export const updateExpense = async (data: Expense) => {
  try {
    const response = await apiClient.put(`/expenses/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating expense:", error);
    throw error;
  }
};

/**
 * Fetch a student.
 */
export const fetchStudent = async (id: number) => {
  try {
    const response = await apiClient.get(`/students/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teacher:", error);
    throw error;
  }
};
/**
 * Update a student.
 */
export const updateStudent = async (data: Student) => {
  try {
    const response = await apiClient.put(`/students/${data.id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating student:", error);
    throw error;
  }
};

/**
 * Create a new student.
 * @param data - Student creation data.
 */
export const createStudent = async (data: Student) => {
  try {
    const response = await apiClient.post("/students", data);
    return response.data;
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
};

/**
 * Fetch all records of a class by date.
 */
export const fetchRecordsByClassAndDate = async (
  classId: number,
  date: string
) => {
  try {
    const response = await apiClient.get(`/records/${classId}?date=${date}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching records:", error);
    throw error;
  }
};

/**
 * Fetch all records of unpaid students.
 */
export const getTeacherSubmittedRecords = async (
  teacherId: number,
  date: string
) => {
  try {
    const response = await apiClient.get(
      `/records/teacher/${teacherId}?date=${date}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching teacher submitted records:", error);
    throw error;
  }
};
export const getTeacherRecords = async (dateFormat: string) => {
  try {
    const response = await apiClient.get(
      `/records/teachers?date=${dateFormat}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching teacher records:", error);
    throw error;
  }
};

//Query: Get students records by class and date
export const getStudentRecordsByClassAndDate = async (
  classId: number,
  date: string
) => {
  try {
    const response = await apiClient.get(`/records/${classId}?date=${date}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching student records:", error);
    throw error;
  }
};

/**
 * Fetch owing students in teacher's class
 */
export const fetchTeacherOwingStudents = async (teacherId: number) => {
  try {
    const response = await apiClient.get(
      `/teachers/${teacherId}/owing-students`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching owing students:", error);
    throw error;
  }
};

/**
 * Fetch students in teacher's class
 */
export const fetchTeacherClassStudents = async (teacherId: number) => {
  try {
    const response = await apiClient.get(
      `/teachers/${teacherId}/owing-students`
    );
    return response.data.owingStudents;
    // if (classData && classData.id) {
    //   const studentsResponse = await apiClient.get(
    //     `/students/class/${classData.id}`
    //   );
    //   return studentsResponse.data;
    // }
    // return [];
  } catch (error) {
    console.error("Error fetching students in teacher's class:", error);
    throw error;
  }
};

/**
 * Fetch student owing details
 */
export const fetchStudentOwingDetails = async (studentId: number) => {
  try {
    const response = await apiClient.get(`/students/${studentId}/owing`);
    return response.data;
  } catch (error) {
    console.error("Error fetching student owing details:", error);
    throw error;
  }
};

/**
 * Pay student owing
 */
export const payStudentOwing = async (studentId: number, amount: number) => {
  try {
    const response = await apiClient.post(`/students/${studentId}/pay`, {
      amount,
    });
    return response.data;
  } catch (error) {
    console.error("Error paying student owing:", error);
    throw error;
  }
};

//Mutation: Generate records for students based on classID and date
export const generateRecordForADate = async (classId: number, date: string) => {
  try {
    const response = await apiClient.post(
      `/records/generate-daily?date=${date}`,
      {
        params: {
          classId,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error generating records:", error);
    throw error;
  }
};

export const submitTeacherRecord = async (data: SubmitTeacherRecordPayload) => {
  try {
    const response = await apiClient.post("/records/submit", data);
    return response.data;
  } catch (error) {
    console.error("Error submitting teacher record:", error);
    throw error;
  }
};

/**
 * Update student status
 * PUT /records/:id/status
 * Body: {
  "hasPaid": true,
  "isAbsent": false
}
 */
export const updateStudentStatus = async (data: StudentRecord) => {
  try {
    const response = await apiClient.put(`/records/${data?.id}/status`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating student status:", error);
    throw error;
  }
};

/**
 * Get preset amount.
 */
export const getPresetAmount = async () => {
  try {
    const response = await apiClient.get("/preset-amount");
    return response.data;
  } catch (error) {
    console.error("Error fetching preset amount:", error);
    throw error;
  }
};

/**
 *  Create settings amount */
export const createRecordsAmount = async (data: RecordsAmount) => {
  try {
    const response = await apiClient.post("/settings/amount", data);
    return response.data;
  } catch (error) {
    console.log("Error creating preset amount");
    throw error;
  }
};
/**
 *  Update settings amount */
export const updateRecordsAmount = async (data: RecordsAmount) => {
  try {
    const response = await apiClient.patch("/settings/amount", data);
    return response.data;
  } catch (error) {
    console.log("Error updating preset amount");
    throw error;
  }
};

// Analytics
// Fetch admin analytics
export const fetchAdminAnalytics = async () => {
  try {
    const response = await apiClient.get("/analytics/admin-dashboard");
    return response.data;
  } catch (error) {
    console.error("Error fetching admin analytics:", error);
    throw error;
  }
};
// Fetch teacher analytics
export const fetchTeacherAnalytics = async (classId: number) => {
  try {
    const response = await apiClient.get(`/analytics/teachers/${classId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teacher analytics:", error);
    throw error;
  }
};
