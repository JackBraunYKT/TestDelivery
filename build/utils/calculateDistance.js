"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDistance = void 0;
function calculateDistance(p1, p2) {
    const [lat1, lon1] = p1;
    const [lat2, lon2] = p2;
    const R = 6371; // радиус Земли в километрах
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
            Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // расстояние в километрах
    return distance;
}
exports.calculateDistance = calculateDistance;
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
