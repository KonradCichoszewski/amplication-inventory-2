import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  productName?: SortOrder;
  quantityInStock?: SortOrder;
  supplierId?: SortOrder;
  updatedAt?: SortOrder;
};
