// Sử dụng service giúp giảm tải công việc của controller.
// Controller chỉ cần gọi các phương thức của service để thực hiện các nhiệm vụ cụ thểƒ

import product from "../models/product.model.js";

export default class productServices {
  async getAll() {
    try {
      const products = await product.find();
      return products;
    } catch (error) {
      console.log(error);
      throw new Error("error services from fetch products");
    }
  }
  async getByID(id) {
    try {
      const rs = await product.findById(id);
      if (!rs) {
        throw new Error("iphone not found");
      }
      return rs;
    } catch (error) {
      console.log(error)
      throw new Error("error services from fetch product by id");
    }
  }
  async insertTest() {
    const iphoneData = [
      {
        model: "iphone-14",
        categogy: "iphone",
        img: "iphone14.jpg",
        name: "iPhone 14",
        price: 19990000,
        rate: 0,
        discount: 0,
        storage: 128,
        color: "Space Gray",
        amount: 10,
      },
      {
        model: "iphone-14-pro",
        categogy: "iphone",
        img: "iphone14pro.jpg",
        name: "iPhone 14 Pro",
        price: 29990000,
        rate: 0,
        discount: 0,
        storage: 256,
        color: "Graphite",
        amount: 5,
      },
      {
        model: "iphone-14-pro-max",
        categogy: "iphone",
        img: "iphone14promax.jpg",
        name: "iPhone 14 Pro Max",
        price: 34990000,
        rate: 0,
        discount: 0,
        storage: 512,
        color: "Silver",
        amount: 3,
      },
      {
        model: "iphone-14-plus",
        categogy: "iphone",
        img: "iphone14plus.jpg",
        name: "iPhone 14 Plus",
        price: 24990000,
        rate: 0,
        discount: 0,
        storage: 256,
        color: "Midnight Green",
        amount: 7,
      },

    ];
    try {
      const rs = await product.insertMany(iphoneData);
      return "success";
    } catch (error) {
      console.log(error); 
      throw new Error("error from insert multiple data products");
    }
  }
}
