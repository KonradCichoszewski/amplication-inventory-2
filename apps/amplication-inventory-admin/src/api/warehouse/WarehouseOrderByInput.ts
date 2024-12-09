import { SortOrder } from "../../util/SortOrder";

export type WarehouseOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
