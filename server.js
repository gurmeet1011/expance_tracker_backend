import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import cors from 'cors';
app.use(cors());

import router from "./router/transaction-router.js";
import connectDb from "./utils/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(express.json());

app.use("/api/trans", router);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
