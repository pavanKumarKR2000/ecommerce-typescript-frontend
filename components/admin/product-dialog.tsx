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
import ProductForm from "./product-form";
import { MODE_INFO } from "@/lib/constants";

interface ProductDialogProps {
  mode: "add" | "update";
  id?: number;
}

const ProductDialog = ({ mode, id }: ProductDialogProps) => {
  const [open, setOpen] = useState(false);
  const title = MODE_INFO[mode].title;

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{title}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md md:max-w-3xl">
        <DialogHeader className="mt-4 space-y-6">
          <DialogTitle>{title}</DialogTitle>
          <ProductForm closeDialog={closeDialog} mode={mode} id={id} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
