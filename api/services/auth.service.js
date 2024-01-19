import { Error } from "mongoose";
import User from "../models/user.model.js";
import jwt_service from "../config/jwt.js";
import client from "../config/redis.config.js";
import createHttpError from "http-errors";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import auth from "../config/firebase/auth.js";
export default class authServices {
  async signUp(req, res) {
    try {
      const { email, password, name, phone } = req.body;

      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        // tạo user mới
        if (response.user?.uid) {
          console.log(response.user?.uid);
          try {
            const newUser = User({
              _id: response.user?.uid,
              name: name,
              email: email,
            });
            await newUser.save();
            console.log("abc");
            return res.status(200).send("resgister new user successfully!");
          } catch (error) {
            console.log("errrr" + error);
            return res
              .status(500)
              .send("createHttpError.InternalServerError()");
          }
        }
        return res.status(404).send(createHttpError.BadRequest()) 
      } catch (error) {
        // lỗi này do đã tồn tài email
        if (error.code === "auth/email-already-in-use") {
          return res
            .status(409)
            .send(
              createHttpError.Conflict(
                `The email address ${email} is already in use.`
              )
            );
        }
        return res.status(500).send("createHttpError.InternalServerError()");
      }
    } catch (error) {
      console.log("error = " + error);
      return res.status(500).send("createHttpError.InternalServerError()");
    }
  }
  async signIn( email, password) {
    try {
    
      var user = new User();

      // Using await with User.findOne() waits for the promise to be resolved and receives the actual user document or null.
      // Not using await with user.findOne() returns a query object, not the actual user document.
      if (email) {
        user = await User.findOne({ email });
      } 
      if (!user) {
        return;
      }
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if(response.user?.uid){
          const accessToken = await jwt_service.signAccessToken(response.user?.uid);
          const refreshToken = await jwt_service.signRefreshToken(response.user?.uid);
          return [
            {
              accessToken: accessToken,
              refreshToken: refreshToken,
              userId: response.user?.uid,
            },
          ];
        }
      } catch (error) {
        console.error("login signInWithEmailAndPassword failed:::" + error);
        return;
      }
      return;
      
    } catch (error) {
      throw new Error(error);
    }
  }
}
