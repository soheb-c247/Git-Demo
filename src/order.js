const { getTotal } = require('./cart');

function createOrder(customer) {
    const calculatedTotal = getTotal(); // Fixed calculation
    return {
        customerInfo: customer,
        total: calculatedTotal > 0 ? calculatedTotal : 0,
        date: new Date()
    };
}

function returnOrderInfo(order) {
    return `Order for ${order.customerInfo.name} - Total: $${order.total}`;
}

module.exports = { createOrder, returnOrderInfo };
