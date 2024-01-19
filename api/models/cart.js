import { Schema } from "mongoose";

const cart =  new Schema(
{
    productId: Number,
    quantity: Number,
    name: String,
    price: Number
}
)

export default cart