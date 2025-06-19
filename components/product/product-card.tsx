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
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product?.images[0] || "/placeholder-product-image.svg"}
            alt={`${product.name}`}
            width={300}
            height={300}
            className="w-full h-full"
            priority
          />
        </Link>
      </CardHeader>

      <CardContent className="p-4 flex flex-col gap-3 items-start">
        {/* <Badge variant="outline" className="text-sm">
          {product.brand}
        </Badge> */}
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg font-medium">{product.name}</h2>
        </Link>
        <div className="flex items-center gap-2 flex-wrap w-full">
          <Badge variant="outline">{product.brand}</Badge>
          <Badge variant="outline">{product.category}</Badge>
        </div>

        <div className="flex items-center justify-between w-full">
          {product.stock ? (
            <Price price={product.price} />
          ) : (
            <Badge variant="destructive" className="font-bold text-lg">
              Out of stock
            </Badge>
          )}
          <AddToCartButton />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
