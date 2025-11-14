import express from "express";
import fs from "node:fs/promises";
import inquirer from "inquirer";
import { bankAnswer } from "./bank.js";

const app = express();

app.use(express.json());

const getUsers = async () => {
  const userRawData = await fs.readFile("users.json", "utf-8");

  const users = JSON.parse(userRawData);

  return users;
};

const login = async () => {
  const { username, password } = await inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your username",
    },
    {
      type: "password",
      name: "password",
      message: "Enter your password",
    },
  ]);

  const users = await getUsers();

  const user = users.find((value) => {
    return value.username === username && value.password === password;
  });

  if (!user) {
    console.log("username eswel password buruu bn!");
    await auth();
  } else {
    return bankAnswer(users, user);
  }
};

const signup = async () => {
  const { username, password, passwordVerify } = await inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter your username",
    },
    {
      type: "password",
      name: "password",
      message: "Enter your password",
    },
    {
      type: "password",
      name: "passwordVerify",
      message: "Enter your password again",
    },
  ]);

  if (password !== passwordVerify) {
    console.log("Password validation failed!");
    return signup();
  }

  const users = await getUsers();

  const user = users.find((value) => {
    return value.username === username;
  });

  if (user) {
    console.log("Username not valid");
    return signup();
  }

  users.push({ username, password, balance: 0 });

  const userData = JSON.stringify(users);

  await fs.writeFile("users.json", userData, "utf-8");

  console.log("Amjilttai burtguulle!");

  return login();
};

const auth = async () => {
  const { authOption } = await inquirer.prompt([
    {
      type: "select",
      name: "authOption",
      message: "Login Or Signup",
      choices: ["Login", "Signup"],
    },
  ]);

  if (authOption === "Login") {
    return login();
  } else {
    return signup();
  }
};

app.put("/deposit", async (req, res) => {
  const { username } = req.params;
  const users = await fs.readFile("users.json", "utf-8").then((value) => {
    return JSON.parse(value);
  });
  const user = users.find((value) => value.username == username);
  //   Object.assign(user, req.body);

  user.balance += req.body.balance;

  res.json(user);

  //   await fs.writeFile("users.json", JSON.stringify(users));
  //   res.send(user, "Success");
});
auth();

app.listen(3000, () => {
  console.log("3000");
});
