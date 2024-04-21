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
