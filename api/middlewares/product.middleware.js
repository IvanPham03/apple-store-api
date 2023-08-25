
import createHttpError from "http-errors";

const checkRequestCatagory = (req, res, next) => {
  if (!req.body("category")) {
    return next(createHttpError.BadRequest);
  }
  const catagory = req.body("catagory");
  req.catagory = catagory;
  next();
};

const product = {
  checkRequestCatagory
};

export default product;
