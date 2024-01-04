import createHttpError from "http-errors";
import productServices from "../services/product.service.js";
const productService = new productServices();
export default class productControllers {
  // query data from database with cataegory
  async getProducts(req, res) {
    try {
      // query all product === category
      let products = await productService.getProducts(req.query.category);
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json("error controller fetching all product");
    }
  }

  // get list iphone
  async getIphones(req, res) {
    try {
      return await productService.getIphones();
    } catch (error) {
      console.log(error);
      res.status(500).json("error controller fetching all product");
    }
  }
  async getByCategory(req, res) {
    return await res
      .status(200)
      .json(await productService.getByCategory(req.query.category));
  }
  //insert for test with multiple
  async insertTest(req, res) {
    try {
      let rs = await productService.insertTest();
      return res.json(rs).status(200);
    } catch (error) {
      console.log(error);
      res.status(500).json("error controller inserting multiple product");
    }
  }

  // request category ex:: iphone => all iphone
  async getProductsByCategory(req, res) {
    try {
      if (!req.params.key) {
        return createHttpError.BadRequest();
      }
      const rs = await productService.getByCategory(req.params.key);
      if (rs) {
        return res.status(200).json(rs);
      }
      return createHttpError.NotFound();
    } catch (error) {
      console.log(error);
      return createHttpError.InternalServerError();
    }
  }
  // request iphone using slug
  async getIphoneBySlug(req, res) {
    console.log(req.query["slug"]);
    try {
      if (!req.query.slug) {
        return createHttpError.BadRequest();
      }
      const rs = await productService.getIphoneBySlug(req.query["slug"]);
      if (rs) {
        return res.status(200).json(rs);
      }
      return createHttpError.NotFound();
    } catch (error) {
      console.log(error);
      return createHttpError.InternalServerError();
    }
  }
  // filter
  async getFilterProducts(req, res) {
    try {
      const { screenSize, storage, category, price, sort } = req.query;
      const products = await productService.getFilterProducts(
        screenSize,
        storage,
        category,
        price,
        sort
      );
      return res.status(200).json(products);
    } catch (error) {
      return createHttpError[500];
    }
  }
}
