import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// const url = process.env.URL!;
const url = "mongodb+srv://somtochukwue98:somtochukwue98@somto.5h4douj.mongodb.net/?retryWrites=true&w=majority"

const dbConfig = async () => {
  await mongoose.connect(url).then(() => {
    console.log(`${mongoose.connection.host} is connected`);
  });
};

export default dbConfig;
