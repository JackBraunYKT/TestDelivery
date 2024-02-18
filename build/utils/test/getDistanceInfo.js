"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistanceInfo = void 0;
const calculateHaversineDistance_1 = require("../calculateHaversineDistance");
function getDistanceInfo(order, courier) {
    const distance = (0, calculateHaversineDistance_1.calculateHaversineDistance)(order.point_A, courier.currentLocation);
    console.log(`Order#${order.id} and Courier is ${distance.toFixed(2)} km`);
}
exports.getDistanceInfo = getDistanceInfo;
