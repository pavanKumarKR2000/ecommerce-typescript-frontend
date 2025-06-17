"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { useUserStore } from "@/stores/userStore";
import Link from "next/link";
import { Button } from "../ui/button";
import { IconAlertCircle } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const AddToCartButton = () => {
  const { user } = useUserStore();
  const router = useRouter();

  if (!user) {
    return (
      <Dialog>
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
          <div className="w-full flex items-center justify-center">
            <Link href="/sign-in">
              <Button className="mx-auto">Sign in</Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Button variant="outline" onClick={() => router.push("/cart")}>
      Add
    </Button>
  );
};

export default AddToCartButton;
