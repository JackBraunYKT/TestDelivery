"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderTree = void 0;
const calculateDistance_1 = require("../utils/calculateDistance");
const OrderNode_1 = require("./OrderNode");
class OrderTree {
    constructor(orders) {
        // При создании строим KD-дерево из переданных заказов
        this.root = this.buildTree(orders, 0);
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
        console.log(orders);
        // Индекс медианы
        const medianIndex = Math.floor(orders.length / 2);
        // Значение медианы
        const medianPoint = orders[medianIndex];
        // Создаем узел с медианным значением
        const node = new OrderNode_1.OrderNode(medianPoint);
        // Рекурсивно строим поддеревья для точек до и после медианы
        node.left = this.buildTree(orders.slice(0, medianIndex), depth + 1);
        node.right = this.buildTree(orders.slice(medianIndex + 1), depth + 1);
        return node;
    }
    // Публичный метод для присвоения курьеров заказам
    assignCouriersToOrders(couriers) {
        this.assignCouriersToOrdersHelper(this.root, couriers);
    }
    // Рекурсивная функция для присвоения курьеров заказам
    assignCouriersToOrdersHelper(node, couriers) {
        if (node === null) {
            return;
        }
        // Нахождение ближайшего курьера, если у заказа еще нет курьера
        if (node.order.courierId === null) {
            const availableCouriers = couriers.filter((courier) => courier.currentOrder === null);
            const nearestCourier = this.findNearestCourier(node.order.point_A, availableCouriers);
            if (nearestCourier) {
                // Присвоение курьера заказу и обновление текущего заказа у курьера
                node.order.courierId = nearestCourier.id;
                nearestCourier.currentOrder = node.order.id;
                console.log(`Courier ${nearestCourier.id} assigned to Order ${node.order.id}`);
            }
        }
        // Рекурсивный вызов для левого и правого поддеревьев
        this.assignCouriersToOrdersHelper(node.left, couriers);
        this.assignCouriersToOrdersHelper(node.right, couriers);
    }
    // Нахождение ближайшего курьера к заданной точке
    findNearestCourier(target, couriers) {
        let nearestCourier = null;
        let minDistance = Infinity;
        for (const courier of couriers) {
            // Вычисление расстояния между точками
            const dist = (0, calculateDistance_1.calculateDistance)(target, courier.currentLocation);
            if (dist < minDistance) {
                minDistance = dist;
                nearestCourier = courier;
            }
        }
        return nearestCourier;
    }
}
exports.OrderTree = OrderTree;
