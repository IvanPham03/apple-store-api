import authServices from "../services/auth.service.js";
import { validation } from "../config/validation.js";
import client from "../config/redis.config.js";
import createHttpError from "http-errors";

const authService = new authServices();
export default class authControllers {
  async test(req, res) {
    console.log(req.cookies['access-tokean']);
    return res.send("hello")
  }
  async signUp(req, res) {
    try {
      //check lỗi đúng định dạng schema
      const { error } = validation.userValidationSignUp(req.body);

      if (error) {
        console.log(error);
        return res.status(500).json("data provided invalid");
      }
    return await authService.signUp(req, res);
    } catch (error) {
      return res.status(500).send(createHttpError.InternalServerError())
    }
  }
  async signIn(req, res) {
    console.log("request ", req.body);
    try {
      // check đâu vào 
      const { error } = validation.userValidationSignIn(req.body);
      // check paramaters
      if (error) {
        return res.status(404).json("data provided invalid");
      }
      const { email, password } = req.body;
      const getToken = await authService.signIn( email, password);
      // not correct passwort return
      if (!getToken) {
        return res.status(401).json("UnAuthorization");
      }
      const [{ accessToken, refreshToken, userId }] = getToken;
      try {
        // luu refresh token vao redis de doi chieu khi nguoi dung refresh token de cap lai access token moi
        const set1 = await client.set(userId.toString(), refreshToken);
        const set2 = await client.expire(userId.toString(), 60 * 60 * 24 * 30);
        console.log('client success', set1)
        console.log('client success', set2)
      } catch (error) {
        throw new Error(error);
      }
      // set thẳng vào cookie
      return res
        .cookie("access-token", accessToken)
        .cookie("refresh-token", refreshToken)
        .status(200)
        .send(accessToken);
    } catch (error) {
      throw new Error(error);
    }
  }
  async logOut(req, res) { 
    try {
      const userId = req.payload.userId
      await client.DEL(userId)
      return res.clearCookie('access-token').clearCookie('refresh-token').status(200).json('Logout success!')
    } catch (error) {
      return res.status(500).send(createHttpError.InternalServerError())
    }

  }
}
