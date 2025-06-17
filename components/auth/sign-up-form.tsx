"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signUpUser } from "@/lib/actions/auth.actions";
import { signUpUserSchema } from "@/validators/auth.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useUserStore } from "@/stores/userStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpUserSchema),
  });

  const [isPending, startTransition] = useTransition();
  const setUser = useUserStore((state) => state.setUser);
  const router = useRouter();

  const onSubmit = ({
    name,
    email,
    password,
  }: z.infer<typeof signUpUserSchema>) => {
    startTransition(async () => {
      const { success, message, data } = await signUpUser({
        name,
        email,
        password,
      });

      if (success) {
        toast.success(message);
        // setUser(data!);
        router.push("/");
      } else {
        toast.error(message);
      }
    });
  };

  return (
    <Card className="w-full max-w-sm md:max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Sign up</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 p-4">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                {...register("name")}
                placeholder="Enter name"
                type="text"
              />
              <p className="text-red-500">
                {errors.name && errors.name.message}
              </p>
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                {...register("email")}
                placeholder="Enter email"
                type="email"
              />
              <p className="text-red-500">
                {errors.email && errors.email.message}
              </p>
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                {...register("password")}
                placeholder="Enter password"
                type="password"
              />
              <p className="text-red-500">
                {errors.password && errors.password.message}
              </p>
            </div>
            <div className="space-y-2">
              <Label>Confirm Password</Label>
              <Input
                {...register("confirmPassword")}
                placeholder="Enter confirm password"
                type="password"
              />
              <p className="text-red-500">
                {errors.confirmPassword && errors.confirmPassword.message}
              </p>
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Signing up user..." : " Sign up"}
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <p>
          Already have an account?{" "}
          <Link href="/sign-in" className="text-blue-500">
            sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignUpForm;
