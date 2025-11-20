const emailInput = document.getElementById("name");
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
    if (res.ok) {
    }
  } catch {
    e("user not found");
  }
});
