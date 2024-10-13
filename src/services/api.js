const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'This is a product',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        description: 'This is a product',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
        description: 'This is a product',
    },
    {
        id: 4,
        name: 'Product 4',
        price: 400,
        description: 'This is a product',
    },
    {
        id: 5,
        name: 'Product 5',
        price: 500,
        description: 'This is a product',
    },
    {
        id: 6,
        name: 'Product 6',
        price: 600,
        description: 'This is a product',
    },
    {
        id: 7,
        name: 'Product 7',
        price: 700,
        description: 'This is a product',
    }
];

export async function fetchProducts() {
    return products;
}

export async function fetchProduct(id) {
    const product = products.find(product => product.id === id);
    return product;
}