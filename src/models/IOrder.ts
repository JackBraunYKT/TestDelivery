import { TCoordinate } from "./TCoordinate";

export interface IOrder {
  id: number;
  point_A: TCoordinate;
  point_B: TCoordinate;
  price: number;
  courierId: number | null;
}
