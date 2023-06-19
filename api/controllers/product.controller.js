import product from "../models/product.model.js";
import productServices from "../services/product.service.js";

const productService = new productServices();
export default class productControllers {
  // load data
  async getAllproduct(req, res, next) {
    try {
      let products = await productService.getAll();
      return res.json(products).status(200);
    } catch (error) {
      console.log(error);
      res.status(500).json("error controller fetching all product");
    }
  }

  // insert product
  // async addproduct(req, res) {
  //   try {
  //     let rs = await productService.addproduct();
  //     return res.json(rs).status(200);
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json("error controler fetching product by id");
  //   }
  // }
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

  //
  async getproductById(req, res) {
    try {
      let rs = await productService.getByID(req.params.id);
      return res.json(rs).status(200);
    } catch (error) {
      console.log(error);
      throw new Error("error controller get product by id");
    }
  }
}
