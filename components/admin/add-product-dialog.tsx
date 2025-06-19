"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import AddProductForm from "./add-product-form";

const AddProductDialog = () => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add product</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md md:max-w-3xl">
        <DialogHeader className="mt-4 space-y-6">
          <DialogTitle>Add product</DialogTitle>
          <AddProductForm closeDialog={closeDialog} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductDialog;
