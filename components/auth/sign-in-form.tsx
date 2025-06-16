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
import { useTransition } from "react";
import { signInUser } from "@/lib/actions/auth.actions";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInUserSchema),
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = ({ email, password }: z.infer<typeof signInUserSchema>) => {
    startTransition(() => {
      signInUser({ email, password });
    });
  };

  return (
    <Card className="w-full max-w-sm md:max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Sign in</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-10 p-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                {...register("email")}
                placeholder="Enter email"
                type="text"
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
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Signing in..." : " Sign in"}
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <p>
          Do not have an account?{" "}
          <Link href="/sign-up" className="text-blue-500">
            sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignInForm;
