import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="w-full max-w-sm p-0 overflow-hidden">
      <CardHeader className="p-0 items-center">
        <Link href={""}>
          <Image
            src={product?.image || "/placeholder-product-image.svg"}
            alt={`${product.name}`}
            width={300}
            height={300}
            className="w-full h-full"
            priority
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        {/* <div className="text-xs">{product.brand}</div> */}
        <Link href={""}>
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <p>{product.price}</p>
        {/* <div className="flex-between gap-4">
          <Rating value={Number(product.rating)} />
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive">Out Of Stock</p>
          )}
        </div> */}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
