document.addEventListener("DOMContentLoaded", function () {
    const sizeOptions = document.querySelectorAll(".size-option");
    const sizeInfo = document.getElementById("size-info");
    const cartIcon = document.querySelector(".fa-shopping-cart");

    let selectedSize = null;

    // Handle size selection
    sizeOptions.forEach(option => {
        option.addEventListener("click", function () {
            // Remove 'selected' class from all options
            sizeOptions.forEach(opt => opt.classList.remove("selected"));

            // Add 'selected' class to the clicked option
            this.classList.add("selected");

            // Get size info and store it
            selectedSize = this.textContent;
            sizeInfo.textContent = this.getAttribute("data-size-info");
            sizeInfo.style.display = "block";
        });
    });

    // Handle adding to cart
    cartIcon.addEventListener("click", function () {
        if (!selectedSize) {
            alert("Please select a size before adding to the cart!");
            return;
        }

        // Get product details
        const product = {
            name: document.getElementById("product-name").textContent,
            price: document.getElementById("product-price").textContent,
            frontImg: document.getElementById("product-front-img").src,
            backImg: document.getElementById("product-back-img").src,
            size: selectedSize
        };

        // Get existing cart from localStorage
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Add product to cart
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        // Animate cart icon
        cartIcon.style.transform = "scale(1.2)";
        cartIcon.style.color = "#27ae60"; // Change color on click
        setTimeout(() => {
            cartIcon.style.transform = "scale(1)";
            cartIcon.style.color = "#000";
        }, 300);

        alert("Product added to cart!");
        window.location.href = "cart.html"; // Uncomment to redirect to cart page
    });
});
