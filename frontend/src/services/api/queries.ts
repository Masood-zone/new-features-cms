import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { apiClient } from "../root";
// import {
//   fetchClasses,
//   createClass,
//   fetchStudents,
//   createStudent,
//   fetchTeachers,
//   fetchTeacher,
//   updateTeacher,
//   createTeacher,
//   updateClass,
//   fetchStudent,
//   updateStudent,
//   updateUser,
//   fetchRecordsAmount,
//   fetchStudentsInClass,
//   getPresetAmount,
//   fetchRecordsByClassAndDate,
//   updateRecordsAmount,
//   updateStudentStatus,
//   fetchClass,
//   fetchTeacherAnalytics,
//   fetchAdminAnalytics,
//   getTeacherSubmittedRecords,
//   submitTeacherRecord,
//   getStudentRecordsByClassAndDate,
//   fetchExpenses,
//   fetchExpense,
//   createExpense,
//   updateExpense,
//   fetchReferences,
//   createReference,
//   updateReference,
//   fetchReference,
//   fetchRecords,
//   createRecordsAmount,
//   getTeacherRecords,
//   generateRecordForADate,
//   fetchAdmins,
//   fetchAdmin,
//   createAdmin,
//   updateAdmin,
//   payStudentOwing,
//   fetchTeacherOwingStudents,
//   fetchTeacherClassStudents,
//   fetchStudentOwingDetails,
//   fetchAllOwingStudents,
//   fetchDashboardSummary,
// } from "@/services/api";
// import { apiClient } from "../root";
// import { useNavigate } from "react-router-dom";
// // import { useAuthStore } from "@/store/authStore";

// /**
//  * Query: Fetch all records.
//  */
// export const useFetchRecords = () => {
//   return useQuery({
//     queryKey: ["records"],
//     queryFn: fetchRecords,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch records.");
//     },
//   });
// };
// export const useFetchDashboardSummary = () => {
//   return useQuery({
//     queryKey: ["dashboardSummary"],
//     queryFn: fetchDashboardSummary,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch records.");
//     },
//   });
// };
// /**
//  * Query: Fetch records amount.
//  */
// export const useFetchRecordsAmount = () => {
//   return useQuery({
//     queryKey: ["recordsAmount"],
//     queryFn: fetchRecordsAmount,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch records amount.");
//     },
//   });
// };
// /**
//  * Query: Fetch all admins.
//  */
// export const useFetchAdmins = () => {
//   return useQuery({
//     queryKey: ["administrators"],
//     queryFn: fetchAdmins,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch teachers.");
//     },
//   });
// };
// /**
//  * Query: Fetch Admin
//  */
// export const useFetchAdmin = (id: number) => {
//   return useQuery({
//     queryKey: ["admin", id],
//     queryFn: () => fetchAdmin(id),
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch teacher.");
//     },
//   });
// };
// /**
//  * Query: Fetch all teachers.
//  */
// export const useFetchTeachers = () => {
//   return useQuery({
//     queryKey: ["teachers"],
//     queryFn: fetchTeachers,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch teachers.");
//     },
//   });
// };
// /**
//  * Query: Fetch teacher
//  */
// export const useFetchTeacher = (id: number) => {
//   return useQuery({
//     queryKey: ["teachers", id],
//     queryFn: () => fetchTeacher(id),
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch teacher.");
//     },
//   });
// };
// /**
//  * Query: Fetch all classes.
//  */
// export const useFetchClasses = () => {
//   return useQuery({
//     queryKey: ["classes"],
//     queryFn: fetchClasses,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch classes.");
//     },
//   });
// };

// /**
//  * Query: Fetch all students.
//  */
// export const useFetchStudents = () => {
//   return useQuery({
//     queryKey: ["students"],
//     queryFn: fetchStudents,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch students.");
//     },
//   });
// };
// /**
//  * Query: Fetch all students of a class.
//  */
// export const useFetchStudentsByClass = (id: number) => {
//   return useQuery({
//     queryKey: ["students", id],
//     queryFn: () => fetchStudentsInClass(id),
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch students in this class.");
//     },
//   });
// };

// /**
//  * Query: Fetch class by id.
//  */
// export const useFetchClassById = (id: number) => {
//   return useQuery({
//     queryKey: ["classes", id],
//     queryFn: () => fetchClass(id),
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch class.");
//     },
//   });
// };

