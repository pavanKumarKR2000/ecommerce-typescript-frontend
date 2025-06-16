import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Price from "./Price";
import { Badge } from "../ui/badge";
import AddToCartButton from "./add-to-cart-button";

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
      <CardContent className="p-4 flex flex-col gap-3 items-start">
        {/* <div className="text-xs">{product.brand}</div> */}
        <Link href={""}>
          <h2 className="text-lg font-medium">{product.name}</h2>
        </Link>
        {product.inStock ? (
          <Price price={product.price} />
        ) : (
          <Badge variant="destructive" className="font-bold text-lg">
            Out of stock
          </Badge>
        )}
        <AddToCartButton />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
