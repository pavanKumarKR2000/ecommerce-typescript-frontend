import Image from "next/image";
import { Badge } from "../ui/badge";
import Rating from "./rating";
import Price from "./Price";
import AddToCartButton from "./add-to-cart-button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ProductDetailsProps {
  product: any;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="w-full flex  justify-center items-start gap-12">
      <Image
        src={product?.images[0] || "/placeholder-product-image.svg"}
        alt="product image"
        height={400}
        width={400}
        className=""
        priority
      />
      <div className="flex flex-col items-start gap-4 mt-10">
        <h2 className="font-bold text-3xl">{product.name}</h2>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-lg">
            {product.category}
          </Badge>
          <Badge variant="outline" className="text-lg">
            {product.brand}
          </Badge>
        </div>
        <p>{product.description}</p>
        <Rating rating={product.rating} className="text-sm" />
        <Price price={product.price} className="text-3xl" />
      </div>
      <Card className="w-full max-w-[250px] p-0 overflow-hidden mt-10">
        <CardContent className="p-4 flex flex-col gap-3 ">
          <div className="flex items-center justify-between w-full">
            <p className="text-lg">Price</p>
            <p className="text-lg"> &#8377;{product.price}</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <p className="text-lg">Status</p>

            {product.stock ? (
              <Badge variant="success" className="text-lg">
                In stock
              </Badge>
            ) : (
              <Badge variant="destructive" className="text-lg">
                Out of stock
              </Badge>
            )}
          </div>
          <AddToCartButton id={product.id} stock={product.stock} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetails;
