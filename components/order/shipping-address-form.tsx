"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { addShippingAddress } from "@/lib/actions/shipping-address.actions";
import { STATES } from "@/lib/constants";
import { shippingAddressSchema } from "@/validators/order.validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SetStateAction, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface ShippingAddressFormProps {
  addresses: any[] | [];
  setShowShippingAddressForm: React.Dispatch<SetStateAction<boolean>>;
}

const ShippingAddressForm = ({
  addresses,
  setShowShippingAddressForm,
}: ShippingAddressFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(shippingAddressSchema),
  });

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = ({
    name,
    address,
    state,
    city,
    postalCode,
  }: z.infer<typeof shippingAddressSchema>) => {
    startTransition(async () => {
      const { success, message, data } = await addShippingAddress({
        name,
        address,
        state,
        city,
        postalCode,
      });
      if (success) {
        toast.success(message);
        router.push(`/order?shippingAddressId=${data.id}`);
      } else {
        toast.error(message);
      }
    });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Card className="w-full max-w-sm md:max-w-md mx-auto mt-12">
        <CardHeader hidden>
          <CardTitle className="text-center text-2xl">Sign up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 p-4">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  {...register("name")}
                  placeholder="Enter name"
                  type="text"
                  id="name"
                />
                <p className="text-red-500">
                  {errors.name && errors.name.message}
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  {...register("address")}
                  placeholder="Enter address"
                  id="address"
                  className="resize-none"
                />
                <p className="text-red-500">
                  {errors.address && errors.address.message}
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Controller
                  name="state"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full" id="state">
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent>
                        {STATES.map((item) => (
                          <SelectItem value={item.name} key={item.id}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                <p className="text-red-500">
                  {errors.state && errors.state.message}
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  {...register("city")}
                  placeholder="Enter city"
                  type="text"
                  id="city"
                />
                <p className="text-red-500">
                  {errors.city && errors.city.message}
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="postal-code">Postal code</Label>
                <Input
                  {...register("postalCode")}
                  placeholder="Enter postal code"
                  id="postal"
                />
                <p className="text-red-500">
                  {errors.postalCode && errors.postalCode.message}
                </p>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isPending}
                isLoading={isPending}
              >
                Continue
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {addresses.length > 0 && (
        <>
          <p>or</p>
          <Button
            onClick={() => setShowShippingAddressForm(false)}
            disabled={isPending}
          >
            Select address
          </Button>
        </>
      )}
    </div>
  );
};

export default ShippingAddressForm;
