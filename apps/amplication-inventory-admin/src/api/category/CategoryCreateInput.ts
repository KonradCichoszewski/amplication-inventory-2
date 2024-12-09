import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  categoryName?: string | null;
  description?: string | null;
  products?: ProductCreateNestedManyWithoutCategoriesInput;
};
