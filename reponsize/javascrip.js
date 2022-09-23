// Hàm cộng hai số
function tinh_tong(a, b) {    
    return a + b;
} 
// Lấy thông tin từ người dùng
var a = parseInt(prompt("Nhập số a"));
var b = parseInt(prompt("Nhập số b")); 
// Tính tổng
var tong = tinh_tong(a, b); 
// In ra màn hình
document.write("Tổng hai số " + a + " + " + b + " là " + tong);