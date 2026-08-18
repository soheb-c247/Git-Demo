const products = [
    { id: 1, name: "Laptop", price: 999, stock: 10 },
    { id: 2, name: "Mouse", price: 25, stock: 50 },
    { id: 3, name: "Keyboard", price: 45, stock: 30 }
];

function findProducts() {
    // Return all products, filtered if needed
    return products;
}

function searchProducts(query) {
    // Basic search functionality (case-insensitive)
    const lowerQuery = query.toLowerCase();
    return products.filter(p => p.name.toLowerCase().includes(lowerQuery));
}

module.exports = { products, findProducts, searchProducts };