// /**
//  * Query: Fetch a student.
//  */
// export const useFetchStudent = (id: number) => {
//   return useQuery({
//     queryKey: ["students", id],
//     queryFn: () => fetchStudent(id),
//     onError: (error) => {
//       console.log(error);
//       toast.error("Failed to fetch student.");
//     },
//   });
// };

// /**
//  * Query: Fetch all expenses.
//  */
// export const useFetchExpenses = () => {
//   return useQuery({
//     queryKey: ["expenses"],
//     queryFn: fetchExpenses,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch expenses.");
//     },
//   });
// };

// /**
//  * Query: Fetch all references.
//  */
// export const useFetchReferences = () => {
//   return useQuery({
//     queryKey: ["references"],
//     queryFn: fetchReferences,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch references.");
//     },
//   });
// };
// /**
//  * Query: Fetch reference by id.
//  */
// export const useFetchReference = (id: number) => {
//   return useQuery({
//     queryKey: ["references", id],
//     queryFn: () => fetchReference(id),
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch reference.");
//     },
//   });
// };

// /**
//  * Fetch expense by id.
//  */
// export const useFetchExpense = (id: number) => {
//   return useQuery({
//     queryKey: ["expenses", id],
//     queryFn: () => fetchExpense(id),
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch expense.");
//     },
//   });
// };
// /**
//  * Mutation: Create a new reference
//  */
// export const useCreateReference = () => {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();
//   return useMutation({
//     mutationFn: (data: Reference) => createReference(data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["references"],
//       });
//       toast.success("Reference created successfully!");
//       navigate("/admin/expenses");
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to create reference. Please try again.");
//     },
//   });
// };

// /**
//  * Mutation: Update a reference
//  */
// export const useUpdateReference = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (data: Reference) => updateReference(data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["references"],
//       });
//       toast.success("References updated successfully!");
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to update expense. Please try again.");
//     },
//   });
// };

// /**
//  * Mutation: Create a new expense.
//  */
// export const useCreateExpense = () => {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();
//   return useMutation({
//     mutationFn: (data: Expense) => createExpense(data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["expenses"],
//       });
//       toast.success("Expense created successfully!");
//       navigate("/admin/expenses");
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to create expense. Please try again.");
//     },
//   });
// };

// /**
//  * Mutation: Update an expense.
//  */
// export const useUpdateExpense = () => {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();
//   return useMutation({
//     mutationFn: (data: Expense) => updateExpense(data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["expenses"],
//       });
//       toast.success("Expense updated successfully!");
//       navigate("/admin/expenses");
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to update expense. Please try again.");
//     },
//   });
// };

// /**
//  * Mutation: Update a user by calling upon updateUser function
//  */
// export const useUpdateUser = () => {
//   return useMutation({
//     mutationFn: (data: FormUser) => updateUser(data),
//     onSuccess: () => {
//       toast.success("User updated successfully!");
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to update user. Please try again.");
//     },
//     onSettled: (data) => {
//       // Update the user in localStorage after updating
//       const existingUser = JSON.parse(localStorage.getItem("user") || "{}");
//       const updatedUser = {
//         ...existingUser,
//         user: {
//           ...existingUser.user,
//           email: data?.data.email,
//           gender: data?.data.gender,
//           name: data?.data.name,
//           phone: data?.data.phone,
//         },
//       };

//       localStorage.setItem("user", JSON.stringify(updatedUser));
//     },
//   });
// };

// /**
//  * Mutation: Create a Admin.
//  */
// export const useCreateAdmin = () => {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();
//   return useMutation({
//     mutationFn: (data: Admin) => createAdmin(data),
//     onSuccess: () => {
//       toast.success("Admin created successfully!");
//       // Invalidate the query to refresh the table
//       queryClient.invalidateQueries({
//         queryKey: ["administrators"],
//       });
//       //Navigate to the teachers page after creating a teacher
//       navigate("/admin/administrators");
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to create admin. Please try again.");
//     },
//   });
// };
// /**
//  * Mutation: Update a teacher.
//  */
// export const useUpdateAdmin = () => {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();
//   return useMutation({
//     mutationFn: (data: Admin) => updateAdmin(data),
//     onSuccess: () => {
//       toast.success("Admin updated successfully!");
//       // Invalidate the query to refresh the table
//       queryClient.invalidateQueries({
//         queryKey: ["administrators"],
//       });
//       //Navigate to the admin page after updating a teacher
//       navigate("/admin/administrators");
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to update admin. Please try again.");
//     },
//   });
// };

