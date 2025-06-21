import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FEATURES } from "@/lib/constants";

const FeaturesCard = () => {
  return (
    <Card>
      <CardHeader hidden></CardHeader>
      <CardContent className="p-3 flex flex-col md:flex-row gap-5 md:gap-0">
        {FEATURES.map((item) => (
          <div
            key={item.id}
            className="flex-1 flex flex-col items-center gap-3"
          >
            <item.icon className="size-10" />
            <h3 className="text-lg font-bold">{item.feature}</h3>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default FeaturesCard;
