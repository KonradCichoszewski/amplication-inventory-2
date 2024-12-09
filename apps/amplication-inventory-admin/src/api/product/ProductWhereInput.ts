import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { WarehouseListRelationFilter } from "../warehouse/WarehouseListRelationFilter";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  name?: StringNullableFilter;
  orderItems?: OrderItemListRelationFilter;
  price?: FloatNullableFilter;
  productName?: StringNullableFilter;
  quantityInStock?: IntNullableFilter;
  supplier?: SupplierWhereUniqueInput;
  warehouses?: WarehouseListRelationFilter;
};