// /**
//  * @Mutation Hook to bulk update student statuses
//  */
// export const useBulkUpdateStudentStatus = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async (records: CanteenRecord[]) => {
//       try {
//         const response = await apiClient.post("/records/bulk-update-status", {
//           records,
//         });
//         return response.data;
//       } catch (error) {
//         console.error("Error updating student statuses:", error);
//         throw error;
//       }
//     },useFetchOwingStudentsByClass
//     onSuccess: () => {
//       // Invalidate relevant queries
//       queryClient.invalidateQueries({ queryKey: ["studentRecords"] });
//       queryClient.invalidateQueries({ queryKey: ["teacherRecords"] });
//       queryClient.invalidateQueries({ queryKey: ["owingStudents"] });
//     },
//   });
// };

// /**
//  * Mutation: Create a teacher.
//  */
// export const useCreateTeacher = () => {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();
//   return useMutation({
//     mutationFn: (data: Teacher) => createTeacher(data),
//     onSuccess: () => {
//       toast.success("Teacher created successfully!");
//       // Invalidate the query to refresh the table
//       queryClient.invalidateQueries({
//         queryKey: ["teachers"],
//       });
//       //Navigate to the teachers page after creating a teacher
//       navigate("/admin/teachers");
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to create teacher. Please try again.");
//     },
//   });
// };
// /**
//  * Mutation: Update a teacher.
//  */
// export const useUpdateTeacher = () => {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();
//   return useMutation({
//     mutationFn: (data: Teacher) => updateTeacher(data),
//     onSuccess: () => {
//       toast.success("Teacher updated successfully!");
//       // Invalidate the query to refresh the table
//       queryClient.invalidateQueries({
//         queryKey: ["teachers"],
//       });
//       //Navigate to the teachers page after updating a teacher
//       navigate("/admin/teachers");
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to update teacher. Please try again.");
//     },
//   });
// };

// export const useResetTeacherPassword = () => {
//   return useMutation({
//     mutationFn: async ({ id, password }: { id: number; password: string }) => {
//       const response = await apiClient.post(`/teachers/${id}/reset-password`, {
//         password,
//       });
//       return response.data;
//     },
//   });
// };

// /*
//  * Query: Fetch all owing students
//  */
// export const useFetchAllOwingStudents = () => {
//   return useQuery({
//     queryKey: ["owingStudents"],
//     queryFn: () => fetchAllOwingStudents(),
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch owing students.");
//     },
//   });
// };
// /*
//  * Query: Fetch a teacher record detail
//  */
// export const useFetchTeacherRecordsDetail = (date: Date) => {
//   return useQuery({
//     queryKey: ["teacherRecordsDetail", date],
//     queryFn: async () => {
//       const response = await apiClient.get(`/records/teachers`, {
//         params: {
//           date: date.toISOString(),
//         },
//       });
//       return response.data;
//     },
//     onError: (error) => {
//       console.error(error);
//       // Handle error (e.g., show a toast notification)
//     },
//   });
// };

// /**
//  * Mutation: Generate student records.
//  */
// export const useGenerateStudentRecords = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (data: { classId: number; date: string }) =>
//       generateRecordForADate(data.classId, data.date),
//     onSuccess: () => {
//       toast.success(`Records generated successfully!`);
//       queryClient.invalidateQueries({
//         queryKey: ["studentRecords"],
//       });
//       queryClient.invalidateQueries({
//         queryKey: ["teacherRecords"],
//       });
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to generate records.");
//     },
//   });
// };

// /**
//  * Mutation: Create a new class.
//  */
// export const useCreateClass = () => {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();
//   return useMutation({
//     mutationFn: (data: {
//       name: string;
//       description: string;
//       supervisorId: number;
//     }) => createClass(data),
//     onSuccess: () => {
//       toast.success("Class created successfully!");
//       // Invalidate the query to refresh the table
//       queryClient.invalidateQueries({
//         queryKey: ["classes"],
//       });
//       //Navigate to the classes page after creating a class
//       navigate("/admin/classes");
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to create class. Please try again.");
//     },
//   });
// };
// /**
//  * Mutation: Update a class.
//  */
// export const useUpdateClass = () => {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();
//   return useMutation({
//     mutationFn: (data: Class) => updateClass(data),
//     onSuccess: () => {
//       toast.success("Class updated successfully!");
//       // Invalidate the query to refresh the table
//       queryClient.invalidateQueries({
//         queryKey: ["classes"],
//       });
//       //Navigate to the classes page after updating a class
//       navigate("/admin/classes");
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to update class. Please try again.");
//     },
//   });
// };

