import { Inventory } from "../inventory/Inventory";
import { Product } from "../product/Product";

export type Warehouse = {
  createdAt: Date;
  id: string;
  inventories?: Array<Inventory>;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
