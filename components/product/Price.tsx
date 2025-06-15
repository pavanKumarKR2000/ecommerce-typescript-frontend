interface PriceProps {
  price: number;
}

const Price = ({ price }: PriceProps) => {
  return <p className="font-bold text-lg">&#8377;{price}</p>;
};

export default Price;
