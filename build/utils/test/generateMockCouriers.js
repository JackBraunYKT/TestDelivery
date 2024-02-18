"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMockCouriers = void 0;
const getRandomCoordinate_1 = require("./getRandomCoordinate");
function generateMockCouriers(length) {
    const mockCouriers = [];
    for (let i = 1; i <= length; i++) {
        const courier = {
            id: i,
            currentLocation: (0, getRandomCoordinate_1.getRandomCoordinate)(),
            currentOrder: null,
        };
        mockCouriers.push(courier);
    }
    return mockCouriers;
}
exports.generateMockCouriers = generateMockCouriers;
