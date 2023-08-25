import createHttpError from "http-errors";
import product from "../models/product.model.js";
import productServices from "../services/product.service.js";

const productService = new productServices();
export default class productControllers {
  // query data from database with cataegory
  async getProducts(req, res) {
    try {
      // query all product === category
      let products = await productService.getProducts(
        req.query.category
      );
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json("error controller fetching all product");
    }
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
  async getproductByModel(req, res) {
    try {
      let rs = await productService.getByModel(req.params.model);
      return res.json(rs).status(200);
    } catch (error) {
      console.log(error);
      throw new Error("error controller get product by id");
    }
  }
  // request iphone using id
  async getIphoneById(req, res) {
    try {
      let rs = await productService.getIphoneById(req.params.id);
      return res.json(rs).status(200);
    } catch (error) {
      console.log(error);
      throw new Error("error controller get product by id");
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
