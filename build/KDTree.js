"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KDTree = void 0;
class Node {
    constructor(order) {
        this.order = order;
        this.left = null;
        this.right = null;
    }
}
class KDTree {
    constructor(orders, distance) {
        this.takenOrders = {};
        // При создании строим KD-дерево из переданных заказов
        this.root = this.buildTree(orders, 0);
        this.distanse = distance;
        // this.acceptedOrders = {};
    }
    // Рекурсивная функция для построения KD-дерева
    buildTree(orders, depth) {
        // Если массив точек пуст, возвращаем null
        if (orders.length === 0) {
            return null;
        }
        // Выбираем ось разделения
        const axis = depth % 2;
        // Сортируем точки по выбранной оси
        orders.sort((a, b) => a.point_A[axis] - b.point_A[axis]);
        // Индекс медианы
        const medianIndex = Math.floor(orders.length / 2);
        // Значение медианы
        const medianPoint = orders[medianIndex];
        // Создаем узел с медианным значением
        const node = new Node(medianPoint);
        // Рекурсивно строим поддеревья для точек до и после медианы
        node.left = this.buildTree(orders.slice(0, medianIndex), depth + 1);
        node.right = this.buildTree(orders.slice(medianIndex + 1), depth + 1);
        return node;
    }
    assignCouriersToOrders(couriers) {
        if (couriers.length === 0) {
            return couriers;
        }
        return couriers.map((courier) => this.findNearestOrder(courier));
    }
    findNearestOrder(courier) {
        const assignCourier = Object.assign(courier);
        this.findNearestOrderInTree(this.root, courier.currentLocation, assignCourier);
        return assignCourier;
    }
    findNearestOrderInTree(node, targetLocation, nearestCourier) {
        if (node === null) {
            return;
        }
        if (this.takenOrders[node.order.id]) {
            this.findNearestOrderInTree(node.right, targetLocation, nearestCourier);
            this.findNearestOrderInTree(node.left, targetLocation, nearestCourier);
            return;
        }
        const currentDistance = this.distanse(node.order.point_A, targetLocation);
        const nearestDistance = nearestCourier.distanceToDestination || Infinity;
        if (currentDistance < nearestDistance) {
            // Сброс courierId для предыдущего ближайшего заказа
            if (nearestCourier.currentOrder !== null) {
                this.takenOrders[nearestCourier.currentOrder] = false;
            }
            nearestCourier.currentOrder = node.order.id;
            nearestCourier.distanceToDestination = currentDistance;
            // Присваиваем courierId заказу
            node.order.courierId = nearestCourier.id;
            this.takenOrders[node.order.id] = true;
        }
        const axis = this.distanse(targetLocation, node.order.point_A) % 2;
        if (targetLocation[axis] < node.order.point_A[axis]) {
            this.findNearestOrderInTree(node.left, targetLocation, nearestCourier);
            if (node.right &&
                targetLocation[axis] + nearestDistance >= node.order.point_A[axis]) {
                this.findNearestOrderInTree(node.right, targetLocation, nearestCourier);
            }
        }
        else {
            this.findNearestOrderInTree(node.right, targetLocation, nearestCourier);
            if (node.left &&
                targetLocation[axis] - nearestDistance <= node.order.point_A[axis]) {
                this.findNearestOrderInTree(node.left, targetLocation, nearestCourier);
            }
        }
    }
}
exports.KDTree = KDTree;
