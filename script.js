function renderPizza() {
    let pizza = document.getElementById("ordrPizza");
    pizza.innerHTML = "";
    for (let i = 0; i < pizzas.length; i++) {
        const getPizza = pizzas[i];
        pizza.innerHTML += getPizzaHtml(getPizza,i);
    }
}


function toggleDeleteModal() {
    document.getElementById("descriptionModal").classList.toggle("d-none");
}


function showDescription(description) {
    document.getElementById("descriptionText").innerText = description;
    toggleDeleteModal();
}


function renderDoner() {
    let doner = document.getElementById("ordrDoner");
    doner.innerHTML = "";
    for (let i = 0; i < doners.length; i++) {
        const getDoner = doners[i];
        doner.innerHTML += getDonerHtml(getDoner,i);
    }
}


function renderDrink() {
    let drink = document.getElementById("ordrDrinks");
    drink.innerHTML = "";
    for (let i = 0; i < drinks.length; i++) {
        const getDrink = drinks[i];
        drink.innerHTML += getDrinkHtml(getDrink,i);
    }
    loadCart();
}


function addToCart(index, type) {
    let item;
    switch (type) {
        case 'pizza':
            item = pizzas[index];
            break;
        case 'doner':
            item = doners[index];
            break;
        case 'drink':
            item = drinks[index];
            break;
    }
    if (cartCount[item.name]) {
        cartCount[item.name] += 1;
    } else {
        cartCount[item.name] = 1;
        cart.push(item);
    }
    renderCart();
    saveCart();
}


function renderCart() {
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const itemTotalPrice= (item.price * cartCount[item.name]).toLocaleString('de-DE', { style: 'currency', currency: 'EUR'});
        cartItems.innerHTML += getcartItemsHtml(itemTotalPrice,item,i);
    }
    updateTotalPrice();
}


function updateQuantity(index, action) {
    const itemName = cart[index].name;
    if (action == 'increase') {
        cartCount[itemName] += 1;
    } else if (action == 'decrease') {
        if (cartCount[itemName] > 1) {
            cartCount[itemName] -= 1;
        } else {
            removeItemFromCart(index);
        }
    }
    renderCart();
    saveCart();
}


function removeFromCart(index) {
    removeItemFromCart(index);
    renderCart();
}


function removeItemFromCart(index) {
    const itemName = cart[index].name;
    delete cartCount[itemName];
    for (let i = index; i < cart.length - 1; i++) {
        cart[i] = cart[i + 1];
    }
    cart.length--;
    saveCart();
}


function updateTotalPrice() {
    let totalPrice = document.getElementById("totalPrice");
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cartCount[cart[i].name];
    }
    totalPrice.innerHTML = `Gesamtpreis: ${total.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}`;
}


function saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    localStorage.setItem('cartCount', JSON.stringify(cartCount));
}


function loadCart() {
    const savedCart = localStorage.getItem('cartItems');
    const savedCartCount = localStorage.getItem('cartCount');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    if (savedCartCount) {
        cartCount = JSON.parse(savedCartCount);
    }
    renderCart(); 
}


function order() {
    if (cart.length > 0) {
        document.getElementById("orderMessage").innerText = "Danke für Ihre Bestellung!";
        toggleOrderModal();
        clearCart();
    }
}


function toggleOrderModal() {
    document.getElementById("orderModal").classList.toggle("d-none");
}


function showBasket() {
    let basketWrapper = document.getElementById("basket_wrapper");
   let contentOrder=document.getElementById("content");
   let toggleButton = document.getElementById("toggleButton");
   let fixedButton =document.getElementById("fixedButton");
    if (basketWrapper.style.display === "block") {
        basketWrapper.style.display = "none";
        contentOrder.style.display="block"; 
        toggleButton.style.display="none";   
    } else {
        basketWrapper.style.display = "block";
        basketWrapper.style.width = "100%";
        contentOrder.style.display="none";
        toggleButton.style.display="block";
    }
}

