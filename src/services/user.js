import path from "path";
import fs from "node:fs/promises";

export const getUsers = async () => {
  const dataPath = path.join(process.cwd(), "data/users.json");

  console.log(dataPath);
  const { email, password } = req.body;

  const userRawData = await fs.readFile(dataPath, "utf-8");

  const userData = JSON.parse(userRawData);
};
