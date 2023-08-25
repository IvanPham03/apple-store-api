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
      if(err){
        return next(createHttpError.Unauthorized)
      }
      req.payload = payload //Attach payload to the request object
      next()
    }
  )
};
const verifyRefreshToken = (req, res, next) =>{
  // console.log('header', req.headers['authorization']);
  if(!req.headers['authorization']){
    return next(createHttpError.Unauthorized)
  }
  const headerRefreshToken = req.headers['authorization'].split(' ')
  const token = headerRefreshToken[1]
  // console.log('token', token);
  jwt.verify(
    token, process.env.KEY_REFRESH_TOKEN, (err, payload)=>{
      if(err)
      {
        return next(createHttpError.Unauthorized)
      }
      req.payload = payload
      next()
    }
  )
}
const authJWT = {
    verifyToken,
    verifyRefreshToken, 
}


export default authJWT 