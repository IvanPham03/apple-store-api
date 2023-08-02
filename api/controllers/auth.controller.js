import user from "../models/user.model.js";
import authServices from "../services/auth.service.js";
import { validation } from "../config/validation.js";
import { Error } from "mongoose";

const authService = new authServices();
export default class authControllers {
  async signUp(req, res) {
    try {
      const { error } = validation.userValidationSignUp(req.body);
      if (error) {
        console.log(error)
        return res.status(500).json("data provided invalid");
      }
      return await authService.signUp(req, res);
    } catch (error) {
    throw new Error(error)
    }
  }
  async signIn(req, res) {
    try {
      const { error } = validation.userValidationSignIn(req.body);
      if (error) {
        return res.status(500).json("data provided invalid");
      }
      const isValid = await authService.signIn(req, res);
      if (!isValid) {
        return res.status(500).json("wrong password!");
      }
      return res.status(200).json("login success");
    } catch (error) {
      throw new Error(error);
    }
  }
}
