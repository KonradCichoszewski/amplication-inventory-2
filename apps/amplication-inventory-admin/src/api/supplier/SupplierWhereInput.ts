import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type SupplierWhereInput = {
  contactEmail?: StringNullableFilter;
  contactPhone?: StringNullableFilter;
  id?: StringFilter;
  products?: ProductListRelationFilter;
  supplierName?: StringNullableFilter;
};
