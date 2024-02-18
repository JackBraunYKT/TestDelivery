import { KDTree } from "./KDTree";
import { calculateHaversineDistance } from "./utils/calculateHaversineDistance";
import { generateMockCouriers } from "./utils/test/generateMockCouriers";
import { generateMockOrders } from "./utils/test/generateMockOrders";
import { getDistanceInfo } from "./utils/test/getDistanceInfo";
import { getInfo } from "./utils/test/getInfo";

const couriers = generateMockCouriers(1); // для генерации списка курьеров, принимает максимальную длинну списка
const orders = generateMockOrders(5); // для генерации списка заказов, принимает максимальную длинну списка

console.log("Orders:");
orders.forEach((order) => console.log(getInfo(order)));
console.log("---------------------------------------------");
console.log("Couriers:");
couriers.forEach((courier) => console.log(getInfo(courier)));
console.log("---------------------------------------------");

// если хотите протестировать дистанцию между заказом и курьером, то в функцию generateMockCouriers отправьте 1.
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
