import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLogin } from "@/hooks/use-auth";
// import { toast } from "sonner";
import { useAuthStore } from "@/store/authStore";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormProps>();
  const { user, isAuthenticated } = useAuthStore();
  const { mutate: login, isSuccess, isLoading } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isSuccess && user) {
      const { role } = user.user;
      if (role === "SUPER_ADMIN" || role === "ADMIN") {
        navigate("/admin/administrators");
      } else if (role === "TEACHER" || role === "Teacher") {
        navigate("/teacher");
      } else {
        navigate("/"); // Default fallback
      }
    }
  }, [isSuccess, user, navigate, isAuthenticated]);

  const onSubmit: SubmitHandler<LoginFormProps> = async (data) => {
    try {
      login(data);
    } catch (error) {
      console.error(error);
    } finally {
      reset();
    }
  };

  return (
    <section className="w-full">
      {/* Main */}
      <main className="flex flex-col items-center justify-center h-[80dvh]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Login to your canteen management system account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <CardContent className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  autoComplete="off"
                  className={errors.email ? "border-red-500" : "bg-transparent"}
                  placeholder="Username/Email/Phone Number"
                  {...register("email", {
                    required: true,
                    maxLength: 80,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && (
                  <div className="text-red-500 text-sm">
                    {errors.email.type === "required" && "Email is required"}
                    {errors.email.type === "maxLength" && "Email is too long"}
                    {errors.email.type === "pattern" && "Email is invalid"}
                  </div>
                )}
              </div>
              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                </div>
                <div className="relative">
                  <Input
                    type={!showPassword ? "password" : "text"}
                    id="password"
                    autoComplete="off"
                    className={
                      errors.password ? "border-red-500" : "bg-transparent"
                    }
                    placeholder="Password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                    })}
                  />
                  {errors.password && (
                    <div className="text-red-500 text-sm">
                      {errors.password.type === "required" &&
                        "Password is required"}
                      {errors.password.type === "minLength" &&
                        "Password is too short"}
                      {errors.password.type === "maxLength" &&
                        "Password is too long"}
                    </div>
                  )}
                  <span className="absolute top-[2px] right-0  p-2">
                    {showPassword ? (
                      <Eye
                        size={22}
                        onClick={() => setShowPassword(!showPassword)}
                        className="hover:cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        fontSize={22}
                        onClick={() => setShowPassword(!showPassword)}
                        className="hover:cursor-pointer"
                      />
                    )}
                  </span>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                Log in
              </Button>
            </CardContent>
          </form>
        </Card>
      </main>
    </section>
  );
}
