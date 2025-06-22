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
import { shippingAddressSchema } from "@/validators/order.validator";

const ShippingAddressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(shippingAddressSchema),
  });

  const [isPending, startTransition] = useTransition();
  const setUser = useUserStore((state) => state.setUser);
  const router = useRouter();

  const onSubmit = ({
    name,
    address,
    city,
    postalCode,
  }: z.infer<typeof shippingAddressSchema>) => {
    startTransition(async () => {
      //   const { success, message, data } = await signUpUser({
      //     name,
      //     email,
      //     password,
      //   });
      //   if (success) {
      //     toast.success(message);
      //     setUser(data!);
      //     router.push("/");
      //   } else {
      //     toast.error(message);
      //   }
    });
  };

  return (
    <Card className="w-full max-w-sm md:max-w-md mx-auto">
      <CardHeader hidden>
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
              <Label>Address</Label>
              <Input
                {...register("address")}
                placeholder="Enter address"
                type="text"
              />
              <p className="text-red-500">
                {errors.address && errors.address.message}
              </p>
            </div>
            <div className="space-y-2">
              <Label>State</Label>
              <Input
                {...register("state")}
                placeholder="Enter state"
                type="text"
              />
              <p className="text-red-500">
                {errors.state && errors.state.message}
              </p>
            </div>
            <div className="space-y-2">
              <Label>City</Label>
              <Input
                {...register("city")}
                placeholder="Enter city"
                type="text"
              />
              <p className="text-red-500">
                {errors.city && errors.city.message}
              </p>
            </div>

            <Button type="submit" className="w-full" disabled={isPending}>
              Continue
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ShippingAddressForm;
