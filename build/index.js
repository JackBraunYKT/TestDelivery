"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const KDTree_1 = require("./KDTree");
const calculateHaversineDistance_1 = require("./utils/calculateHaversineDistance");
const generateMockCouriers_1 = require("./utils/test/generateMockCouriers");
const generateMockOrders_1 = require("./utils/test/generateMockOrders");
const getDistanceInfo_1 = require("./utils/test/getDistanceInfo");
const getInfo_1 = require("./utils/test/getInfo");
const couriers = (0, generateMockCouriers_1.generateMockCouriers)(1);
const orders = (0, generateMockOrders_1.generateMockOrders)(5);
console.log("Orders:");
orders.forEach((order) => console.log((0, getInfo_1.getInfo)(order)));
console.log("---------------------------------------------");
console.log("Couriers:");
couriers.forEach((courier) => console.log((0, getInfo_1.getInfo)(courier)));
console.log("---------------------------------------------");
if (couriers.length === 1) {
    console.log("Distance between Orders and Courier:");
    orders.forEach((order) => (0, getDistanceInfo_1.getDistanceInfo)(order, couriers[0]));
}
const orderTree = new KDTree_1.KDTree(orders, calculateHaversineDistance_1.calculateHaversineDistance);
orderTree.assignCouriersToOrders(couriers);
couriers.forEach((courier) => console.log(`The courier #${courier.id} took the order #${courier.currentOrder}`));
