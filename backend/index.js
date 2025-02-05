import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mainRouter from "./routes/index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", mainRouter);

app.listen(3000, () => {
  console.log(`app is running on http//:localhost:${3000}`);
});

const connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected");
  } catch (err) {
    console.log(err);
  }
};

connectdb();

app.get("/", (req, res) => {
  res.json(`app is running on http//:localhost:${3000}`);
});
