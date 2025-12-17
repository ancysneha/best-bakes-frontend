const cartContainer = document.getElementById("cartContainer");
const totalAmount = document.getElementById("totalAmount");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty 🛒</p>";
    totalAmount.innerText = "";
    return;
  }

  cart.forEach((item, index) => {
    item.qty = item.qty || 1;
    total += item.price * item.qty;

    cartContainer.innerHTML += `
      <div class="cart-card">
        <img src="${item.image}">
        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>

          <div>
            <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
          </div>

          <button onclick="removeItem(${index})">❌ Remove</button>
        </div>
      </div>
    `;
  });

  totalAmount.innerText = `Total: ₹${total}`;
}

function changeQty(index, change) {
  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
