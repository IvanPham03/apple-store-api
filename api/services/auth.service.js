import { Error } from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export default class authServices {
  async signUp(req, res) {
    try {
      const { email, phone } = req.body;
      var user = new User();
      // Using await with User.findOne() waits for the promise to be resolved and receives the actual user document or null.
      // Not using await with User.findOne() returns a query object, not the actual user document.
      if (email) {
        user = await User.findOne({ email });
      } else {
        user = await User.findOne({ phone });
      }
      if (user) {
        return res.status(500).json("User already register");
      }
      const newUser = User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        role: req.body.role,
        password: req.body.password
      });
      await newUser.save(req.body);
      return res
        .status(200)
        .send({ message: "resgister new user successfully!" });
    } catch (error) {
      throw new Error(error);
    }
  }
  async signIn(req, res) {
    try {
      const { email, phone, password } = req.body;
      var user = new User();
      // Using await with User.findOne() waits for the promise to be resolved and receives the actual user document or null.
      // Not using await with User.findOne() returns a query object, not the actual user document.
      if (email) {
        user = await User.findOne({ email });
      } else {
        user = await User.findOne({ phone });
      }
      if (!user) {
        return res.status(500).json("User not found!");
      }
      // Check if the provided password matches the user's password
      return await user.isCheckPassword(password);
    } catch (error) {
      throw new Error(error);
    }
  }
}
