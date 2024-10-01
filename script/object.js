let pizzas = [
    {
        "name": "Pizza Margherita",
        "description": "Klassische Pizza mit Tomaten, Mozzarella und Basilikum",
        "price": 8.50
    },
    {
        "name": "Pizza Pepperoni",
        "description": "Würzige Pizza mit Pepperoni und Käse",
        "price": 9.50
    },
    {
        "name": "Pizza Funghi",
        "description": "Pizza mit frischen Champignons und Käse",
        "price": 8.90
    },
    {
        "name": "Pizza Hawaii",
        "description": "Pizza mit Schinken und Ananas",
        "price": 10.00
    }
]


let doners = [
    {
        "name": "Döner Kebab",
        "description": "Leckeres Dönerfleisch mit Salat und Sauce im Fladenbrot",
        "price": 5.90
    },
    {
        "name": "Döner Teller",
        "description": "Dönerfleisch mit Pommes und Salat auf einem Teller serviert",
        "price": 7.50,
    },
    {
        "name": "Döner Box",
        "description": "Dönerfleisch und Pommes in einer praktischen Box",
        "price": 6.50
    },
    {
        "name": "Döner Dürüm",
        "description": "Dönerfleisch und Salat in einem Wrap",
        "price": 5.90
    }
]


let drinks = [
    {
        "name": "Cola",
        "description": "Erfrischungsgetränk",
        "price": 2.00
    },
    {
        "name": "Fanta",
        "description": "Orangenlimonade",
        "price": 2.00
    },
    {
        "name": "Sprite",
        "description": "Zitronenlimonade",
        "price": 2.00
    },
    {
        "name": "Wasser",
        "description": "Stilles Wasser",
        "price": 1.50
    }
]


let cart = [];


let cartCount = {};


function clearCart() {
    cart = [];
    cartCount = {};
    renderCart();
    saveCart();
}