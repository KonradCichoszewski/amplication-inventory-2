import { InventoryCreateNestedManyWithoutWarehousesInput } from "./InventoryCreateNestedManyWithoutWarehousesInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type WarehouseCreateInput = {
  inventories?: InventoryCreateNestedManyWithoutWarehousesInput;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
