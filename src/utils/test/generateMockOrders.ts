import { IOrder } from "../../models/IOrder";
import { getRandomCoordinate } from "./getRandomCoordinate";
import { getRandomPrice } from "./getRandomPrice";

export function generateMockOrders(length: number): IOrder[] {
  const mockOrders: IOrder[] = [];

  for (let i = 1; i <= length; i++) {
    const order: IOrder = {
      id: i,
      point_A: getRandomCoordinate(),
      point_B: getRandomCoordinate(),
      price: getRandomPrice(100, 1000),
      courierId: null,
    };

    mockOrders.push(order);
  }

  return mockOrders;
}
