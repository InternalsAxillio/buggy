import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
dotenv.config();
import userRouter from "./routes/Users/users.js";
import DuneBuggeyRouter from "./routes/DuneBuggey/DuneBuggeyBooking.js";
import EveningSafariRouter from "./routes/EveningSafari/EveningSafariBooking.js";
import DesertSafariRouter from "./routes/DesertSafari/DesertSafariBooking.js";
import RequestRouter from "./routes/Request/Request.js";

app.use(cors());
app.use(express.json());

const connect = async () => {
  try {
    mongoose.connect(process.env.MongoConnURI);
  } catch (error) {
    console.log(error);
  }
};
app.listen(3001, async (req, res) => {
  connect();
  console.log("server on");
});
app.use("/api/Users", userRouter);
app.use("/api/DuneBuggey", DuneBuggeyRouter);
app.use("/api/EveningSafari", EveningSafariRouter);
app.use("/api/DesertSafari", DesertSafariRouter);
app.use("/api/MakeRequest", RequestRouter);
app.use("*", (req, res) => {
  res.status(404).json("the route you are looking for does not exist");
});
