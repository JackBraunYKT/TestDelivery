import { ICourier } from "../../models/ICourier";
import { IOrder } from "../../models/IOrder";
import { calculateHaversineDistance } from "../calculateHaversineDistance";

export function getDistanceInfo(order: IOrder, courier: ICourier) {
  const distance = calculateHaversineDistance(
    order.point_A,
    courier.currentLocation
  );

  console.log(`Order#${order.id} and Courier is ${distance.toFixed(2)} km`);
}
