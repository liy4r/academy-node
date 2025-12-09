// Шинэ данс үүсгэх
import {
  createAccountService,
  deleteAccountService,
  getAllAccountsService,
  updateAccountService,
  getAccountByNumberService,
  getTransactionsService,
} from "../services/bank.js";

export const createAccount = async (req, res) => {
  const { number, userid, balance } = req.body;
  const bank = await createAccountService(number, userid, balance);

  res.json({ bank });
};

// Дансны мэдээллийг шинэчлэх
export const updateAccount = async (req, res) => {
  const { number, balance } = req.body;
  const { userid } = req.params;
  const bank = await updateAccountService(number, balance, userid);
  res.json({ bank });
};

// Данс устгах
export const deleteAccount = async (req, res) => {
  const { number } = req.body;
  const bank = await deleteAccountService(number);
  res.json({ bank });
};

// Бүх дансыг авах
export const getAllAccounts = async (req, res) => {
  const { userid } = req.body;
  const accounts = await getAllAccountsService(userid);

  res.json({ accounts });
};

// данс авах
export const getAccountByNumber = async (req, res) => {
  const { number } = req.body;
  const account = await getAccountByNumberService(number);

  res.json({ account });
};

// Шинэ гүйлгээ үүсгэх

export const createTransaction = async (req, res) => {
  const { user_id, amount, transaction_type } = req.body;
  const transaction = await createTransaction(
    user_id,
    amount,
    transaction_type
  );
  res.json(transaction);
};

// Бүх гүйлгээ авах

export const getTransactions = async (req, res) => {
  const { id } = req.query;
  const transactions = await getTransactionsService(id);
  res.json(transactions);
};

// Хэрэглэгчээр гүйлгээ авах

export const getTransactionsByUserId = async (req, res) => {
  const { user_id } = req.query;
  const transactions = await getTransactionsByUserId(user_id);
  res.json(transactions);
};

export const getTransactionsByAccountNumber = async (req, res) => {
  const { account_number } = req.query;
  const transactions = await getTransactionsByAccountNumber(account_number);
  res.json(transactions);
};

export const deleteTransaction = async (req, res) => {};

export const updateTransaction = async (req, res) => {};
