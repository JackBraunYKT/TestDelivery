export type Point = [number, number];

export interface IOrder {
  id: number;
  point_A: Point;
  point_B: Point;
  price: number;
  courierId: number | null;
}

export interface ICourier {
  id: number;
  currentLocation: Point;
}
