import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { InventoryCreateNestedManyWithoutProductsInput } from "./InventoryCreateNestedManyWithoutProductsInput";
import { OrderItemCreateNestedManyWithoutProductsInput } from "./OrderItemCreateNestedManyWithoutProductsInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { WarehouseCreateNestedManyWithoutProductsInput } from "./WarehouseCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  inventories?: InventoryCreateNestedManyWithoutProductsInput;
  name?: string | null;
  orderItems?: OrderItemCreateNestedManyWithoutProductsInput;
  price?: number | null;
  productName?: string | null;
  quantityInStock?: number | null;
  supplier?: SupplierWhereUniqueInput | null;
  warehouses?: WarehouseCreateNestedManyWithoutProductsInput;
};
