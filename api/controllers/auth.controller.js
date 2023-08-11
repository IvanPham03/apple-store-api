import authServices from "../services/auth.service.js";
import { validation } from "../config/validation.js";
import client from "../config/redis.config.js";

const authService = new authServices();
export default class authControllers {
  async signUp(req, res) {
    try {
      const { error } = validation.userValidationSignUp(req.body);
      if (error) {
        console.log(error);
        return res.status(500).json("data provided invalid");
      }
      return await authService.signUp(req, res);
    } catch (error) {
      throw new Error(error);
    }
  }
  async signIn(req, res) {
    console.log("request ", req.body);
    try {
      const { error } = validation.userValidationSignIn(req.body);
      // check paramaters
      if (error) {
        return res.status(500).json("data provided invalid");
      }
      const getToken = await authService.signIn(req, res);
      // not correct passwort return
      if (!getToken) {
        return res.status(401).json("UnAuthorization");
      }
      const [{ accessToken, refreshToken, userId }] = getToken;
      try {
        await client.set(userId.toString(), refreshToken);
        await client.expire(userId.toString(), 60 * 60 * 24 * 30);
      } catch (error) {
        throw new Error(error);
      }
      return res
        .cookie(
          "access-token",
          accessToken,
        )
        .status(200)
        .json(accessToken);
      // }
    } catch (error) {
      throw new Error(error);
    }
  }
}
