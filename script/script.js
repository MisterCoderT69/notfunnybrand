// POR HACER
//AGREGAR PRECIO DE ENVIO 
//HACER QUE SE JUNTEN SI ES QUE HAY PRODUCTOS DUPLICADDOS
//CAMBIAR LA FUENTE DEL TEXTO 
//CAMBIAR LA FUENTE DEL TEXTO 

// Get the cart array from local storage or initialize it as an empty array
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Get the number of items in the cart
const itemCount = cartItems.length;

// Update the cart count in the DOM
const cartCountElement = document.querySelector('.cart-count');
cartCountElement.textContent = itemCount.toString();

document.getElementById('addToCartBtn').addEventListener('click', function() {
    const product = {
        name: document.querySelector('.product h3').textContent,
        price: document.getElementById('price').textContent,
        size: document.getElementById('options').value,
        category: document.getElementById('options_blank').value,
        image: document.querySelector('.grid-item-tshirt img')?.src || '' // Assuming the image might not be present
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove check for existing product
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart count in the DOM
    const itemCount = cart.length;
    cartCountElement.textContent = itemCount.toString();
});
