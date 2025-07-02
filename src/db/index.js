import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionIntance = await mongoose.connect(
      `${process.env.MONOGDB_URL}/${DB_NAME}`,
    );
    console.log(
      `\n MongoDB connected ! DB Host: ${connectionIntance.connection.host}`,
    );
  } catch (error) {
    console.log("MONGODB connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
