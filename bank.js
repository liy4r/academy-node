import inquirer from "inquirer";
import fs from "node:fs/promises";

export const bankAnswer = async (users, user) => {
  const { bankOption } = await inquirer.prompt([
    {
      type: "select",
      name: "bankOption",
      message: "Login Or Signup",
      choices: [
        { name: "Deposit", value: "deposit" },
        { name: "Withdraw", value: "withdraw" },
        { name: "History all", value: "history-all" },
        { name: "Check balance", value: "check-balance" },
        { name: "Transaction", value: "transaction" },
        { name: "Exit", value: "exit" },
      ],
    },
  ]);

  switch (bankOption) {
    case "deposit":
      await deposit(users, user);
      break;
    case "withdraw":
      await withdraw(users, user);
      break;
    case "history-all":
      await historyAll(users, user);
      break;
    case "check-balance":
      await checkBalance(users, user);
      break;
    case "transaction":
      await transaction(users, user);
      break;
    case "exit":
      process.exit();
  }
};

const updateUser = async (users, user, amount, type) => {
  const userData = JSON.stringify(users);

  await fs.writeFile("users.json", userData, "utf-8");

  const historyRawData = await fs.readFile("history.json", "utf-8");
  const history = JSON.parse(historyRawData);

  const userHistories = history[user.username] || [];

  userHistories.push({
    type,
    amount,
    balance: user.balance,
    currentBalance: 0,
  });

  history[user.username] = userHistories;

  const historyData = JSON.stringify(history);

  await fs.writeFile("history.json", historyData, "utf-8");
  console.log("Amjilttai");

  return;
};

const deposit = async (users, user) => {
  let balance = parseInt(user.balance) || 0;

  const { amount } = await inquirer.prompt([
    {
      type: "number",
      name: "amount",
      message: "Hediin orlogo hiih we?",
    },
  ]);

  balance = balance + amount;

  user.balance = balance;

  return await updateUser(users, user, amount, "deposit");
};
const withdraw = async (users, user) => {
  const { amount } = await inquirer.prompt([
    {
      type: "number",
      name: "amount",
      message: "Hediin zarlaga gargah ve?",
    },
  ]);
  let userA = users.find((value) => {
    return value.username === user.username;
  });
  userA.balance = userA.balance - amount;
  user.balance = userA.balance;
  return await updateUser(users, user, amount, "withdraw");
  // if (balance > withdrawAmount) {
  //   balance = balance - withdrawAmount;
  //   user.balance = balance;
  //   return await updateUser(users, user, withdrawAmount, "withdraw");
  // } else {
  //   console.log("Guilgee amjiltgui");
  // }
};
const checkBalance = async (users, user) => {
  console.log(`Tanii dansnii uldegdel ${user.balance}`);
};

const historyAll = async (users, user) => {
  const { historyOption } = await inquirer.prompt([
    {
      type: "select",
      name: "historyOption",
      message: "Deposit or Withdraw or Transaction",
      choices: [
        { name: "History deposit", value: "history-deposit" },
        { name: "History withdraw", value: "history-withdraw" },
        { name: "History transaction", value: "history-trans" },
      ],
    },
  ]);
  switch (historyOption) {
    case "history-deposit":
      let userB = await fs.readFile("history.json", "utf-8");
      let userC = JSON.parse(userB);
      const userD = userC[user.username];
      for (let i = 0; i < userD.length; i++) {
        if (userD[i].type === "deposit") {
          console.log(userD[i]);
        }
      }
      break;
    case "history-withdraw":
      let userE = await fs.readFile("history.json", "utf-8");
      let userF = JSON.parse(userE);
      const userG = userF[user.username];
      for (let i = 0; i < userG.length; i++) {
        if (userG[i].type === "withdraw") {
          console.log(userG[i]);
        }
      }
      break;
    case "history-trans":
      let userH = await fs.readFile("history.json", "utf-8");
      let userI = JSON.parse(userH);
      const userJ = userI[user.username];
      for (let i = 0; i < userJ.length; i++) {
        if (
          userJ[i].type === "transaction-in" ||
          userJ[i].type === "transaction-out"
        ) {
          console.log(userJ[i]);
        }
      }
      break;
  }
};
const transaction = async (users, user) => {
  //let balance = parseInt(user.balance);
  const { amount, trName } = await inquirer.prompt([
    {
      type: "input",
      name: "trName",
      message: "Hen ruu shiljuuleh ve?",
    },
    {
      type: "number",
      name: "amount",
      message: "Hediig shiljuuleh ve?",
    },
  ]);
  let sender = users.find((value) => {
    return value.username === user.username;
  });
  let name = users.find((value) => {
    return value.username === trName;
  });
  // let rBalance = parseInt(name.balance);
  sender.balance = sender.balance - amount;
  name.balance = name.balance + amount;
  await updateUser(users, sender, amount, "transaction-out");
  await updateUser(users, name, amount, "transaction-in");
};
