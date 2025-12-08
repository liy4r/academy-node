const login = async () => {
  const userEmail = document.getElementById("email");
  const userPassword = document.getElementById("password");

  if (!userEmail.value || !userPassword.value) {
    return window.alert("Dutuu");
  }

  const response = await fetch("http://localhost:3000/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({
      email: userEmail.value,
      password: userPassword.value,
    }),
  });

  if (response.ok) {
    window.location.href = "/bank.html";
  } else {
    window.alert("Amjiltgui");
  }
};

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", login);

const deposit = async () => {
  const amount = document.getElementById("amount");
  const deposit = async () => {
    const response = await fetch("http:// localhost:3000/bank/deposit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: amount.value,
      }),
    });
  };
};
const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", deposit);
const logout = async () => {
  const response = await fetch("http://localhost:3000/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    window.location.href = "/login.html";
  } else {
    window.alert("Amjiltgui");
  }
};
