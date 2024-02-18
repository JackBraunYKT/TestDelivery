import { KDTree } from "./KDTree";
import { calculateHaversineDistance } from "./utils/calculateHaversineDistance";
import { generateMockCouriers } from "./utils/test/generateMockCouriers";
import { generateMockOrders } from "./utils/test/generateMockOrders";
import { getDistanceInfo } from "./utils/test/getDistanceInfo";
import { getInfo } from "./utils/test/getInfo";

const couriers = generateMockCouriers(1);
const orders = generateMockOrders(5);

console.log("Orders:");
orders.forEach((order) => console.log(getInfo(order)));
console.log("---------------------------------------------");
console.log("Couriers:");
couriers.forEach((courier) => console.log(getInfo(courier)));
console.log("---------------------------------------------");

if (couriers.length === 1) {
  console.log("Distance between Orders and Courier:");
  orders.forEach((order) => getDistanceInfo(order, couriers[0]));
}

const orderTree = new KDTree(orders, calculateHaversineDistance);
orderTree.assignCouriersToOrders(couriers);
couriers.forEach((courier) =>
  console.log(
    `The courier #${courier.id} took the order #${courier.currentOrder}`
  )
);
