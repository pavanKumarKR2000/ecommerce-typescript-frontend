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
  "actions",
];

const ProductTable = ({ products }: ProductTableProps) => {
  const deleteProduct = (id: number) => {};

  return (
    <Table className="w-full h-full overflow-visible">
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
            <TableCell className="flex items-center gap-2 text-right justify-end">
              <ProductDialog mode="update" id={product.id} />
              <DeleteDialog
                title="Are you sure you want to delete this product?"
                action={deleteProduct}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductTable;
