import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { connect } from "../config/db.config.js";

// select database
const db = connect.useDb("userDb"); 

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true,
      lowercase: true,
      unique: true,
      default: null
    },
    phone: {
      type: String,
      default: ""
    },
    role: {
      type: String,
      require: true,
      default: "user"
    },
    active: {
      type: Boolean,
      require: true,
      default: true
    }
  },
  { timestamps: true }
);

// hash password user before save
// userSchema.pre("save", async function(next) {
//   try {
//     // console.log(this.password);
//     this.password = await bcrypt.hash(this.password, 10);
//     // console.log(this.password);
//     next();
//   } catch (error) {
//     throw new Error(error);
//   }
// });

// // check password for login
// userSchema.method(`isCheckPassword`, async function(password) {
//   try {
//     return await bcrypt.compare(password, this.password);
//   } catch (error) {
//     throw new Error(error);
//   }
// });

// The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model Tank is for the tanks collection in the database.
const User = db.model("user", userSchema);
export default User;
