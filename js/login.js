function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    // mark user as logged in
    localStorage.setItem("isLoggedIn", "true");

    // go to cart page after login
    window.location.href = "cart.html";
  } else {
    alert("Please enter email and password");
  }
}


