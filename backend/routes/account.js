import { authMiddleware } from "./../middleware.js";
import { Router } from "express";
import { Account } from "./../db.js";
import mongoose from "mongoose";

const router = Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });

  if (!account) {
    return res.status(404).json({ msg: "Account not found" });
  }

  res.json({
    balance: account.balance,
  });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { amount, to } = req.body;

    const account = await Account.findOne({ userId: req.userId }).session(
      session
    );

    if (!account || account.balance < amount) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        msg: "Insufficient balance or account not found",
      });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);
    if (!toAccount) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        msg: "Receiver account not found",
      });
    }

    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    ).session(session);

    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    // Corrected function call
    await session.commitTransaction();
    session.endSession();

    res.json({
      message: "Transfer successful",
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ msg: "Something went wrong", error });
  }
});

export default router;
