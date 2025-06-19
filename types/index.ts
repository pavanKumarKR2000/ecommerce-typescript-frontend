export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: boolean;
  category: string;
  images: string[] | [];
  rating: number;
  isFeatured: boolean;
  createdAt: string | Date;
  slug: string;
  brand: string;
};
