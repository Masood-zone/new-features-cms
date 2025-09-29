import bcrypt from "bcryptjs";
import { adminRepository } from "../db/repositories/admin-repository";
import { ApiError } from "../utils/api-error";
import { prisma } from "../db/client";

export const adminService = {
  getAllAdmins: async () => {
    return adminRepository.findAllAdmins();
  },

  getAdminById: async (id: number) => {
    const admin = await adminRepository.findById(id);
    if (!admin) {
      throw new ApiError(404, "Admin not found");
    }
    return admin;
  },

  // Get all owing students across all classes
  getAllOwingStudents: async () => {
    const owingStudents = await prisma.student.findMany({
      where: {
        owing: {
          gt: 0, // Only students with owing > 0
        },
      },
      orderBy: {
        owing: "desc", // Order by owing amount (highest first)
      },
      include: {
        class: true,
      },
    });

    return {
      owingStudents,
      totalOwing: owingStudents.reduce(
        (sum, student) => sum + student.owing,
        0
      ),
      count: owingStudents.length,
    };
  },

  // Get owing students in a specific class
  getOwingStudentsByClass: async (classId: number) => {
    const classData = await prisma.class.findUnique({
      where: { id: classId },
    });

    if (!classData) {
      throw new ApiError(404, "Class not found");
    }

    const owingStudents = await prisma.student.findMany({
      where: {
        classId,
        owing: {
          gt: 0, // Only students with owing > 0
        },
      },
      orderBy: {
        owing: "desc", // Order by owing amount (highest first)
      },
      include: {
        class: true,
      },
    });

    return {
      class: classData,
      owingStudents,
      totalOwing: owingStudents.reduce(
        (sum, student) => sum + student.owing,
        0
      ),
      count: owingStudents.length,
    };
  },

  getAdminByEmail: async (email: string) => {
    const admin = await adminRepository.findByEmail(email);
    if (!admin) {
      throw new ApiError(404, "Admin not found");
    }
    return admin;
  },

  createAdmin: async (adminData: {
    email: string;
    name?: string;
    phone?: string;
    role: string;
    gender?: string;
    password?: string;
  }) => {
    const { email, name, phone, role, gender, password } = adminData;
    const existingAdmin = await adminRepository.findByEmail(email);
    if (existingAdmin) {
      throw new ApiError(409, "Admin already exists");
    }
    return adminRepository.create({
      email,
      name,
      phone,
      role,
      gender,
      password,
    });
  },

  resetAdminPassword: async (id: number, newPassword: string) => {
    if (!newPassword) {
      throw new ApiError(400, "New password is required");
    }

    // Check if teacher exists
    const teacher = await adminRepository.findById(id);
    if (!teacher || !["SUPER_ADMIN", "SUPER_ADMIN"].includes(teacher.role)) {
      throw new ApiError(404, "Teacher not found");
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the password
    const updatedTeacher = await adminRepository.update(id, {
      password: hashedPassword,
    });

    if (!updatedTeacher) {
      throw new ApiError(500, "Failed to reset password");
    }

    return {
      status: "Password reset successfully",
      teacherId: id,
    };
  },

  updateAdmin: async (
    id: number,
    adminData: {
      email?: string;
      name?: string;
      phone?: string;
      role?: string;
      gender?: string;
      assigned_class?: string;
    }
  ) => {
    const { email, name, phone, role, gender, assigned_class } = adminData;

    return adminRepository.update(id, {
      email,
      name,
      phone,
      role,
      gender,
    });
  },

  deleteAdmin: async (id: number) => {
    return adminRepository.delete(id);
  },
};
