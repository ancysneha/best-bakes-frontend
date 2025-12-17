function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    localStorage.setItem("loggedIn", "true");
    alert("Login Successful ✅");
    window.location.href = "index.html";
  } else {
    alert("Please enter details ❌");
  }
}
