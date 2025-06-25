"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import { Button } from "../ui/button";

interface ShippingAddressSelectCardProps {
  addresses: any[];
  setShowShippingAddressForm: React.Dispatch<SetStateAction<boolean>>;
}

const ShippingAddressSelectCard = ({
  addresses,
  setShowShippingAddressForm,
}: ShippingAddressSelectCardProps) => {
  const [addressId, setAddressId] = useState(addresses[0].id);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-center gap-6 mt-12">
        {addresses.map((item) => (
          <Card
            className={cn(
              "w-sm max-w-md p-0 overflow-hidden hover:cursor-pointer",
              addressId === item.id && "ring-2 ring-blue-500 ring-offset-2",
            )}
            key={item.id}
            onClick={() => setAddressId(item.id)}
          >
            <CardHeader hidden></CardHeader>
            <CardContent className="p-4 ">
              <div className="flex flex-col items-start gap-1">
                <div
                  className={cn(
                    "self-end bg-blue-500 p-1 rounded-full",
                    addressId === item.id ? "visible" : "invisible",
                  )}
                >
                  <IconCheck className="text-white size-4" />
                </div>

                <p>{item.name}</p>
                <p>{item.state}</p>
                <p>{item.city}</p>
                <p>{item.address}</p>
                <p>{item.postalCode}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Link href={`/order?shippingAddressId=${addressId}`}>
        <Button>Continue</Button>
      </Link>
      {addresses?.length && (
        <>
          <p>or</p>
          <Button onClick={() => setShowShippingAddressForm(true)}>
            Add address
          </Button>
        </>
      )}
    </div>
  );
};

export default ShippingAddressSelectCard;
