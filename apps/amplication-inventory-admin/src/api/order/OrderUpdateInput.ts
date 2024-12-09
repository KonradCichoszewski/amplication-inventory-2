import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
  user?: UserWhereUniqueInput | null;
};
