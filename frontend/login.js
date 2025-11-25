import data from "../data/users.json";
const users = await data.then((value) => {
  return JSON.parse(value);
});
const user = users.find((u) => {
  return u.id == id;
});
console.log(users);

const login = async () => {
  const response = await fetch("http://localhost:3000/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "admin@gmail.com",
      password: "password",
    }),
  });

  if (response.ok) {
    window.location.href = "/bank.html";
  } else {
    window.alert("Amjiltgui");
  }
};
