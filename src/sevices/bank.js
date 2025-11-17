import data from "../../data/users.json";
import { id } from "../controllers/bank.js";
export class BankService {
  async checkBalance() {
    const users = await data.then((value) => {
      return JSON.parse(value);
    });
    const user = users.find((value) => {
      return value.id == id;
    });
    res.send(user.balance);
  }
}
