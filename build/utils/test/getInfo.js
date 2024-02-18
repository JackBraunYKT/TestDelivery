"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfo = void 0;
function getInfo(target) {
    let x;
    let y;
    let targetName;
    if ("point_A" in target) {
        x = target.point_A[0].toFixed(3);
        y = target.point_A[1].toFixed(3);
        targetName = "Order";
    }
    else {
        x = target.currentLocation[0].toFixed(3);
        y = target.currentLocation[1].toFixed(3);
        targetName = "Courier";
    }
    return `${targetName} ${target.id} - X: ${x} | Y: ${y}`;
}
exports.getInfo = getInfo;
