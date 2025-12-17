

async function loadProducts() {
  const container = document.getElementById("productContainer");

  try {
    const res = await fetch("https://best-bakes-backend-1.onrender.com/api/products");
    const products = await res.json();

    container.innerHTML = "";

    products.forEach(product => {
      container.innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">

          <div class="card">

            <div class="overlay">
              <button class="btn btn-secondary">
                <img src="./assets/image/views.png" width="30px">
              </button>

              <button class="btn btn-secondary">
                <img src="./assets/image/heart.png" width="30px">
              </button>

              <button 
                class="btn btn-secondary add-to-cart"
                data-id="${product._id}">
                <img src="./assets/image/add.png" width="30px">
              </button>
            </div>

            <img src="${product.image}" class="card-img-top" alt="${product.name}">

            <div class="card-body text-center">
              <h5 class="card-title">${product.name}</h5>
              <p>${product.description}</p>
              <h6>₹${product.price}</h6>

              <a href="product.html?id=${product._id}" class="btn btn-primary">
                View Details
              </a>
            </div>

          </div>
        </div>
      `;
    });

    // ✅ ADD TO CART LOGIC
    document.querySelectorAll(".add-to-cart").forEach(btn => {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;

        const selectedProduct = products.find(p => p._id === id);

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
  _id: selectedProduct._id,
  name: selectedProduct.name,
  price: selectedProduct.price,
  image: selectedProduct.image
});

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();
alert("🎂 Added to cart!");

      });
    });

  } catch (error) {
    console.error(error);
    container.innerHTML = "<p style='color:red'>Cannot load products</p>";
  }
}

loadProducts();
