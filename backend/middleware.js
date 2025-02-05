import { JWT_SECRET } from "./config.js";
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authheader = req.headers.authorization;
  if (!authheader || !authheader.startsWith("Bearer ")) {
    return res.status(403).json({ msg: "Invalid authorization or missing" });
  }
  const token = authheader.split(" ")[1];
  try {
    const checktoken = jwt.verify(token, JWT_SECRET);
    if (checktoken.userId) {
      req.userId = checktoken.userId;
      next();
    } else {
      return res.status(403).json({ msg: "User Id not found" });
    }
  } catch (err) {
    return res.status(403).json({ msg: "err" });
    console.log(err);
  }
};
