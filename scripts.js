let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    // Clear the cart items list
    cartItems.innerHTML = '';

    // Add each product in the cart
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} €`;
        cartItems.appendChild(li);
    });

    // Update the total price
    totalPrice.textContent = `${total.toFixed(2)} €`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Votre panier est vide !");
    } else {
        alert("Commande validée. Merci pour votre achat !");
        cart = [];
        total = 0;
        updateCart();
    }
}
