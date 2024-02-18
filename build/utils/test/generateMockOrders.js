"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMockOrders = void 0;
const getRandomCoordinate_1 = require("./getRandomCoordinate");
const getRandomPrice_1 = require("./getRandomPrice");
function generateMockOrders(length) {
    const mockOrders = [];
    for (let i = 1; i <= length; i++) {
        const order = {
            id: i,
            point_A: (0, getRandomCoordinate_1.getRandomCoordinate)(),
            point_B: (0, getRandomCoordinate_1.getRandomCoordinate)(),
            price: (0, getRandomPrice_1.getRandomPrice)(100, 1000),
            courierId: null,
        };
        mockOrders.push(order);
    }
    return mockOrders;
}
exports.generateMockOrders = generateMockOrders;
