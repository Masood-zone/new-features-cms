import GoBackButton from "@/components/shared/go-back/go-back";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams } from "react-router-dom";
import EditTeacherForm from "./edit-teacher-form";
import { useEffect } from "react";
import { toast } from "sonner";
import { useFetchTeacher } from "@/services/api/teachers/teachers.queries";
import { useFetchClasses } from "@/services/api/classes/classes.queries";

export default function EditTeacher() {
  const { id } = useParams();
  const { data: teacher, error } = useFetchTeacher(Number(id)) as {
    data: {
      teacher: Teacher;
    };
    error: { message: string };
  };
  const { data: classList, error: classListError } = useFetchClasses();
  const teacherData = teacher?.teacher;

  // Show error toast if there is an error fetching classes
  useEffect(() => {
    if (classListError) {
      toast("Failed to fetch classes, please refresh the page and try again.");
    }
  }, [classListError]);

  return (
    <section className="w-full">
      <Card className="w-full bg-transparent border-none shadow-none">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Edit Teacher</h1>
            <GoBackButton />
          </CardTitle>
          <CardDescription>
            Fill in the details below to edit a teacher.
          </CardDescription>
        </CardHeader>
        {error ? (
          <p>{error.message}</p>
        ) : (
          <EditTeacherForm teacherData={teacherData} classList={classList} />
        )}
      </Card>
    </section>
  );
}
