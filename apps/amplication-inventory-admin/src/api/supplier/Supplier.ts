import { Product } from "../product/Product";

export type Supplier = {
  contactEmail: string | null;
  contactPhone: string | null;
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  supplierName: string | null;
  updatedAt: Date;
};
