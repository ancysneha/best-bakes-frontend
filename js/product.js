
window.addEventListener("DOMContentLoaded", () => {
  console.log("✅ product.js loaded");

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (!productId) {
    alert("❌ No product ID in URL");
    return;
  }

  fetch(`https://best-bakes-backend.onrender.com/api/products/${productId}`)
    .then(res => res.json())
    .then(product => {
      console.log("🎂 Product:", product);

      document.getElementById("productImage").src = product.image;
      document.getElementById("productName").innerText = product.name;
      document.getElementById("productDescription").innerText = product.description;
      document.getElementById("productPrice").innerText = "₹ " + product.price;

      const btn = document.getElementById("addToCartBtn");
      const status = document.getElementById("productStatus");

      btn.onclick = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push({
          _id: product._id,
          name: product.name,
          price: product.price,
          image: product.image
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        // ✅ THIS WILL DEFINITELY SHOW
        status.innerText = "✓ Added to cart!";
        btn.innerText = "✓ Added";
        btn.disabled = true;

        console.log("🛒 Cart:", cart);
      };
    })
    .catch(err => {
      console.error(err);
      document.getElementById("productStatus").innerText = "❌ Product not found";
    });
});
