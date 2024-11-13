import express from "express";
import {getTransaction,addTransaction} from "../controllers/transcontrollers.js";

const router = express.Router();

router
  .route("/")
  .get(getTransaction)
  .post(addTransaction);

export default router;
