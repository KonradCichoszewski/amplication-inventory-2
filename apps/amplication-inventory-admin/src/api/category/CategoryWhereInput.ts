import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type CategoryWhereInput = {
  categoryName?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  products?: ProductListRelationFilter;
};
