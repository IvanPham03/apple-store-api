// import mongoose from "mongoose";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import user from "../models/user.model.js";

export async function initialUser() {
  try {
    const count = await user.estimatedDocumentCount();
    // const passwordAdmin = await bcrypt.hash('admin', 10)
    // const passwordModerate = await bcrypt.hash('moderate', 10)
    // const passwordUser = await bcrypt.hash('user', 10)
    if (count === 0) {
      await Promise.all([
        new user({
          name: "admin",
          email: "admin@gmail.com",
          phone: "01223456789",
          role: "admin",
          password: "admin",
        }).save(),
        new user({
          name: "moderate",
          email: "moderate@gmail.com",
          phone: "01223456799",
          role: "moderate",
          password: "moderate",
        }).save(),
        new user({
          name: "user",
          email: "user@gmail.com",
          phone: "01223456999",
          role: "user",
          password:"user",
        }).save(),
      ]);
      console.log("Added 'admin', 'moderate', and 'user' to collection");
    }
  } catch (error) {
    console.error("Error initializing users:", error);
  }
}
 