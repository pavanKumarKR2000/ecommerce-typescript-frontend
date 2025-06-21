"use client";

import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IconSearch } from "@tabler/icons-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const SearchProduct = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const c = searchParams.get("c");
  const [query, setQuery] = useState(q || "");
  const router = useRouter();
  const params = {
    q: query,
    c: c || "",
  };

  useEffect(() => {
    if (!q) {
      setQuery("");
    }
  }, [searchParams]);

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push(`/search?${new URLSearchParams(params).toString()}`);
  };

  return (
    <form className="flex items-center gap-2">
      <Input
        type="search"
        placeholder="Search for a product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="md:w-xl"
      />
      <Button
        variant="secondary"
        type="submit"
        onClick={onClick}
        disabled={!query}
      >
        <IconSearch />
      </Button>
    </form>
  );
};

export default SearchProduct;
