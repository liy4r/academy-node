const logoutBtn = document.getElementById("logout");
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
logoutBtn.addEventListener("click", logout);
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
