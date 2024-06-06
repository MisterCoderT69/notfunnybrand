document.addEventListener('DOMContentLoaded', function() {
    const cartListElement = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    let cartItems = {}; // Object to keep track of items by name and size

    cart.forEach(product => {
        const price = parseFloat(product.price.replace(/[^\d.]/g, ''));
        total += price * product.quantity; // Update total based on quantity

        // Check if the item already exists in the cart
        const key = `${product.name}-${product.size}`;
        if (cartItems[key]) {
            cartItems[key].quantity += product.quantity; // Increment quantity if item exists
        } else {
            cartItems[key] = {
                ...product,
                quantity: product.quantity
            };
        }
    });

    // Function to update total price
    function updateTotal() {
        total = 0;
        for (const key in cartItems) {
            if (cartItems.hasOwnProperty(key)) {
                const item = cartItems[key];
                total += parseFloat(item.price.replace(/[^\d.]/g, '')) * item.quantity;
            }
        }

        if (total > 700) {
            totalDiv.innerHTML = `Precio Total: $${total.toFixed(2)} - Envío Gratis`;
        } else {
            totalDiv.innerHTML = `Precio Total: $${total.toFixed(2)}`;
        }

        localStorage.setItem('cart', JSON.stringify(Object.values(cartItems)));
    }

    // Function to get the number of distinct products in the cart
    function getNumberOfDistinctProducts() {
        return Object.keys(cartItems).length;
    }

    // Iterate over the cart items and create the list items
    for (const key in cartItems) {
        if (cartItems.hasOwnProperty(key)) {
            const item = cartItems[key];
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="product-info">
                    <h3>${item.name}</h3>
                    <p>Precio: ${item.price}</p>
                    <p>Categoria: ${item.category}</p>
                    <p>Talla: ${item.size}</p>
                    <p>Cantidad: <span class="quantity">${item.quantity}</span></p>
                    <p>
                        <button class="remove-btn">-</button>
                        <button class="add-btn">+</button>
                    </p>
                </div>
            `;
            const addButton = li.querySelector('.add-btn');
            const removeButton = li.querySelector('.remove-btn');

            addButton.addEventListener('click', function() {
                const newQuantity = item.quantity + 1;
                cartItems[key].quantity = newQuantity; // Update quantity in cartItems
                updateTotal(); // Update total price
                li.querySelector('.quantity').innerText = `${newQuantity}`; // Update quantity in DOM
            });

            removeButton.addEventListener('click', function() {
                const newQuantity = item.quantity - 1;
                if (newQuantity === 0) {
                    delete cartItems[key]; // Remove item if quantity is zero
                    li.remove(); // Remove the list item from the DOM
                } else {
                    cartItems[key].quantity = newQuantity; // Update quantity in cartItems
                    li.querySelector('.quantity').innerText = `${newQuantity}`; // Update quantity in DOM
                }
                updateTotal(); // Update total price
            });

            cartListElement.appendChild(li);
        }
    }

    // Create a div for the total price
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('total-price');
    if (total > 700) {
        totalDiv.innerHTML = `Precio Total: $${total.toFixed(2)} - Envío Gratis`;
    } else {
        totalDiv.innerHTML = `Precio Total: $${total.toFixed(2)}`;
    }

    // Insert the total price div after the product items
    cartListElement.appendChild(totalDiv);
});




// Get the cart items div
const cartItemsDiv = document.getElementById('cart-items');

// Get the no products template
const noProductsTemplate = document.getElementById('no-products-template');

// Check if there are no products in the local storage
if (localStorage.length === 0) {
    // Display the no products template
    noProductsTemplate.style.display = 'block';
} else {
    // Products are present in the local storage, so display them
    // You would add your existing logic here to display the products
}


function redirectToPage() {
    // Redirect to another page after 5 seconds
    setTimeout(function() {
        window.location.href = 'https://link.mercadopago.com.mx/notfunnybrand';
    }, 10000); // 5000 milliseconds = 5 seconds
}

