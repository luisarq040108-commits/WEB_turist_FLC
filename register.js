function register() {
  const user = document.getElementById("newUser").value;
  const pass = document.getElementById("newPass").value;
  const confirm = document.getElementById("confirmPass").value;
  const msg = document.getElementById("registerMessage");


  if (user === "" || pass === "" || confirm === "") {
    msg.style.color = "red";
    msg.textContent = "❌ Todos los campos son obligatorios";
    return;
  }

  if (pass !== confirm) {
    msg.style.color = "red";
    msg.textContent = "❌ Las contraseñas no coinciden";
    return;
  }


  localStorage.setItem("username", user);
  localStorage.setItem("password", pass);

  msg.style.color = "green";
  msg.textContent = "✅ Registro exitoso. Ahora puedes iniciar sesión.";
}
