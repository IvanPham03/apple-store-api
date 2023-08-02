import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("connected to db using uri");
  })
  .catch((error) => {
    console.log(error);
    process.exit();
  });

const connect = mongoose.connection;
export { connect };
