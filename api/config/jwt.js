import jwt from "jsonwebtoken";

const KEY_ACCESS_TOKEN = process.env.keyAccess;
const KEY_REFRESH_TOKEN = process.env.keyAccess // key này gen từ file generatekey.js (config)
const signAccessToken = async (userId) => {
  return new Promise((resovle, reject) => {
    const payload = {
      userId,
    };
    const secret = KEY_ACCESS_TOKEN;
    const options = {
      expiresIn: "60m"
    };
    jwt.sign(payload, secret, options, (err, token) => {
      if (token) resovle(token);
      reject(err);
    });
  });
};

const signRefreshToken = async (userId) => {
  return new Promise((resovle, reject) => {
    const payload = {
      userId,
    };
    const secret = KEY_REFRESH_TOKEN;
    const options = {
      expiresIn: "30d"
    };
    jwt.sign(payload, secret, options, (err, token) => {
      if (token) resovle(token);
      reject(err);
    });
  });
};

const jwt_service = {
  signAccessToken,
  signRefreshToken
};

export default jwt_service;
