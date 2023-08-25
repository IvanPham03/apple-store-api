import verifySignUp from "./verifySignUp.js";
import authJWT from "./authJWT.js";
import product from "./product.middleware.js";

const middleware = {};
middleware.verifySignUp = verifySignUp;
middleware.authJWT = authJWT;
middleware.checkRequestCategory = product.checkRequestCategory
// middleware.product = product

export default middleware;
