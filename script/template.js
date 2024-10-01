function getPizzaHtml(getPizza,i){
    return /*html*/`<div class="ordrContent" onclick="addToCart(${i}, 'pizza')">
            <div><div class="ItemsName">${getPizza.name} <img onclick="event.stopPropagation(); showDescription('${getPizza.description}')" class="add" src="./assets/img/info.png" alt="info"></div>
            <div class="price">${getPizza.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</div></div>
            <img class="add" onclick="event.stopPropagation(); addToCart(${i}, 'pizza')" src="./assets/img/add.png" alt="Add">
        </div>`;
}


function getDonerHtml(getDoner,i){
    return `<div class="ordrContent" onclick="addToCart(${i}, 'doner')">
        <div><div class="ItemsName">${getDoner.name} <img onclick="event.stopPropagation(); showDescription('${getDoner.description}')" class="add" src="./assets/img/info.png" alt="info"></div>
        <div class="price">${getDoner.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</div></div>
        <img class="add" onclick="event.stopPropagation(); addToCart(${i}, 'doner')" src="./assets/img/add.png" alt="Add">
      </div>`
}


function getDrinkHtml(getDrink,i){
    return `<div class="ordrContent" onclick="addToCart(${i}, 'drink')">
              <div><div class="ItemsName">${getDrink.name} <img onclick="event.stopPropagation(); showDescription('${getDrink.description}')" class="add" src="./assets/img/info.png" alt="info"></div>
                <div class="price">${getDrink.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</div></div>
              <img class="add" onclick="event.stopPropagation(); addToCart(${i}, 'drink')" src="./assets/img/add.png" alt="Add">
        </div>`
       
}


function getcartItemsHtml(itemTotalPrice,item,i){
    return `<div class="cart-item">
            <div class="itemName">${item.name}</div>
            <div class="itemPrice">${itemTotalPrice}
              <img class="add" onclick="updateQuantity(${i}, 'decrease')" src="./assets/img/subtract.png" alt="subtract">
              <div>${cartCount[item.name]}</div>
              <img class="add" onclick="updateQuantity(${i}, 'increase')" src="./assets/img/add.png" alt="Add" >
              <img class="add" onclick="removeFromCart(${i})" src="./assets/img/trashCan.png" alt="TrashCan">
            </div>
        </div>`
}


function initialize() {
    renderDoner();
    renderPizza();
    renderDrink();
    loadCart();
}