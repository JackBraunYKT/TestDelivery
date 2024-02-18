import { generateMockCouriers } from "./utils/test/generateMockCouriers";
import { generateMockOrders } from "./utils/test/generateMockOrders";
import { OrderTree } from "./OrderTree";
import { getInfo } from "./utils/test/getInfo";

const couriers = generateMockCouriers();
const orders = generateMockOrders();

console.log("Orders:");
orders.forEach((order) => console.log(getInfo(order)));
console.log("---------------------------------------------");
console.log("Couriers:");
couriers.forEach((courier) => console.log(getInfo(courier)));
console.log("---------------------------------------------");

const orderTree = new OrderTree(orders);
console.log(orderTree);
orderTree.assignCouriersToOrders(couriers);
