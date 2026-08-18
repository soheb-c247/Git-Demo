const cart = [];

function addProduct(product, quantity = 1) {
    cart.push(product);
    console.log(`Product ${product.name} added to cart.`);
}

function removeProduct(productId) {
    const index = cart.findIndex(p => p.id === productId);
    if (index > -1) cart.splice(index, 1);
}

function getSubtotal() {
    return cart.reduce((sum, p) => sum + p.price, 0);
}

function getTotal() {
    return getSubtotal();
}

function searchCart(query) {
    return cart.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
}

module.exports = { cart, addProduct, removeProduct, getSubtotal, getTotal, searchCart };
