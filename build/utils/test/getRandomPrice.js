"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomPrice = void 0;
function getRandomPrice(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.getRandomPrice = getRandomPrice;
