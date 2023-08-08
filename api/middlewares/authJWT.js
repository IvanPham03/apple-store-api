import jwt from "jsonwebtoken";
import createHttpError from "http-errors";
const verifyToken = (req, res, next) => {
  if(!req.headers["authorization"]){
    return next(createHttpError.Unauthorized)
  }
  const headerToken = req.headers['authorization'].split(' ')
  const token = headerToken[1]
  jwt.verify(
    token, process.env.KEY_ACCESS_TOKEN, (err, payload) =>{
      console.log(payload)
      if(err){
        return next(createHttpError.Unauthorized)
      }
      req.payload = payload
      next()
    }
  )
  
};
const authJWT = {
    verifyToken,
}


export default authJWT 