import db from "../models/index.js";
import { secretKey } from "../config/auth.config.js";
const user = db.user;

const checkDuplicateEmailOrNumberphone =                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        async (req, res, next) => {
  // console.log(req.body.email)
  // console.log(req.body.phone)
  try {
    // email
    const emailUser = await user.findOne({ email: req.body.email });
    if (emailUser) {
      return res.status(409).send("Failed! Email is already in use!");
    }

    next(); // Call next middleware if no duplicate email is found
  } catch (err) {
    console.error("Error findin gemail:", err);
    return res.status(500).json({ message: "An error occurred while processing your request." });
  }
};

const isToken = (req, res, next) => {
  let cookies = req.cookies
  console.log(cookies);
  // if (!token) {
  //   return res.status(403).send({ message: "no token provided!" });
  // }
  // //jwt.verify(token, secretOrPublicKey, [options, callback])
  // jwt.verify(token, secretKey, (err, decoded) => {
  //   if (err) {
  //     return res.status(401).send({
  //       message: "Unauthorized!"
  //     });
  //   }
  //   req.userId = decoded.id;
    next();
  // });
};

const verifySignUp = {
  checkDuplicateEmailOrNumberphone
};

export default verifySignUp