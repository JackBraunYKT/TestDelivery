"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closerNode = void 0;
const calculateDistance_1 = require("../utils/calculateDistance");
// Функция для сравнения расстояний и выбора ближайшего соседа
function closerNode(target, node1, node2) {
    if (node1 === null) {
        return node2;
    }
    // Вычисление расстояний между точками
    const dist1 = (0, calculateDistance_1.calculateDistance)(target, node1.order.point_A);
    const dist2 = (0, calculateDistance_1.calculateDistance)(target, node2.order.point_A);
    return dist1 < dist2 ? node1 : node2;
}
exports.closerNode = closerNode;
