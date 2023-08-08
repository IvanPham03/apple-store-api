import verifySignup from './verifySignUp.js'
import authJWT from './authJWT.js'
// import product from './product.middleware.js'

const middleware = {}
middleware.verifySignup = verifySignup
middleware.authJWT = authJWT
// middleware.product = product

export default middleware