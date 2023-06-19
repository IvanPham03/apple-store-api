import mongoose from "mongoose";
import { connect } from "../config/connect.js";


// select database
const db = connect.useDb('productline');

const productSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  category:{
    type: String,
    // required: true,
  },
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
  storage: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  amount:{
    type: Number, 
    required: true
  }
  
}, {timestamnps: true});

const Product = db.model("product", productSchema);

export default Product;
