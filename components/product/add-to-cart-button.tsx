"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useUserStore } from "@/stores/userStore";
import Link from "next/link";
import { Button } from "../ui/button";

const AddToCartButton = () => {
  const { user } = useUserStore();

  if (!user) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add</Button>
        </DialogTrigger>
        <DialogContent className="max-w-md!">
          <DialogHeader>
            <DialogTitle className="text-center font-medium!">
              Please Sign in before adding to cart
            </DialogTitle>
          </DialogHeader>
          <div className="w-full flex items-center justify-center">
            <Link href="/sign-in">
              <Button className="mx-auto">Sign in</Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return <Button variant="outline">Add</Button>;
};

export default AddToCartButton;
