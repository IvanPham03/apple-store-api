// Các routes giúp định tuyến các yêu cầu từ phía người dùng đến các hàm xử 
// lý tương ứng trong controller. Khi một yêu cầu HTTP được gửi đến server,
//  routes sẽ kiểm tra đường dẫn của yêu cầu và gọi hàm xử lý tương ứng trong controller để thực
//  hiện các tác vụ cần thiết. Điều này giúp tách biệt việc định tuyến và xử lý logic kinh doanh.

import express from "express";
import productControllers from '../controllers/product.controller.js';
import middleware from "../middlewares/index.js";

 
const routeProduct = express.Router();
const product = new productControllers();

routeProduct.get('/', product.getProducts);
routeProduct.get('/filter-product/', product.getFilterProducts)
routeProduct.post('/insert-iphone-test', product.insertTest)
routeProduct.get('/:model', product.getproductByModel);
routeProduct.get('/iphone/:id', product.getIphoneById);
export default routeProduct 