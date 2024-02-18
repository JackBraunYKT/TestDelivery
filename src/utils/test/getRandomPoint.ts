import { TCoordinate } from "../../models/TCoordinate";

export function getRandomPoint(): TCoordinate {
  const x = Math.random() * 180 - 90;
  const y = Math.random() * 180 - 90;
  return [x, y];
}
