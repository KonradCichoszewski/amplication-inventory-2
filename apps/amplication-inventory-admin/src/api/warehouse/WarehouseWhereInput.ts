import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type WarehouseWhereInput = {
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
};
