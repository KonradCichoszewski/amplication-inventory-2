import { ProductCreateNestedManyWithoutSuppliersInput } from "./ProductCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  contactEmail?: string | null;
  contactPhone?: string | null;
  products?: ProductCreateNestedManyWithoutSuppliersInput;
  supplierName?: string | null;
};
