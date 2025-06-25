"use client";

import { useEffect, useState, useRef } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IconSearch } from "@tabler/icons-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

const search_products = [
  "tshirt",
  "playstation",
  "bottle",
  "macbook",
  "monitor",
];

const SearchProduct = () => {
  const searchParams = useSearchParams();
  const animationRef = useRef(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [show, setShow] = useState(true);

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
      setShow(true);
    }
  }, [searchParams]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "linear" },
      repeat: -1,
      repeatDelay: 0.8,
    });

    tl.to(animationRef.current, { y: "-10%", duration: 2 })
      .to(animationRef.current, { y: "-20%", duration: 2, delay: 0.8 }) // start 0.5s before previous ends
      .to(animationRef.current, { y: "-30%", duration: 2, delay: 0.8 })
      .to(animationRef.current, { y: "-40%", duration: 2, delay: 0.8 })
      .to(animationRef.current, { y: "-50%", duration: 2, delay: 0.8 });

    tl.eventCallback("onRepeat", () => {
      gsap.set(animationRef.current, { y: "0%" });
    });
  }, []);

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push(`/search?${new URLSearchParams(params).toString()}`);
  };

  return (
    <form className="flex items-center gap-2 relative">
      <Input
        ref={inputRef}
        type="search"
        placeholder="Search for"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="md:w-xl"
        onFocus={() => setShow(false)}
        onBlur={() => {
          if (!query) {
            setShow(true);
          }
        }}
      />
      <Button
        variant="secondary"
        type="submit"
        onClick={onClick}
        disabled={!query}
      >
        <IconSearch />
      </Button>
      <div
        className={cn(
          "absolute h-6  overflow-hidden ml-[85px] cursor-text  w-full",
          !show && "hidden",
        )}
        onClick={() => {
          setShow(false);
          inputRef.current?.focus();
        }}
      >
        <div ref={animationRef}>
          {search_products.map((item) => (
            <p
              key={item}
              className="h-6 flex items-center justify-start text-muted-foreground"
            >
              {`"${item}"`}
            </p>
          ))}
          {search_products.map((item) => (
            <p
              key={item}
              className="h-6 flex items-center justify-start text-muted-foreground"
            >
              {`"${item}"`}
            </p>
          ))}
        </div>
      </div>
    </form>
  );
};

export default SearchProduct;
