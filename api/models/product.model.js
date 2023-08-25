import mongoose from "mongoose";
import { connect } from "../config/db.config.js";

// select database
const db = connect.useDb("productDb");
const productSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    img: [
      {
        type: String
      }
    ],
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    discount: {
      type: Number,
      default: 0,
      min: 0, // Giới hạn tối thiểu
      max: 100
    },
    ram: {
      type: String,
      required: true
    },
    priceDiscounted: {
      type: Number,
      default: function() {
        // Tính toán giá sau giảm giá và trả về giá trị mặc định
        return this.price - this.discount / 100 * this.price;
      }
    },
    ratings: [
      {
        user: { type: String, required: true },
        rating: { type: Number, required: true }
      }
    ],
    storage: {
      type: String,
      required: true
    },
    color: [
      {
        colorName: { type: String, required: true },
        value: { type: String, required: true }
      }
    ],
    quantity: {
      total: {
        type: Number,
        default: 0
      },
      remain: {
        type: Number,
        default: 0
      }
    },
    detail: {
      screen: String,
      screentech: String,
      camera: String,
      processor: String,
      storage: String,
      battery: String,
      connectivity: String,
      operating: String,
      audio: String,
      sim: String,
      design: String,
      dimensions: String,
      weight: String,
      additional: String
    }
  },
  { timestamps: true }
);

const Product = db.model("product", productSchema);

export default Product;
