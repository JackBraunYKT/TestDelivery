import { IOrder } from "../models/IOrder";

export class OrderNode {
  order: IOrder;
  left: OrderNode | null;
  right: OrderNode | null;

  constructor(order: IOrder) {
    this.order = order;
    this.left = null;
    this.right = null;
  }
}