// /**
//  * Mutation: Create a new student.
//  */
// export const useCreateStudent = () => {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();
//   return useMutation({
//     mutationFn: (data: Student) => createStudent(data),
//     onSuccess: () => {
//       toast.success("Student created successfully!");
//       //Navigate to the students page after creating a student
//       navigate(-1); //Temporal fix
//       // Invalidate the query to refresh the table
//       queryClient.invalidateQueries({
//         queryKey: ["students"],
//       });
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to create student. Please try again.");
//     },
//   });
// };
// /**
//  * Mutation: Update a student.
//  */
// export const useUpdateStudent = () => {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();
//   return useMutation({
//     mutationFn: (data: Student) => updateStudent(data),
//     onSuccess: () => {
//       toast.success("Student updated successfully!");
//       // Invalidate the query to refresh the table
//       queryClient.invalidateQueries({
//         queryKey: ["students"],
//       });
//       //Navigate to the students page after updating a student
//       navigate(-1); //Temporal fix
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to update student. Please try again.");
//     },
//   });
// };

// /**
//  * Query: Fetch all records of a class by date.
//  */
// export const useFetchRecordsByClassAndDate = (
//   classId: number,
//   date: string
// ) => {
//   return useQuery({
//     queryKey: ["records", classId, date],
//     queryFn: () => fetchRecordsByClassAndDate(classId, date),
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch records.");
//     },
//   });
// };

// /**
//  * Mutation: Create settings amount.
//  */
// export const useCreateRecordsAmount = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (data: RecordsAmount) => createRecordsAmount(data),
//     onSuccess: () => {
//       toast.success("Preset amount created successfully!");
//       queryClient.invalidateQueries({
//         queryKey: ["records"],
//       });
//       queryClient.invalidateQueries({
//         queryKey: ["recordsAmount"],
//       });
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to create preset amount.");
//     },
//   });
// };
// /**
//  * Mutation: Update settings amount.
//  */
// export const useUpdateRecordsAmount = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (data: RecordsAmount) => updateRecordsAmount(data),
//     onSuccess: () => {
//       toast.success("Preset amount updated successfully!");
//       queryClient.invalidateQueries({
//         queryKey: ["records"],
//       });
//       queryClient.invalidateQueries({
//         queryKey: ["recordsAmount"],
//       });
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to update preset amount.");
//     },
//   });
// };

// /**
//  * Query: Get all records of students by class and date.
//  */
// export const useStudentRecordsByClassAndDate = (
//   classId: number,
//   date: string
// ) => {
//   return useQuery({
//     queryKey: ["studentRecords", classId, date],
//     queryFn: () => getStudentRecordsByClassAndDate(classId, date),
//     enabled: !!classId && !!date,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch student records.");
//     },
//   });
// };

// /**
//  * Query: Fetch students in teacher's class
//  */
// export const useFetchTeacherClassStudents = (teacherId: number) => {
//   return useQuery({
//     queryKey: ["teacherClassStudents", teacherId],
//     queryFn: () => fetchTeacherClassStudents(teacherId),
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch students in class.");
//     },
//   });
// };

// /**
//  * Query: Fetch student owing details
//  */
// export const useFetchStudentOwingDetails = (studentId: number) => {
//   return useQuery({
//     queryKey: ["studentOwingDetails", studentId],
//     queryFn: () => fetchStudentOwingDetails(studentId),
//     enabled: !!studentId,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch student owing details.");
//     },
//   });
// };

// /**
//  * Query: Fetch owing students in teacher's class
//  */
// export const useFetchTeacherOwingStudents = (teacherId: number) => {
//   return useQuery({
//     queryKey: ["teacherOwingStudents", teacherId],
//     queryFn: () => fetchTeacherOwingStudents(teacherId),
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch owing students.");
//     },
//   });
// };

