import express from "express";
import authControllers from "../controllers/auth.controller.js";
import userControllers from '../controllers/user.controller.js' 
import middleware from "../middlewares/index.js";
const authUser = express.Router();

const auth = new authControllers();
const user = new userControllers()
authUser.post(
  `/signup`,
  [middleware.verifySignUp.checkDuplicateEmailOrNumberphone],
  auth.signUp
);
authUser.post(`/signin`, auth.signIn);
authUser.get(`/user`, [middleware.authJWT.verifyToken], user.getUser);
authUser.post(`/logout`, [middleware.authJWT.verifyRefreshToken], auth.logOut)

export default authUser;
