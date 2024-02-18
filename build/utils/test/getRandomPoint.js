"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomPoint = void 0;
function getRandomPoint() {
    const x = Math.random() * 180 - 90;
    const y = Math.random() * 180 - 90;
    return [x, y];
}
exports.getRandomPoint = getRandomPoint;
