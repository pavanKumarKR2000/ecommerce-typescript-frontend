import { cn } from "@/lib/utils";
import {
  IconStarHalfFilled,
  IconStar,
  IconStarFilled,
} from "@tabler/icons-react";

interface RatingProps {
  rating: number;
  className?: string;
}

const Rating = ({ rating, className }: RatingProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {rating >= 1 ? (
          <IconStarFilled className="size-5" />
        ) : rating >= 0.5 ? (
          <IconStarHalfFilled className="size-5" />
        ) : (
          <IconStar className="size-5" />
        )}
        {rating >= 2 ? (
          <IconStarFilled className="size-5" />
        ) : rating >= 1.5 ? (
          <IconStarHalfFilled className="size-5" />
        ) : (
          <IconStar className="size-5" />
        )}
        {rating >= 3 ? (
          <IconStarFilled className="size-5" />
        ) : rating >= 2.5 ? (
          <IconStarHalfFilled className="size-5" />
        ) : (
          <IconStar className="size-5" />
        )}
        {rating >= 4 ? (
          <IconStarFilled className="size-5" />
        ) : rating >= 3.5 ? (
          <IconStarHalfFilled className="size-5" />
        ) : (
          <IconStar className="size-5" />
        )}
        {rating >= 5 ? (
          <IconStarFilled className="size-5" />
        ) : rating >= 4.5 ? (
          <IconStarHalfFilled className="size-5" />
        ) : (
          <IconStar className="size-5" />
        )}
      </div>
      {rating === 0 && (
        <p className={cn("text-xs", className)}>No ratings yet</p>
      )}
    </div>
  );
};

export default Rating;
