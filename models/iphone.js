import mongoose from "mongoose";
import { connect } from "../connect.js";

const db = connect.useDb('products');

const phoneSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
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
  display: {
    size: {
      type: Number,
      required: true,
    },
    resolution: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  storage: {
    type: Number,
    required: true,
  },
  ram: {
    type: Number,
    required: true,
  },
  battery: {
    capacity: {
      type: Number,
      required: true,
    },
    removable: {
      type: Boolean,
      default: false,
    },
  },
  color: {
    type: String,
    required: true,
  },
  camera: {
    rear: {
      type: String,
      required: true,
    },
    front: {
      type: String,
      required: true,
    },
  },
  connectivity: {
    wifi: {
      type: Boolean,
      default: true,
    },
    bluetooth: {
      type: Boolean,
      default: true,
    },
    nfc: {
      type: Boolean,
      default: false,
    },
  },
  amount:{
    type: Number, 
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Phone = db.model("iphone", phoneSchema);

export default Phone;
