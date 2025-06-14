"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IconSearch } from "@tabler/icons-react";

const SearchProduct = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center gap-2">
      <Input
        type="search"
        placeholder="Search for a product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="md:w-xl"
      />
      <Button variant="secondary">
        <IconSearch />
      </Button>
    </div>
  );
};

export default SearchProduct;
