import { TCoordinate } from "../../models/TCoordinate";

export function getRandomCoordinate(): TCoordinate {
  const x = Math.random() * 180 - 90;
  const y = Math.random() * 180 - 90;
  return [x, y];
}
