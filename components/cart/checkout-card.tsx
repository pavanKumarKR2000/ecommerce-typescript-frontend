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
        <div className="text-lg font-bold flex items-center gap-2">
          <p>Subtotal</p>
          <Badge variant="success" className="text-lg">
            &#8377;{totalPrice}
          </Badge>
        </div>
        <Link href="/shipping-address">
          <Button>Checkout</Button>
        </Link>
      </CardContent>
    </Card>
  );
};
export default CheckoutCard;
