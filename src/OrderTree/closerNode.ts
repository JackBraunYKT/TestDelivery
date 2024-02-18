import { TCoordinate } from "../models/TCoordinate";
import { calculateDistance } from "../utils/calculateDistance";
import { OrderNode } from "./OrderNode";

// Функция для сравнения расстояний и выбора ближайшего соседа
export function closerNode(
  target: TCoordinate,
  node1: OrderNode | null,
  node2: OrderNode
): OrderNode | null {
  if (node1 === null) {
    return node2;
  }

  // Вычисление расстояний между точками
  const dist1 = calculateDistance(target, node1.order.point_A);
  const dist2 = calculateDistance(target, node2.order.point_A);

  return dist1 < dist2 ? node1 : node2;
}
