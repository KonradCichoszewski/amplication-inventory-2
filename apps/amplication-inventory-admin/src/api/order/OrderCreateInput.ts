import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  orderItems?: OrderItemCreateNestedManyWithoutOrdersInput;
  user?: UserWhereUniqueInput | null;
};
