import { deposit } from "../services/bank.js";
export const depositController = async (req, res) => {
  const { amount } = req.body;
  const response = await deposit(amount);
  if (response.ok) {
    window.alert("Success!");
  } else {
    throw new Error("----");
  }
};
