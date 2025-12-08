import { db } from "../db.js";
export const createAccountService = async (number, userid, balance) => {
  const response = await db.query(
    `INSERT INTO account (number, userid, balance) VALUES ($1, $2, $3) RETURNING *`,
    [number, userid, balance]
  );
  return response.rows[0];
};
export const getAllAccountsService = async (userid) => {
  const response = await db.query(
    `SELECT * FROM account WHERE userid=${userid}`
  );
  return response.rows[0];
};
