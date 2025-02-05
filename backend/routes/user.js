import { Router } from "express";
import { User, Account } from "./../db.js";
import zod from "zod";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./../config.js";

const router = Router();

router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

const signupbody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});
const updatebody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/", async (req, res) => {
  const success = updatebody.safeParse(req.body);
  if (!success)
    return res.status(411).json({
      message: "Incorrect Inputs",
    });

  await User.updateOne({ _id: req.userId }, { $set: req.body });

  res.json({ message: "User updated successfully" });
});

router.post("/signup", async (req, res) => {
  const success = signupbody.safeParse(req.body);
  if (!success)
    return res.status(411).json({
      message: "Incorrect Inputs",
    });

  const existinguser = await User.findOne({ username: req.body.username });

  if (existinguser)
    return res.status(411).json({
      message: "Email already taken",
    });

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const userId = user._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign({ userId }, JWT_SECRET);

  res.json({ msg: "User created", token: token });
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
  });

  if (!user) {
    return res.status(404).json("User not found!");
  }

  if (user) {
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(401).json("Wrong credentials!");
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.status(200).json({
      token: token,
    });
    return;
  }
});

export default router;
