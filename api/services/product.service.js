// Sử dụng service giúp giảm tải công việc của controller.
// Controller chỉ cần gọi các phương thức của service để thực hiện các nhiệm vụ cụ thểƒ

import createHttpError from "http-errors";

import product from "../models/product.model.js";
import iphoneData from "../config/iphoneData.js";

export default class productServices {
  async getProducts(category) {
    try {
      return await product.find({ category: category });
    } catch (error) {
      console.log(error);
      throw new Error("error services from fetch products");
    }
  }
  async getIphones() {
    try {
      const products = await product.find({ category: "iphone" });
      console.log(products);
      return products;
    } catch (error) {
      console.log(error);
      throw new Error("error services from fetch products");
    }
  }
  // category
  async getByModel(model) {
    try {
      const rs = await product.find({model: model});
      if (!rs) {
        return "iphone not found";
      }
      return rs;
    } catch (error) {
      console.log(error);
      throw new Error("error services from fetch product by category");
    }
  }
  // id
  async getIphoneById(id) {
    try {
      const rs = await product.findOne({_id: id});
      if (!rs) {
        return "iphone not found";
      }
      return rs;
    } catch (error) {
      console.log(error);
      throw new Error("error services from fetch product by id");
    }
  }
  async insertTest() {
    try {
      const rs = await product.insertMany(iphoneData);
      return "success";
    } catch (error) {
      console.log(error);
      throw new Error("error from insert multiple data products");
    }
  }
  // filter
  async getFilterProducts(screenSize, storage, category, price, sort) {
    try {
      const query = {}; // query stament
      if (screenSize) {
        query["detail.screen"] = { $in: screenSize };
      }
      if (storage) {
        query.storage = { $in: storage };
      }
      if (category) {
        query.category = { $in: category };
      }
      if (price) {
        const temp = price[0].split("-"); // 0-10
        query.priceDiscounted = {
          $gte: parseInt(temp[0] * 1000000),
          $lte: parseInt(temp[1] * 1000000)
        };
      }
      if (sort) {
        console.log(sort[0]);
        if (sort[0]=== "Giá giảm dần") {
          return product.find(query).sort({ priceDiscounted: -1 }); // -1 sort des
        } else if (sort[0] === "Giá tăng dần") {
          return product.find(query).sort({ priceDiscounted: 1 }); // 1 sort asc
        }
      }
      return product.find(query).sort({ rate: 1 });
    } catch (error) {
      // return createHttpError[500]
      console.log(error);
    }
  }
}
