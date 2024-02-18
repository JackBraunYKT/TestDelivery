import { TCoordinate } from "./TCoordinate";

export interface ICourier {
  id: number;
  currentLocation: TCoordinate;
  currentOrder: number | null;
  distanceToDestination?: number;
}
