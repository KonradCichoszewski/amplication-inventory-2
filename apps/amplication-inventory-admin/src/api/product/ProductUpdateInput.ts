import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InventoryUpdateManyWithoutProductsInput } from "./InventoryUpdateManyWithoutProductsInput";
import { OrderItemUpdateManyWithoutProductsInput } from "./OrderItemUpdateManyWithoutProductsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { WarehouseUpdateManyWithoutProductsInput } from "./WarehouseUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  inventories?: InventoryUpdateManyWithoutProductsInput;
  name?: string | null;
  orderItems?: OrderItemUpdateManyWithoutProductsInput;
  price?: number | null;
  productName?: string | null;
  quantityInStock?: number | null;
  supplier?: SupplierWhereUniqueInput | null;
  warehouses?: WarehouseUpdateManyWithoutProductsInput;
};
