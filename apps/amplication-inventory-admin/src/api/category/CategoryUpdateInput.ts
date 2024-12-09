import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  categoryName?: string | null;
  description?: string | null;
  products?: ProductUpdateManyWithoutCategoriesInput;
};
