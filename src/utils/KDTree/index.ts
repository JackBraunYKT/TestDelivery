import { calculateDistance } from "utils/calculateDistance";
import { KDNode } from "./KDNode";
import { Point } from "models";

export class KDTree {
  root: KDNode | null;

  constructor(points: number[][]) {
    this.root = this.buildTree(points, 0);
  }

  private buildTree(points: number[][], depth: number): KDNode | null {
    if (points.length === 0) {
      return null;
    }

    const k = points[0].length;
    const axis = depth % k;

    points.sort((a, b) => a[axis] - b[axis]);

    const medianIndex = Math.floor(points.length / 2);
    const medianPoint = points[medianIndex];

    const node = new KDNode(medianPoint);
    node.left = this.buildTree(points.slice(0, medianIndex), depth + 1);
    node.right = this.buildTree(points.slice(medianIndex + 1), depth + 1);

    return node;
  }

  private findNearestNeighborHelper(
    node: KDNode | null,
    target: Point,
    depth: number,
    best: KDNode | null
  ): KDNode | null {
    if (node === null) {
      return best;
    }

    const k = target.length;
    const axis = depth % k;
    const nextBest = closerPoint(target, best, node.point);

    const nextBranch = target[axis] < node.point[axis] ? node.left : node.right;
    return this.findNearestNeighborHelper(
      nextBranch,
      target,
      depth + 1,
      nextBest
    );
  }

  findNearestNeighbor(target: number[]): KDNode | null {
    return this.findNearestNeighborHelper(this.root, target, 0, null);
  }
}

function closerPoint(
  target: Point,
  p1: KDNode | null,
  p2: Point
): KDNode | null {
  if (p1 === null) {
    return new KDNode(p2);
  }

  const dist1 = calculateDistance(target, p1.point);
  const dist2 = calculateDistance(target, p2);

  return dist1 < dist2 ? p1 : new KDNode(p2);
}
