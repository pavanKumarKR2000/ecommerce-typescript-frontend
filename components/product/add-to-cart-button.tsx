"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Alert, AlertTitle } from "@/components/ui/alert";

import { useUserStore } from "@/stores/userStore";
import { IconAlertCircle, IconMinus, IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

const AddToCartButton = () => {
  const { user } = useUserStore();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  if (!user) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add</Button>
        </DialogTrigger>
        <DialogContent className="max-w-md! ">
          <DialogHeader className="mt-4">
            <DialogTitle>
              <Alert variant="destructive">
                <AlertTitle className="flex items-center justify-center gap-2 font-medium!">
                  <IconAlertCircle /> Please Sign in before adding to cart
                </AlertTitle>
              </Alert>
            </DialogTitle>
          </DialogHeader>
          <div className="w-full flex items-center justify-center gap-2">
            <Link href="/sign-in">
              <Button className="mx-auto">Sign in</Button>
            </Link>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (count === 0) {
    return (
      <Button variant="outline" onClick={increment}>
        Add
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-md  border  shadow-xs   dark:border-input ">
      <Button variant="ghost" onClick={decrement}>
        <IconMinus className="size-4" />
      </Button>
      {count}
      <Button variant="ghost" onClick={increment}>
        <IconPlus className="size-4" />
      </Button>
    </div>
  );
};

export default AddToCartButton;
