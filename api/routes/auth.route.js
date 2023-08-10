import express from "express";
import authControllers from "../controllers/auth.controller.js";
import middleware from "../middlewares/index.js";
const authUser = express.Router();

const auth = new authControllers();

authUser.post(
  `/auth/signup`,
  [middleware.verifySignup.checkDuplicateEmailOrNumberphone],
  auth.signUp
);
authUser.post(`/signin`, auth.signIn);
authUser.get(`/test`, [middleware.authJWT.verifyToken]);

export default authUser;
