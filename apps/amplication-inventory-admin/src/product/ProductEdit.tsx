import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { InventoryTitle } from "../inventory/InventoryTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";
import { WarehouseTitle } from "../warehouse/WarehouseTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput source="inventories" reference="Inventory">
          <SelectArrayInput
            optionText={InventoryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput source="orderItems" reference="OrderItem">
          <SelectArrayInput
            optionText={OrderItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
        <TextInput label="productName" source="productName" />
        <NumberInput
          step={1}
          label="quantityInStock"
          source="quantityInStock"
        />
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="warehouses" reference="Warehouse">
          <SelectArrayInput
            optionText={WarehouseTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
