import { Router } from "express";
import { depositController } from "../controllers/bank.js";

export const bankRouters = new Router();

bankRouters.post("/deposit", depositController);
