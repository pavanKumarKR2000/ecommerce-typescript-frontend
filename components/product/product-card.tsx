import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Price from "./Price";
import { Badge } from "../ui/badge";
import AddToCartButton from "./add-to-cart-button";
import Rating from "./rating";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="w-full max-w-sm p-0 overflow-hidden">
      <CardHeader className="p-0 items-center min-h-[250px]  overflow-hidden">
        <Link href={`/product/${product.slug}?id=${product.id}`}>
          <Image
            src={product?.images[0] || "/placeholder-product-image.svg"}
            alt={`${product.name}`}
            width={250}
            height={250}
            className="w-full h-full hover:scale-105 transition-all duration-200"
            priority
          />
        </Link>
      </CardHeader>

      <CardContent className="p-4 flex flex-col gap-3 items-start">
        <Link href={`/product/${product.slug}?id=${product.id}`}>
          <h2 className="text-xl font-bold">{product.name}</h2>
        </Link>

        <div className="flex items-center gap-2 flex-wrap w-full">
          <Badge variant="outline" className="text-md">
            {product.brand}
          </Badge>
          <Badge variant="outline" className="text-md">
            {product.category}
          </Badge>
        </div>
        <Rating rating={product.rating} className="text-md" />
        <div className="flex items-center justify-between w-full">
          {product.stock ? (
            <Price price={product.price} />
          ) : (
            <Badge variant="destructive" className="font-bold text-lg">
              Out of stock
            </Badge>
          )}
          <AddToCartButton
            productId={product.id}
            productName={product.name}
            productImage={product.images?.[0] || ""}
            productPrice={product.price}
            stock={product.stock}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
