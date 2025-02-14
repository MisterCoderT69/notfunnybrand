document.addEventListener("DOMContentLoaded", function () {
    // Select the product grid
    const productGrid = document.querySelector(".products-grid");

    // Event delegation: listen for clicks on any .product
    productGrid.addEventListener("click", function (event) {
        const product = event.target.closest(".product"); // Get the clicked product
        if (!product) return;

        // Extract product info from HTML
        const name = product.querySelector("h2").textContent;
        const price = product.querySelector("p").textContent;
        const frontImg = product.querySelector(".default-img").src;
        const backImg = product.querySelector(".hover-img").src;

        // Save to localStorage
        const selectedProduct = { name, price, frontImg, backImg };
        localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));

        // Redirect to info.html
        window.location.href = "info.html";
    });
});
