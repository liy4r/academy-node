import fs from "node:fs/promises";
import path from "path";
export const deposit = async (req, res) => {
  const dataPath = path.join(process.cwd(), "data/users.json");

  const { email, password } = req.body;

  const userRawData = await fs.readFile(dataPath, "utf-8");

  const userData = JSON.parse(userRawData);

  const user = userData.find((data) => {
    return data.firstName === email && password === password;
  });
  user.balance = user.balance + amount;
  if (response.ok) {
    window.alert("Success!");
  } else {
    throw new Error("Amjiltgui");
  }
};
