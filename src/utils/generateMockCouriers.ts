import { ICourier } from "models";
import { getRandomPoint } from "./getRandomPoint";

export function generateMockCouriers(): ICourier[] {
  const mockCouriers: ICourier[] = [];

  for (let i = 1; i <= 100; i++) {
    const courier: ICourier = {
      id: i,
      currentLocation: getRandomPoint(),
    };

    mockCouriers.push(courier);
  }

  return mockCouriers;
}
