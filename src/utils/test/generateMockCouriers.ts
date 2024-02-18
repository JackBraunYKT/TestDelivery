import { ICourier } from "../../models/ICourier";
import { getRandomCoordinate } from "./getRandomCoordinate";

export function generateMockCouriers(length: number): ICourier[] {
  const mockCouriers: ICourier[] = [];

  for (let i = 1; i <= length; i++) {
    const courier: ICourier = {
      id: i,
      currentLocation: getRandomCoordinate(),
      currentOrder: null,
    };

    mockCouriers.push(courier);
  }

  return mockCouriers;
}
