"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signInUserSchema } from "@/validators/auth.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInUserSchema),
  });

  const onSubmit = (data: z.infer<typeof signInUserSchema>) => {
    console.log("data", data);
  };

  return (
    <Card className="w-full max-w-sm md:max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Sign In</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-10 p-4 ">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input {...register("email")} placeholder="Enter email" />
              <p className="text-red-500">
                {errors.email && errors.email.message}
              </p>
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input {...register("password")} placeholder="Enter password" />
              <p className="text-red-500">
                {errors.password && errors.password.message}
              </p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="w-full"
        >
          Sign Up
        </Button>
        <p>
          Do not have an account?
          <Link href="/sign-up" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignInForm;
