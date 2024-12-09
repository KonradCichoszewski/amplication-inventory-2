import { InventoryUpdateManyWithoutWarehousesInput } from "./InventoryUpdateManyWithoutWarehousesInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type WarehouseUpdateInput = {
  inventories?: InventoryUpdateManyWithoutWarehousesInput;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
