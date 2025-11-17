import express from "express";
import fs from "node:fs/promises";
import inquirer from "inquirer";
import { bankAnswer } from "./bank.js";

const app = express();

app.use(express.json());

app.get("/login/:id", async (req, res) => {
  const { id } = req.params;
  const users = await fs.readFile("users.json").then((value) => {
    return JSON.parse(value);
  });
  const user = users.find((value) => {
    return value.id == id;
  });
  res.send(user);
});

app.get("/check-balance/:id", async (req, res) => {
  const { id } = req.params;
  const users = await fs.readFile("users.json").then((value) => {
    return JSON.parse(value);
  });
  const user = users.find((value) => {
    return value.id == id;
  });
  res.send(user.balance);
});

app.put("/deposit", async (req, res) => {
  const { id } = req.body;
  const users = await fs.readFile("users.json", "utf-8").then((value) => {
    return JSON.parse(value);
  });
  const user = users.find((value) => value.id == id);

  user.balance += req.body.balance;

  await fs.writeFile("users.json", JSON.stringify(users));

  res.json(user);
});

app.put("/withdraw", async (req, res) => {
  const { id } = req.body;
  const users = await fs.readFile("users.json", "utf-8").then((value) => {
    return JSON.parse(value);
  });
  const user = users.find((value) => value.id == id);

  user.balance -= req.body.balance;

  await fs.writeFile("users.json", JSON.stringify(users));

  res.json(user);
});

app.put("/transaction/:id", async (req, res) => {
  const { id } = req.params;
  const { receiverId } = req.body;
  const users = await fs.readFile("users.json").then((value) => {
    return JSON.parse(value);
  });
  const user = users.find((value) => {
    return value.id == id;
  });
  const receiver = users.find((value) => {
    return value.id == receiverId;
  });
  user.balance = user.balance - req.body.amount;
  receiver.balance = receiver.balance + req.body.amount;
  await fs.writeFile("users.json", JSON.stringify(users));

  res.json(console.log(user, receiver));
});

app.listen(3000, async () => {});
