"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMockOrders = void 0;
const getRandomPoint_1 = require("./getRandomPoint");
const getRandomPrice_1 = require("./getRandomPrice");
function generateMockOrders() {
    const mockOrders = [];
    for (let i = 1; i <= 10; i++) {
        const order = {
            id: i,
            point_A: (0, getRandomPoint_1.getRandomPoint)(),
            point_B: (0, getRandomPoint_1.getRandomPoint)(),
            price: (0, getRandomPrice_1.getRandomPrice)(100, 1000),
            courierId: null,
        };
        mockOrders.push(order);
    }
    return mockOrders;
}
exports.generateMockOrders = generateMockOrders;
