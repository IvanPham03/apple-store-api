1-File server.js: Đây là file chính để khởi tạo server và cấu hình các middleware, routes và kết nối cơ sở dữ liệu.

2-Thư mục "routes": Chứa các tệp tin route để xử lý các yêu cầu từ client. Mỗi route
 có thể có nhiều phương thức như GET, POST, PUT, DELETE để xử lý các thao tác tương ứng với dữ liệu.

3-Thư mục "controllers": Chứa các tệp tin controller để xử lý logic nghiệp vụ của từng route. 
Controllers có nhiệm vụ xử lý yêu cầu từ client, gọi tới các service hoặc model để thao tác 
dữ liệu và trả về kết quả cho client.

4-Thư mục "models": Chứa các tệp tin model để định nghĩa cấu trúc dữ liệu và các phương thức 
để thao tác với cơ sở dữ liệu. Các model thường tương ứng với các bảng hoặc collection trong cơ sở dữ liệu.

5-Thư mục "services": Chứa các tệp tin service để thực hiện các tác vụ xử 
lý dữ liệu phức tạp, ví dụ như tạo, đọc, cập nhật, xóa dữ liệu trong cơ sở dữ liệu,
xử lý logic kinh doanh, tính toán giá cả, xử lý thanh toán, v.v.

6-Thư mục "middlewares": Chứa các tệp tin middleware để xử lý các 
tác vụ trung gian trước khi yêu cầu đến các controller. Middleware
 có thể kiểm tra xác thực, phân quyền, xử lý định dạng dữ liệu, ghi log, v.v.


# apple-store-api


config file  .env
DB_URI=
