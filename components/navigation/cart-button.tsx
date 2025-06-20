"use client";

import { useCartStore } from "@/stores/cartStore";
import Link from "next/link";
import { Button } from "../ui/button";
import { IconShoppingCart } from "@tabler/icons-react";

const CartButton = () => {
  const totalQuantity = useCartStore((state) => state.totalQuantity);

  return (
    <Link href="/cart">
      <Button variant="secondary" className="relative">
        <IconShoppingCart />
        {totalQuantity > 0 && (
          <div className="absolute -right-2 -top-2 size-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
            {totalQuantity}
          </div>
        )}
      </Button>
    </Link>
  );
};

export default CartButton;
