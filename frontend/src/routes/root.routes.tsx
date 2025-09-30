import ErrorBoundary from "@/components/error/error-boundary.tsx";
import Error from "@/components/error/error.tsx";
import BaseLayout from "@/components/layout";
import AdminLayout from "@/components/layout/admin-layout.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import TeacherLayout from "@/components/layout/teacher-layout";
import ProtectedRoute from "./protected.routes.tsx";
import AdminHome from "@/pages/admin/home/index.tsx";
import ViewTeacher from "@/pages/admin/teachers/view/view-teacher.tsx";
import ViewStudent from "@/pages/admin/students/view/view-student.tsx";
import OwingStudentDetails from "@/pages/teacher/students/owings/[id]/owing-student.tsx";

const rootRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Base Layout */}
      <Route
        path="/"
        element={
          <ErrorBoundary
            fallback={({ error, reset }) => (
              <Error error={error} reset={reset} />
            )}
          >
            <BaseLayout />
          </ErrorBoundary>
        }
      >
        {/* Login */}
        <Route
          index
          lazy={async () => {
            const { default: Login } = await import("@/pages/auth/login");
            return { Component: Login };
          }}
        />
        {/* Contact Us */}
        <Route
          path="contact-us"
          lazy={async () => {
            const { default: ContactUs } = await import(
              "@/pages/auth/help/contact-us.tsx"
            );
            return { Component: ContactUs };
          }}
        />
        {/* Terms and Conditions */}
        <Route
          path="terms-and-conditions"
          lazy={async () => {
            const { default: TermsAndConditions } = await import(
              "@/pages/auth/help/terms-and-conditions.tsx"
            );
            return { Component: TermsAndConditions };
          }}
        />
        <Route
          path="*"
          lazy={async () => {
            const { default: NotFound } = await import(
              "@/pages/not-found/not-found.tsx"
            );
            return { Component: NotFound };
          }}
        />
      </Route>

      {/* Admin Dashboard */}
      <Route
        path="admin"
        element={
          <ProtectedRoute roles={["SUPER_ADMIN", "ADMIN"]}>
            <ErrorBoundary
              fallback={({ error, reset }) => (
                <Error error={error} reset={reset} />
              )}
            >
              <AdminLayout />
            </ErrorBoundary>
          </ProtectedRoute>
        }
      >
        <Route
          path="dashboard"
          element={
            <ErrorBoundary
              fallback={({ error, reset }) => (
                <Error error={error} reset={reset} />
              )}
            >
              <AdminHome />
            </ErrorBoundary>
          }
        />
        {/* Settings */}
        <Route
          path="settings"
          lazy={async () => {
            const { default: SettingsLayout } = await import(
              "@/pages/admin/settings/index.tsx"
            );
            return { Component: SettingsLayout };
          }}
        >
          <Route
            index
            lazy={async () => {
              const { default: Settings } = await import(
                "@/pages/admin/settings/settings.tsx"
              );
              return { Component: Settings };
            }}
          />
          {/* Profile */}
          <Route
            path="profile"
            lazy={async () => {
              const { default: Profile } = await import(
                "@/pages/admin/settings/profile/profile.tsx"
              );
              return { Component: Profile };
            }}
          />
          {/* Canteen */}
          <Route
            path="canteen"
            lazy={async () => {
              const { default: Canteen } = await import(
                "@/pages/admin/settings/canteen/canteen.tsx"
              );
              return { Component: Canteen };
            }}
          />
        </Route>
        {/* Admins */}
        <Route
          path="administrators"
          lazy={async () => {
            const { default: AdministratorLayout } = await import(
              "@/pages/admin/administrators/index.tsx"
            );
            return { Component: AdministratorLayout };
          }}
        >
          <Route
            index
            lazy={async () => {
              const { default: Administrators } = await import(
                "@/pages/admin/administrators/administrators.tsx"
              );
              return { Component: Administrators };
            }}
          />
          <Route
            path="add"
            lazy={async () => {
              const { default: AddAdmin } = await import(
                "@/pages/admin/administrators/add/create-admin.tsx"
              );
              return { Component: AddAdmin };
            }}
          />
          <Route
            path=":id"
            lazy={async () => {
              const { default: ViewAdmin } = await import(
                "@/pages/admin/administrators/view/view-admin.tsx"
              );
              return { Component: ViewAdmin };
            }}
          />
          <Route
            path=":id/edit"
            lazy={async () => {
              const { default: EditAdmin } = await import(
                "@/pages/admin/administrators/edit/edit-admin.tsx"
              );
              return { Component: EditAdmin };
            }}
          />
        </Route>
        {/* Teachers */}
        <Route
          path="teachers"
          lazy={async () => {
            const { default: TeachersLayout } = await import(
              "@/pages/admin/teachers/index.tsx"
            );
            return { Component: TeachersLayout };
          }}
        >
          <Route
            index
            lazy={async () => {
              const { default: Teachers } = await import(
                "@/pages/admin/teachers/teachers.tsx"
              );
              return { Component: Teachers };
            }}
          />
          <Route
            path="add"
            lazy={async () => {
              const { default: AddTeacher } = await import(
                "@/pages/admin/teachers/add/create-teacher.tsx"
              );
              return { Component: AddTeacher };
            }}
          />
          <Route path=":id" element={<ViewTeacher />} />
          <Route
            path=":id/edit"
            lazy={async () => {
              const { default: EditTeacher } = await import(
                "@/pages/admin/teachers/edit/edit-teacher.tsx"
              );
              return { Component: EditTeacher };
            }}
          />
        </Route>
        {/* Students */}
        <Route
          path="students"
          lazy={async () => {
            const { default: StudentsLayout } = await import(
              "@/pages/admin/students"
            );
            return { Component: StudentsLayout };
          }}
        >
          <Route
            index
            lazy={async () => {
              const { default: Students } = await import(
                "@/pages/admin/students/students.tsx"
              );
              return { Component: Students };
            }}
          />
          <Route
            path="add"
            lazy={async () => {
              const { default: AddStudent } = await import(
                "@/pages/admin/students/add/create-student.tsx"
              );
              return { Component: AddStudent };
            }}
          />
          <Route path=":id" element={<ViewStudent />} />
          <Route
            path=":id/edit"
            lazy={async () => {
              const { default: EditStudent } = await import(
                "@/pages/admin/students/edit/edit-student.tsx"
              );
              return { Component: EditStudent };
            }}
          />
        </Route>
        {/* Classes */}
        <Route
          path="classes"
          lazy={async () => {
            const { default: ClassesLayout } = await import(
              "@/pages/admin/classes"
            );
            return { Component: ClassesLayout };
          }}
        >
          <Route
            index
            lazy={async () => {
              const { default: Classes } = await import(
                "@/pages/admin/classes/classes.tsx"
              );
              return { Component: Classes };
            }}
          />
          <Route
            path="add"
            lazy={async () => {
              const { default: AddClass } = await import(
                "@/pages/admin/classes/add/create-class.tsx"
              );
              return { Component: AddClass };
            }}
          />
          <Route
            path=":id"
            lazy={async () => {
              const { default: ViewClass } = await import(
                "@/pages/admin/classes/view/view-class.tsx"
              );
              return { Component: ViewClass };
            }}
          />
          <Route
            path=":id/edit"
            lazy={async () => {
              const { default: EditClass } = await import(
                "@/pages/admin/classes/edit/edit-class.tsx"
              );
              return { Component: EditClass };
            }}
          />
        </Route>
        {/* Canteen Records */}
        <Route
          path="canteen-records"
          lazy={async () => {
            const { default: AdminCanteenLayout } = await import(
              "@/pages/admin/canteen"
            );
            return { Component: AdminCanteenLayout };
          }}
        >
          {/* Setup canteen */}
          <Route
            path="setup-canteen"
            lazy={async () => {
              const { default: SetupCanteenLayout } = await import(
                "@/pages/admin/canteen/setup/index.tsx"
              );
              return { Component: SetupCanteenLayout };
            }}
          >
            <Route
              index
              lazy={async () => {
                const { default: SetupCanteenTabs } = await import(
                  "@/pages/admin/canteen/setup/setup.tsx"
                );
                return { Component: SetupCanteenTabs };
              }}
            />
          </Route>
          {/* View list of canteen records */}
          <Route
            index
            lazy={async () => {
              const { default: CanteenRecords } = await import(
                "@/pages/admin/canteen/canteen.tsx"
              );
              return { Component: CanteenRecords };
            }}
          />
          <Route
            path=":teacherId/records"
            lazy={async () => {
              const { default: TeacherRecordsDetail } = await import(
                "@/pages/admin/canteen/details/records-detail.tsx"
              );
              return { Component: TeacherRecordsDetail };
            }}
          />
        </Route>
        {/* Owings */}
        <Route
          path="owings"
          lazy={async () => {
            const { default: OwingsLayout } = await import(
              "@/pages/admin/canteen"
            );
            return { Component: OwingsLayout };
          }}
        >
          <Route
            index
            lazy={async () => {
              const { default: Owings } = await import(
                "@/pages/admin/canteen/owings/owings.tsx"
              );
              return { Component: Owings };
            }}
          />
          <Route
            path=":id"
            lazy={async () => {
              const { default: StudentOwingDetails } = await import(
                "@/pages/admin/canteen/owings/[id]/student-owing-details.tsx"
              );
              return { Component: StudentOwingDetails };
            }}
          />
        </Route>
        {/* Prepayments */}
        <Route
          path="prepayments"
          lazy={async () => {
            const { default: PrepaymentsLayout } = await import(
              "@/pages/admin/canteen/prepayments/index.tsx"
            );
            return { Component: PrepaymentsLayout };
          }}
        >
          <Route
            index
            lazy={async () => {
              const { default: Prepayments } = await import(
                "@/pages/admin/canteen/prepayments/prepayments.tsx"
              );
              return { Component: Prepayments };
            }}
          />
        </Route>

        {/* Expenses */}
        <Route
          path="accounts"
          lazy={async () => {
            const { default: ExpensesLayout } = await import(
              "@/pages/admin/expenses"
            );
            return { Component: ExpensesLayout };
          }}
        >
          <Route
            index
            lazy={async () => {
              const { default: Expenses } = await import(
                "@/pages/admin/expenses/expenses.tsx"
              );
              return { Component: Expenses };
            }}
          />
          <Route
            path="add"
            lazy={async () => {
              const { default: AddExpense } = await import(
                "@/pages/admin/expenses/add/create-expense.tsx"
              );
              return { Component: AddExpense };
            }}
          />
          <Route
            path=":id"
            lazy={async () => {
              const { default: ViewExpense } = await import(
                "@/pages/admin/expenses/view/view-expense.tsx"
              );
              return { Component: ViewExpense };
            }}
          />
          <Route
            path=":id/edit"
            lazy={async () => {
              const { default: EditExpense } = await import(
                "@/pages/admin/expenses/edit/edit-expense.tsx"
              );
              return { Component: EditExpense };
            }}
          />
          <Route
            path="overall-totals"
            lazy={async () => {
              const { default: OverallTotals } = await import(
                "@/pages/admin/expenses/overall/overall.tsx"
              );
              return { Component: OverallTotals };
            }}
          />
        </Route>
        {/* Reports */}
        <Route
          path="reports"
          lazy={async () => {
            const { default: ReportsLayout } = await import(
              "@/pages/admin/reports"
            );
            return { Component: ReportsLayout };
          }}
        >
          <Route
            index
            lazy={async () => {
              const { default: Reports } = await import(
                "@/pages/admin/reports/index.tsx"
              );
              return { Component: Reports };
            }}
          />
        </Route>
        {/* Not found */}
        <Route
          path="*"
          lazy={async () => {
            const { default: NotFound } = await import(
              "../pages/not-found/not-found.tsx"
            );
            return { Component: NotFound };
          }}
        />
      </Route>

      {/* Teacher Dashboard */}
      <Route
        path="teacher"
        element={
          <ProtectedRoute roles={["TEACHER"]}>
            <ErrorBoundary
              fallback={({ error, reset }) => (
                <Error error={error} reset={reset} />
              )}
            >
              <TeacherLayout />
            </ErrorBoundary>
          </ProtectedRoute>
        }
      >
        <Route
          index
          lazy={async () => {
            const { default: TeacherHome } = await import(
              "@/pages/teacher/home"
            );
            return { Component: TeacherHome };
          }}
        />
        <Route
          path="canteen"
          lazy={async () => {
            const { default: CanteenLayout } = await import(
              "@/pages/teacher/canteen"
            );
            return { Component: CanteenLayout };
          }}
        >
          <Route
            path="submitted-records"
            lazy={async () => {
              const { default: SubmittedRecords } = await import(
                "@/pages/teacher/canteen/list/submitted-records-list.tsx"
              );
              return { Component: SubmittedRecords };
            }}
          />
          {/* View records */}
          <Route
            path=":id/view"
            lazy={async () => {
              const { default: ViewCanteenRecord } = await import(
                "@/pages/teacher/canteen/view/view-canteen.records.tsx"
              );
              return { Component: ViewCanteenRecord };
            }}
          />
          {/* Edit records */}
          <Route
            path=":id/edit"
            lazy={async () => {
              const { default: EditCanteenRecord } = await import(
                "@/pages/teacher/canteen/edit/edit-canteen.tsx"
              );
              return { Component: EditCanteenRecord };
            }}
          />
          <Route
            index
            lazy={async () => {
              const { default: Canteen } = await import(
                "@/pages/teacher/canteen/canteen.tsx"
              );
              return { Component: Canteen };
            }}
          />
          <Route
            path="submit"
            lazy={async () => {
              const { default: SubmitCanteenRecords } = await import(
                "@/pages/teacher/canteen/submit/record-canteen.tsx"
              );
              return { Component: SubmitCanteenRecords };
            }}
          />
          <Route
            path=":id/edit"
            lazy={async () => {
              const { default: EditCanteenRecord } = await import(
                "@/pages/teacher/canteen/edit/edit-canteen.tsx"
              );
              return { Component: EditCanteenRecord };
            }}
          />
        </Route>
        {/* Prepayments */}
        <Route
          path="prepayments"
          lazy={async () => {
            const { default: PrepaymentsLayout } = await import(
              "@/pages/teacher/prepayments/index.tsx"
            );
            return { Component: PrepaymentsLayout };
          }}
        >
          <Route
            index
            lazy={async () => {
              const { default: Prepayments } = await import(
                "@/pages/teacher/prepayments/prepayments.tsx"
              );
              return { Component: Prepayments };
            }}
          />
        </Route>
        {/* Settings */}
        <Route
          path="settings"
          lazy={async () => {
            const { default: SettingsLayout } = await import(
              "@/pages/teacher/settings/index.tsx"
            );
            return { Component: SettingsLayout };
          }}
        >
          <Route
            index
            lazy={async () => {
              const { default: Settings } = await import(
                "@/pages/teacher/settings/settings.tsx"
              );
              return { Component: Settings };
            }}
          />
          {/* Profile */}
          <Route
            path="profile"
            lazy={async () => {
              const { default: Profile } = await import(
                "@/pages/teacher/settings/profile/profile.tsx"
              );
              return { Component: Profile };
            }}
          />
          {/* Canteen */}
          <Route
            path="canteen"
            lazy={async () => {
              const { default: Canteen } = await import(
                "@/pages/teacher/settings/canteen/canteen.tsx"
              );
              return { Component: Canteen };
            }}
          />
        </Route>
        <Route
          path="students"
          lazy={async () => {
            const { default: ManageStudents } = await import(
              "@/pages/teacher/students"
            );
            return { Component: ManageStudents };
          }}
        >
          <Route
            index
            lazy={async () => {
              const { default: Students } = await import(
                "@/pages/teacher/students/students.tsx"
              );
              return { Component: Students };
            }}
          />
          <Route
            path="add"
            lazy={async () => {
              const { default: AddStudent } = await import(
                "@/pages/teacher/students/add/create-student.tsx"
              );
              return { Component: AddStudent };
            }}
          />
          <Route
            path="owing-students"
            lazy={async () => {
              const { default: OwingStudents } = await import(
                "@/pages/teacher/students/owings/owing-students.tsx"
              );
              return { Component: OwingStudents };
            }}
          />
          <Route path="owing-students/:id" element={<OwingStudentDetails />} />
          <Route path=":id" element={<ViewStudent />} />
          <Route
            path=":id/edit"
            lazy={async () => {
              const { default: EditStudent } = await import(
                "@/pages/teacher/students/edit/edit-student.tsx"
              );
              return { Component: EditStudent };
            }}
          />
        </Route>

        <Route
          path="*"
          lazy={async () => {
            const { default: NotFound } = await import(
              "@/pages/not-found/not-found.tsx"
            );
            return { Component: NotFound };
          }}
        />
      </Route>
    </>
  )
);

export default rootRoutes;
