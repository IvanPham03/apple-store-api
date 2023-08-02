// Các routes giúp định tuyến các yêu cầu từ phía người dùng đến các hàm xử 
// lý tương ứng trong controller. Khi một yêu cầu HTTP được gửi đến server,
//  routes sẽ kiểm tra đường dẫn của yêu cầu và gọi hàm xử lý tương ứng trong controller để thực
//  hiện các tác vụ cần thiết. Điều này giúp tách biệt việc định tuyến và xử lý logic kinh doanh.

import express from "express";
import productControllers from '../controllers/product.controller.js';



const routeProduct = express.Router();
const product = new productControllers();

routeProduct.get('/', product.getAllproduct);
routeProduct.get('/:id', product.getproductById);
// router.post('/:id', product.addIphone);
// router.put('/:id', product.updateIphone);
routeProduct.post('/insert-iphone-test', product.insertTest)
export default routeProduct