import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    console.log(URI);

    // No need for `useNewUrlParser` and `useUnifiedTopology` in newer versions
    await mongoose.connect(URI);
    console.log("Connection successful to DB");
  } catch (error) {
    console.error(error, "Database connection failed");
    process.exit(1); // Exiting with code 1 for failure
  }
};

export default connectDb;

