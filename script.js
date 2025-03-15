function addToCart(productName, price) {
    alert(productName + " added to cart for $" + price);
}

function scrollToShop() {
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
}