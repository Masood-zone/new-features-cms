import { prisma } from "../db/client";

export const analyticsService = {
  getAdminAnalytics: async () => {
    // Get today and month boundaries
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthEnd = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      0,
      23,
      59,
      59,
      999
    );

    const [
      totalTeachers,
      totalStudents,
      totalClasses,
      settingsAmount,
      dailyExpenses,
      monthlyExpenses,
    ] = await Promise.all([
      prisma.user.count({
        where: { role: { in: ["TEACHER", "Teacher"] } },
      }),
      prisma.student.count(),
      prisma.class.count(),
      prisma.settings.findFirst({
        where: { name: "amount" },
        select: { value: true },
      }),
      prisma.expense.aggregate({
        _sum: { amount: true },
        where: {
          date: {
            gte: today,
            lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
          },
        },
      }),
      prisma.expense.aggregate({
        _sum: { amount: true },
        where: {
          date: {
            gte: monthStart,
            lte: monthEnd,
          },
        },
      }),
    ]);

    const amount = settingsAmount ? Number.parseInt(settingsAmount.value) : 0;
    const totalCollections = totalStudents * amount;
    // Daily/Monthly collection is expected amount (students * price)
    const totalDailyCollection = totalStudents * amount;
    // Monthly: students * price * school days in month (Mon-Fri)
    const countSchoolDaysInMonth = () => {
      let count = 0;
      const d = new Date(monthStart);
      while (d <= monthEnd) {
        const day = d.getDay();
        if (day !== 0 && day !== 6) count++;
        d.setDate(d.getDate() + 1);
      }
      return count;
    };
    const schoolDays = countSchoolDaysInMonth();
    const totalMonthlyCollection = totalStudents * amount * schoolDays;
    const totalDailyExpenses = dailyExpenses._sum.amount || 0;
    const totalMonthlyExpenses = monthlyExpenses._sum.amount || 0;

    return {
      totalTeachers,
      totalStudents,
      totalCollections, // legacy
      totalClasses,
      totalDailyCollection,
      totalMonthlyCollection,
      totalDailyExpenses,
      totalMonthlyExpenses,
    };
  },

  getTeacherAnalytics: async (classId: number) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [settingsAmount, totalStudents, paidStudents, unpaidStudents] =
      await Promise.all([
        prisma.settings.findFirst({
          where: { name: "amount" },
          select: { value: true },
        }),
        prisma.student.count({
          where: { classId },
        }),
        prisma.record.count({
          where: {
            classId,
            submitedAt: { gte: today },
            hasPaid: true,
          },
        }),
        prisma.record.count({
          where: {
            classId,
            submitedAt: { gte: today },
            hasPaid: false,
          },
        }),
      ]);

    const amount = settingsAmount ? Number.parseInt(settingsAmount.value) : 0;
    const totalAmount = totalStudents * amount;
    const paidAmount = paidStudents * amount;
    const unpaidAmount = unpaidStudents * amount;

    return {
      totalAmount,
      totalStudents,
      paidStudents: {
        count: paidStudents,
        amount: paidAmount,
      },
      unpaidStudents: {
        count: unpaidStudents,
        amount: unpaidAmount,
      },
    };
  },
};
