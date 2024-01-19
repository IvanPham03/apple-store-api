import jwt from "jsonwebtoken";
import createHttpError from "http-errors";
const verifyToken = (req, res, next) => {
  // check exist access token
  if(!req.cookies['access-token']){
    console.log(req.cookies['access-token']);
    return res.status(401).send(createHttpError.Unauthorized)
  }
  const token = req.cookies['access-token']
  jwt.verify(
    token, process.env.keyAccess, (err, payload) =>{
      if(err){
        return res.status(401).send(createHttpError.Unauthorized)
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
    token, process.env.keyRefresh, (err, payload)=>{
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