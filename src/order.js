const { getTotal } = require('./cart');

function createOrder(customer) {
    return {
        customerInfo: customer,
        total: getTotal(),
        date: new Date()
    };
}

function returnOrderInfo(order) {
    return `Order for ${order.customerInfo.name} - Total: $${order.total}`;
}

module.exports = { createOrder, returnOrderInfo };

// Support for discount calculations applied to order total