// /**
//  * Mutation: Pay student owing
//  */
// export const usePayStudentOwing = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: ({
//       studentId,
//       amount,
//     }: {
//       studentId: number;
//       amount: number;
//     }) => payStudentOwing(studentId, amount),
//     onSuccess: (data) => {
//       queryClient.invalidateQueries({
//         queryKey: ["teacherOwingStudents"],
//       });
//       queryClient.invalidateQueries({
//         queryKey: ["owingStudents"],
//       });
//       queryClient.invalidateQueries({
//         queryKey: ["studentOwingDetails", data.student?.id],
//       });
//       toast.success("Payment processed successfully!");
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to process payment. Please try again.");
//     },
//   });
// };

// // New mutation for submitting teacher records
// export const useSubmitTeacherRecord = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: submitTeacherRecord,
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["studentRecords"],
//       });
//       queryClient.invalidateQueries({
//         queryKey: ["teacherRecords"],
//       });
//       toast.success("Records submitted successfully.");
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to submit records.");
//     },
//   });
// };

// /**
//  * Query: Get all records of absent students by class and date.
//  */
// export const useTeacherSubmittedRecords = (teacherId: number, date: string) => {
//   return useQuery({
//     queryKey: ["submittedRecords", teacherId, date],
//     queryFn: () => getTeacherSubmittedRecords(teacherId, date),
//     enabled: !!teacherId && !!date,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch submitted records.");
//     },
//   });
// };
// export const useTeacherRecords = (date: string) => {
//   return useQuery({
//     queryKey: ["teacherRecords", date],
//     queryFn: () => getTeacherRecords(date),
//     enabled: !!date,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch submitted records.");
//     },
//   });
// };

// /**
//  * Query: Fetch owing students by class
//  */
// export const useFetchOwingStudentsByClass = (classId?: number) => {
//   return useQuery({
//     queryKey: ["owingStudentsByClass", classId],
//     queryFn: () =>
//       classId
//         ? apiClient
//             .get(`/students/class/${classId}/owing`)
//             .then((res) => res.data)
//         : apiClient.get("/admins/owing-students").then((res) => res.data),
//     enabled: classId !== undefined,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch owing students for this class.");
//     },
//   });
// };

// /**
//  * Mutation: Update a student status.
//  *
//  */
// export const useUpdateStudentStatus = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: (data: StudentRecord) => updateStudentStatus(data),
//     onSuccess: () => {
//       toast.success("Record submitted successfully!");
//       queryClient.invalidateQueries({
//         queryKey: ["studentRecords"],
//       });
//       queryClient.invalidateQueries({
//         queryKey: ["teacherRecords"],
//       });
//     },
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to submit record.");
//     },
//   });
// };

// /**
//  * Query: Get preset amount.
//  */
// export const useGetPresetAmount = () => {
//   return useQuery({
//     queryKey: ["presetAmount"],
//     queryFn: getPresetAmount,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch preset amount.");
//     },
//   });
// };

// /**
//  * Query: Admin's Analytics
//  */
// export const useAdminDashboardAnalytics = () => {
//   // const { token } = useAuthStore();
//   return useQuery({
//     queryKey: ["adminAnalytics"],
//     queryFn: fetchAdminAnalytics,
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch admin analytics.");
//     },
//     // enabled: token,
//   });
// };
// /**
//  * Query: Teacher's Analytics
//  */
// export const useTeacherAnalytics = (id: number) => {
//   return useQuery({
//     queryKey: ["teacherAnalytics", id],
//     queryFn: () => fetchTeacherAnalytics(id),
//     onError: (error) => {
//       console.error(error);
//       toast.error("Failed to fetch teacher analytics.");
//     },
//   });
// };

/**
 * Delete a resource and handle errors.
 * @param resource - API endpoint for the resource (e.g., "teachers").
 */
export const useDeleteResource = (resource: string, queryKey: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string | number) => apiClient.delete(`/${resource}/${id}`),
    onMutate: (id) => {
      toast(`Deleting ${resource} with ID ${id}...`);
    },
    onSuccess: () => {
      // Invalidate the query to refresh the table
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
      toast.success(`${resource} deleted successfully!`);
    },
    onError: (error, id) => {
      console.error(error);
      toast.error(`Failed to delete ${resource} with ID ${id}.`);
    },
  });
};
