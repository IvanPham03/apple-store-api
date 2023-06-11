// Các routes giúp định tuyến các yêu cầu từ phía người dùng đến các hàm xử 
// lý tương ứng trong controller. Khi một yêu cầu HTTP được gửi đến server,
//  routes sẽ kiểm tra đường dẫn của yêu cầu và gọi hàm xử lý tương ứng trong controller để thực
//  hiện các tác vụ cần thiết. Điều này giúp tách biệt việc định tuyến và xử lý logic kinh doanh.

import express from "express";
import iphoneControllers from '../controllers/iphone.js';



const router = express.Router();
const iphone = new iphoneControllers();

router.get('/', iphone.getAllIphone);
router.get('/:id', iphone.getIphoneById);
// router.post('/:id', iphone.addIphone);
// router.put('/:id', iphone.updateIphone);
router.post('/insert-iphone-test', iphone.insertTest)
export default router