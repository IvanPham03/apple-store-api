
const express = require('express');
const app = express();

// Định nghĩa các route và xử lý yêu cầu
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Khởi động server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});