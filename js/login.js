document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    localStorage.setItem("loggedInUser", email);

    // 🔁 Go back to cart after login
    window.location.href = "cart.html";
  } else {
    alert("Please enter email & password");
  }
});






