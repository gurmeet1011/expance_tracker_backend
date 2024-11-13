import mongoose from "mongoose";

const transSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "Please select a type"],
  },
  category: {
    type: String,
    required: [true, "Please select a category"],
  },
  amount: {
    type: Number,
    required: [true, "Please add a valid amount"],
  },
  date: {
    type: Date,
    required: [true, "Please add an appropriate date"],
  },
});

const Transaction = mongoose.model("Transaction", transSchema);
  
export default Transaction;
