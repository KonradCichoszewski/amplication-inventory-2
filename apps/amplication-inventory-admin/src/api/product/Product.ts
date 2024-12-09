import { Category } from "../category/Category";
import { Inventory } from "../inventory/Inventory";
import { OrderItem } from "../orderItem/OrderItem";
import { Supplier } from "../supplier/Supplier";
import { Warehouse } from "../warehouse/Warehouse";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  inventories?: Array<Inventory>;
  name: string | null;
  orderItems?: Array<OrderItem>;
  price: number | null;
  productName: string | null;
  quantityInStock: number | null;
  supplier?: Supplier | null;
  updatedAt: Date;
  warehouses?: Array<Warehouse>;
};
