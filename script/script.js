


window.addEventListener('scroll', function() {
  var logo = document.getElementById('logo');
  var scrollHeight = window.scrollY || document.documentElement.scrollTop;

  // Change the image source when scroll height reaches 2000px
  if (scrollHeight > 2900) {
    logo.src = 'images/notfunnycap-logo-black-removebg-preview.svg';
  } 
  // Change the image source when scroll height reaches 1400px
  else if (scrollHeight > 1400) {
    logo.src = 'images/notfunnyshirt-logo-black-removebg-preview.svg';
  } 
  // Default image source
  else {
    logo.src = 'images/notfunny_logo-color_black.svg';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('addToCartBtn').addEventListener('click', function() {
      const product = {
          name: document.querySelector('.product h3').textContent,
          price: document.querySelector('.product p').textContent,
          size: document.getElementById('options').value,
          image: document.querySelector('.grid-item-tshirt img').src
      };

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));

      // Update the cart count in the DOM
      const itemCount = cart.length;
      const cartCountElement = document.querySelector('.cart-count');
      cartCountElement.textContent = itemCount.toString();

      alert('Producto agregado al carrito!');
  });
});



// Get the cart array from local storage
const cartItems = JSON.parse(localStorage.getItem('cart'));

// Get the number of items in the cart
const itemCount = cartItems.length;

// Update the cart count in the DOM
const cartCountElement = document.querySelector('.cart-count');
cartCountElement.textContent = itemCount.toString();


