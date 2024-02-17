import { Point } from "models";

export class KDNode {
  point: Point;
  left: KDNode | null;
  right: KDNode | null;

  constructor(point: Point) {
    this.point = point;
    this.left = null;
    this.right = null;
  }
}
