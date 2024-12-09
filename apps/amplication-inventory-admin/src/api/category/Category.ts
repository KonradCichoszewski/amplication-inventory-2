import { Product } from "../product/Product";

export type Category = {
  categoryName: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  products?: Array<Product>;
  updatedAt: Date;
};
