"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { useCartStore } from "@/stores/cartStore";

const CheckoutCard = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);

  return (
    <Card className="w-sm max-w-md p-0 overflow-hidden">
      <CardHeader hidden></CardHeader>
      <CardContent className="p-4 flex flex-col gap-3 items-center">
        <p className="text-lg font-bold">
          Subtotal
          <Badge variant="success" className="text-lg">
            &#8377;{totalPrice}
          </Badge>
        </p>
        <Link href="/shipping-address">
          <Button>Checkout</Button>
        </Link>
      </CardContent>
    </Card>
  );
};
export default CheckoutCard;
