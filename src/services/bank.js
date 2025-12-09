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

export const updateAccountService = async (number, balance, userid) => {
  const response = await db.query(
    `UPDATE account SET number=${number}, balance=${balance} WHERE userid=${userid}`
  );
  return response.rows[0];
};
export const deleteAccountService = async (number) => {
  const response = await db.query(
    `DELETE FROM account WHERE number=${number} RETURNING *`
  );
  return response.rows[0];
};

export const getAccountByNumberService = async (number) => {
  const response = await db.query(
    `SELECT * FROM account WHERE number=${number}`
  );
  return response.rows[0];
};

export const getTransactionsService = async () => {
  const response = await db.query(`SELECT * FROM transactions WHERE id=${id}`);
  return response.rows[0];
};
