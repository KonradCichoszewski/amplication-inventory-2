import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";

export const SupplierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contactEmail" source="contactEmail" type="email" />
        <TextInput label="contactPhone" source="contactPhone" />
        <ReferenceArrayInput source="products" reference="Product">
          <SelectArrayInput
            optionText={ProductTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="supplierName" source="supplierName" />
      </SimpleForm>
    </Edit>
  );
};
