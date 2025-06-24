import { Badge } from "@/components/ui/badge";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    c?: string;
    price?: string;
    rating?: string;
    sort?: string;
    page?: string;
  }>;
}

const SearchPage = async (props: SearchPageProps) => {
  const { q, c } = await props.searchParams;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        {q && (
          <p className="flex items-center gap-1">
            Search
            <Badge variant="success" className="text-md">
              {q}
            </Badge>
          </p>
        )}
        {c && (
          <p className="flex items-center gap-1">
            Category
            <Badge variant="success" className="text-md">
              {c}
            </Badge>
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
