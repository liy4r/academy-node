const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const username = emailInput.value;
  const password = passwordInput.value;
  try {
    const res = await fetch("localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Contend-Type": "application/json",
        body: JSON.stringify({ username, password }),
      },
    });
  } catch {
    e;
  }
});
