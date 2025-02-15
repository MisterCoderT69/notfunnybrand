// POR HACER
//AGREGAR PRECIO DE ENVIO 
//HACER QUE SE JUNTEN SI ES QUE HAY PRODUCTOS DUPLICADDOS
//CAMBIAR LA FUENTE DEL TEXTO 
//CAMBIAR LA FUENTE DEL TEXTO 

// Get the cart array from local storage or initialize it as an empty array
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart count in the DOM
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0); // Count total items
    cartCountElement.textContent = itemCount.toString();
}

// Initial cart count update
updateCartCount();

document.getElementById('addToCartBtn').addEventListener('click', function() {
    const productName = document.querySelector('.product h3')?.textContent || 'Producto';
    const productPrice = document.getElementById('price')?.textContent || '0';
    const productSize = document.getElementById('options')?.value || 'Talla Única';
    const productCategory = document.getElementById('options_blank')?.value || 'General';
    const productImage = document.querySelector('.grid-item-tshirt img')?.src || '';

    // Create product object
    const product = {
        name: productName,
        price: productPrice,
        size: productSize,
        category: productCategory,
        frontImg: productImage,
        quantity: 1
    };

    // Check if the product already exists in cart (by name & size)
    const existingItem = cartItems.find(item => item.name === product.name && item.size === product.size);

    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if already in cart
    } else {
        cartItems.push(product); // Otherwise, add as new item
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Update the cart count in the DOM
    updateCartCount();
});
