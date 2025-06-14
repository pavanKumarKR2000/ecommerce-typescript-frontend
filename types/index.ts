export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  category: string;
  image: string | undefined | null;
  rating: number;
  featured: boolean;
  createdAt: string | Date;
};
