import { Point } from "models";

export function getRandomPoint(): Point {
  const x = Math.random() * 180 - 90;
  const y = Math.random() * 180 - 90;
  return [x, y];
}
