import { PRODUCT_CATEGORIES } from "@/lib/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface CategoriesListProps {
  categories: typeof PRODUCT_CATEGORIES;
}

const ProductCategoriesDropdown = ({ categories }: CategoriesListProps) => {
  return (
    <ul className="flex items-center gap-2">
      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
};

export default ProductCategoriesDropdown;
