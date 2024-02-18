import { IOrder } from "../../models/IOrder";
import { getRandomPoint } from "./getRandomPoint";
import { getRandomPrice } from "./getRandomPrice";

export function generateMockOrders(): IOrder[] {
  const mockOrders: IOrder[] = [];

  for (let i = 1; i <= 10; i++) {
    const order: IOrder = {
      id: i,
      point_A: getRandomPoint(),
      point_B: getRandomPoint(),
      price: getRandomPrice(100, 1000),
      courierId: null,
    };

    mockOrders.push(order);
  }

  return mockOrders;
}
