"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Alert, AlertTitle } from "@/components/ui/alert";

import { useCartStore } from "@/stores/cartStore";
import { useUserStore } from "@/stores/userStore";
import { IconAlertCircle, IconMinus, IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

interface AddToCartButtonProps {
  id: number;
  stock: number;
}

const AddToCartButton = ({ id, stock }: AddToCartButtonProps) => {
  const { user } = useUserStore();
  const { setCartItem, getCartItem, removeCartItem } = useCartStore();

  const [count, setCount] = useState(() => {
    const cartItem = getCartItem(id);

    return cartItem ? cartItem.quantity : 0;
  });

  const increment = () => {
    setCartItem(id, count + 1);
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 0) {
      if (count === 1) {
        removeCartItem(id);
      } else {
        setCartItem(id, count - 1);
      }

      setCount((prev) => prev - 1);
    }
  };

  if (!stock) {
    return null;
  }

  if (!user) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add</Button>
        </DialogTrigger>
        <DialogContent className="max-w-md! ">
          <DialogHeader className="mt-4">
            <DialogTitle>
              <Alert variant="destructive" className="border-none!">
                <AlertTitle className="flex items-center justify-center gap-2 font-medium! text-lg">
                  <IconAlertCircle />
                  <span>Please Sign in before adding to cart</span>
                </AlertTitle>
              </Alert>
            </DialogTitle>
          </DialogHeader>
          <DialogFooter className="w-full flex items-center justify-center gap-2">
            <div className="w-full flex items-center justify-center gap-2">
              <Link href="/sign-in">
                <Button className="mx-auto">Sign in</Button>
              </Link>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  if (count === 0) {
    return (
      <Button variant="outline" onClick={increment} className="w-fit">
        Add
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-md border shadow-xs dark:border-input w-fit">
      <Button variant="ghost" onClick={decrement}>
        <IconMinus className="size-4" />
      </Button>
      <span className="w-3 text-center">{count}</span>
      <Button variant="ghost" onClick={increment}>
        <IconPlus className="size-4" />
      </Button>
    </div>
  );
};

export default AddToCartButton;
