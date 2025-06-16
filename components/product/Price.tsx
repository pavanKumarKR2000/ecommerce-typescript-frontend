import { Badge } from "../ui/badge";

interface PriceProps {
  price: number;
}

const Price = ({ price }: PriceProps) => {
  return (
    <Badge className="font-bold text-lg" variant="secondary">
      &#8377;{price}
    </Badge>
  );
};

export default Price;
//<p className="font-bold text-lg">&#8377;{price}</p>
