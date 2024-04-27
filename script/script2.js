document.addEventListener('DOMContentLoaded', function() {
    const cartListElement = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cart.forEach(product => {
        // Extract the numeric part of the price string and convert it to a number
        const price = parseFloat(product.price.replace(/[^\d.]/g, '')); // Remove non-numeric characters
        total += price;

        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Size: ${product.size}</p>
            </div>
        `;
        cartListElement.appendChild(li);
    });

    // Create a div for the total price
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('total-price');
    totalDiv.innerHTML = `Total Price: $${total.toFixed(2)}`;

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
