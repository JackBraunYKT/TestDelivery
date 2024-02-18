"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMockCouriers = void 0;
const getRandomPoint_1 = require("./getRandomPoint");
function generateMockCouriers() {
    const mockCouriers = [];
    for (let i = 1; i <= 10; i++) {
        const courier = {
            id: i,
            currentLocation: (0, getRandomPoint_1.getRandomPoint)(),
            currentOrder: null,
        };
        mockCouriers.push(courier);
    }
    return mockCouriers;
}
exports.generateMockCouriers = generateMockCouriers;
