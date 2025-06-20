"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteDialog from "./delete-dialog";
import ProductDialog from "./product-dialog";
import { cn } from "@/lib/utils";
import { deleteProduct as delete_product } from "@/lib/actions/product.actions";
import { toast } from "sonner";
import { useState, useTransition } from "react";

interface ProductTableProps {
  products: any;
}

const TABLE_HEADINGS = [
  "id",
  "name",
  "brand",
  "category",
  "price",
  "stock",
  "rating",
  "is featured",
  "actions",
];

const ProductTable = ({ products }: ProductTableProps) => {
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const deleteProduct = (id: number) => {
    startTransition(async () => {
      try {
        const { success, message } = await delete_product(id);

        if (success) {
          toast.success(message);
          setOpen(false);
        } else {
          toast.error(message);
        }
      } catch (err) {
        toast.error("Something went wrong while deleting the product");
      }
    });
  };

  return (
    <Table className="w-full h-full">
      <TableHeader>
        <TableRow className="uppercase">
          {TABLE_HEADINGS.map((item) => (
            <TableHead
              key={item}
              className={cn("font-bold", item === "actions" && "text-right")}
            >
              {item}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product: any) => (
          <TableRow key={product.id}>
            <TableCell>{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.brand}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.rating}</TableCell>
            <TableCell>{product.isFeatured ? "true" : "false"}</TableCell>
            <TableCell className="flex items-center gap-2 text-right justify-end">
              <ProductDialog mode="update" id={product.id} />
              <DeleteDialog
                title="Are you sure you want to delete this product?"
                action={deleteProduct}
                isLoading={pending}
                open={open}
                setOpen={setOpen}
                id={product.id}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;
