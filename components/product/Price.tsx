import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

interface PriceProps {
  price: number;
  className?: string;
}

const Price = ({ price, className }: PriceProps) => {
  return (
    <Badge className={cn("font-bold text-lg", className)} variant="success">
      &#8377;{price}
    </Badge>
  );
};

export default Price;
//<p className="font-bold text-lg">&#8377;{price}</p>
