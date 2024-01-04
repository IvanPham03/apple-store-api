import mongoose from "mongoose";
import { sluggerPlugin } from "mongoose-slugger-plugin"; // tao slug cho url thay id
import { connect } from "../config/db.config.js";

// select database
const db = connect.useDb("productDb");

//base schema
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    isFeatured: { type: Boolean, default: false }, // marks product featured/ trend for show first
    category: { type: String, required: true }, // Loại sản phẩm: 'iPhone', 'Macbook', 'iPad', ...
    stock: { type: Number, default: 0 }, // discount %
    inventory: { type: Number, required: true, default: 0 },
    slug: { type: String, unique: true } // Generate slug from the name field
  },
  { timestamps: true, discriminatorKey: "category" } // polymorphism đễ xác định chi tiết product
);

// Tạo schema chi tiết cho iPhone //sub-schemas
const iPhoneSchema = new mongoose.Schema({
  yearintroduced: Number,
  color: [{ name: String, path: String}],
  capacity: [String],
  version: { storage: String, color: String},
  size: {
    width: String,
    height: String,
    hepth: String,
    weight: String
  },
  display: Array,
  resitant: Array,
  chip: Array,
  camera: Array,
  videoRecording: Array,
  trueDepthCamera: Array,
  faceID: String,
  applePay: Array,
  safety: Array,
  location: Array,
  videoCalling: Array,
  audioCalling: Array,
  audioPlayback: Array,
  videoPlayback: Array,
  siri: Array,
  external: Array,
  chargingAndExpansion: String,
  powerAndBattery: Array,
  magSafe: Array,
  sensors: Array,
  operatingSystem: String,
  accessibility: Array,
  simCard: Array
});

// Tạo schema chi tiết cho macbook
const macbookSchema = new mongoose.Schema({
  series: String,
  yearintroduced: Number,
  color: [String],
  capacity: [String],
  size: {
    width: String,
    height: String,
    hepth: String,
    weight: String
  },
  display: Array,
  resitant: Array,
  chip: Array,
  camera: Array,
  videoRecording: Array,
  trueDepthCamera: Array,
  faceID: String,
  applePay: Array,
  safety: Array,
  location: Array,
  videoCalling: Array,
  audioCalling: Array,
  audioPlayback: Array,
  videoPlayback: Array,
  siri: Array,
  external: Array,
  chargingAndExpansion: String,
  powerAndBattery: Array,
  magSafe: Array,
  sensors: Array,
  operatingSystem: String,
  accessibility: Array,
  simCard: Array
});

productSchema.index(
  { city: 1, slug: 1 },
  { name: "product_slug", unique: true }
);

// add the plugin
productSchema.plugin(sluggerPlugin, {
  // the property path which stores the slug value
  slugPath: "slug",
  // specify the properties which will be used for generating the slug
  generateFrom: ['name', 'version.storage', 'version.color'],
  // specify the max length for the slug
  maxLength: 30,
  // the unique index, see above
  index: "product_slug"
});

// Tạo model từ schema
const Product = db.model("product", productSchema);
//  single discriminator
const iphone = Product.discriminator("iphone", iPhoneSchema);
const macbook = Product.discriminator("macbook", macbookSchema);
export default Product;
