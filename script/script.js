// Obtener el elemento del contador del carrito
const cartCount = document.querySelector('.cart-count');

// Obtener el número de artículos guardados en Local Storage (si existe)
let itemCount = localStorage.getItem('itemCount');
if (!itemCount) {
  itemCount = 0;
}

// Actualizar el texto del contador del carrito
cartCount.textContent = itemCount;

// Actualizar el número de artículos en Local Storage (por ejemplo, al agregar o eliminar un artículo)
// localStorage.setItem('itemCount', nuevoNumeroDeArticulos);


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