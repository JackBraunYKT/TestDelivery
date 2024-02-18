"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomCoordinate = void 0;
function getRandomCoordinate() {
    const x = Math.random() * 180 - 90;
    const y = Math.random() * 180 - 90;
    return [x, y];
}
exports.getRandomCoordinate = getRandomCoordinate;
