import { BankService } from "../services/bank.js";

export const checkBalanceController = async (req, res) => {
  const { id } = req.params;

  try {
    const bank = new BankService();

    res.send(bank.checkBalance());
  } catch (e) {
    res.status(500).send(e.message);
  }
};
