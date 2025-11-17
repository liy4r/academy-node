import express from "express";
import { checkBalanceController } from "../controllers/bank.js";

export const bankRouter = new express.Router();

bankRouter.get("/check-balance/:id", checkBalanceController);

bankRouter.get("/deposit", (req, res) => {
  res.send(5000);
});
bankRouter.get("/withdraw", (req, res) => {
  res.send(5000);
});
bankRouter.get("/transaction/:id", (req, res) => {
  res.send(5000);
});
