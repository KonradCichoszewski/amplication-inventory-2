import { ProductUpdateManyWithoutSuppliersInput } from "./ProductUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  contactEmail?: string | null;
  contactPhone?: string | null;
  products?: ProductUpdateManyWithoutSuppliersInput;
  supplierName?: string | null;
};
