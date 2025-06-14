import { PRODUCT_CATEGORIES } from "@/lib/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { IconChevronDown } from "@tabler/icons-react";
interface CategoriesListProps {
  categories: typeof PRODUCT_CATEGORIES;
}

const ProductCategoriesDropdown = ({ categories }: CategoriesListProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <span>Categories</span>
          <IconChevronDown className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {categories.map((category) => (
          <DropdownMenuItem key={category.id}>
            <category.icon className="mr-1 size-5" />
            <span>{category.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductCategoriesDropdown;
