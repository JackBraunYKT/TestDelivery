import { ICourier } from "../../models/ICourier";
import { getRandomPoint } from "./getRandomPoint";

export function generateMockCouriers(): ICourier[] {
  const mockCouriers: ICourier[] = [];

  for (let i = 1; i <= 10; i++) {
    const courier: ICourier = {
      id: i,
      currentLocation: getRandomPoint(),
      currentOrder: null,
    };

    mockCouriers.push(courier);
  }

  return mockCouriers;
}
