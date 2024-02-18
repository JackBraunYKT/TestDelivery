import { ICourier } from "../../models/ICourier";
import { IOrder } from "../../models/IOrder";

export function getInfo(target: IOrder | ICourier) {
  let x: string;
  let y: string;
  let targetName: string;

  if ("point_A" in target) {
    x = target.point_A[0].toFixed(3);
    y = target.point_A[1].toFixed(3);
    targetName = "Order";
  } else {
    x = target.currentLocation[0].toFixed(3);
    y = target.currentLocation[1].toFixed(3);
    targetName = "Courier";
  }

  return `${targetName} ${target.id} - X: ${x} | Y: ${y}`;
}
