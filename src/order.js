const { getTotal } = require('./cart');

function createOrder(customer) {
    return {
        customerInfo: customer,
        total: getTotal(),
        date: new Date(),
        paymentStatus: 'pending',
        paymentMethod: 'credit_card'
    };
}

function returnOrderInfo(order) {
    return `Order for ${order.customerInfo.name} - Total: $${order.total} (${order.paymentStatus})`;
}

module.exports = { createOrder, returnOrderInfo };
