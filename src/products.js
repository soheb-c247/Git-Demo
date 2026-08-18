const products = [
    { id: 1, name: "Laptop", price: 999, stock: 10 },
    { id: 2, name: "Mouse", price: 25, stock: 50 },
    { id: 3, name: "Keyboard", price: 45, stock: 30 }
];

function findProducts() {
    return products;
}

function searchProducts(query) {
    return products.filter(p => p.name.includes(query));
}

module.exports = { products, findProducts, searchProducts };

// Note: Product models will be migrated to DB soon.

// Add sorting logic part 1

// Improve sorting logic part 2
