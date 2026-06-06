// ============================================================
//  db.js — Cơ sở dữ liệu sản phẩm (mảng global)
//  Linh kiện & Phụ kiện Điện Thoại
// ============================================================

const DATABASE = [
  {
    id: 1,
    ten: "Màn hình iPhone 14 Pro Max (OLED)",
    loai: "man-hinh",
    tenLoai: "Màn hình",
    gia: 1850000,
    trangThai: "active",       // "active" | "hidden"
    moTa: "Màn hình OLED Super Retina XDR 6.7 inch, độ phân giải 2796x1290px, tần số quét 120Hz ProMotion. Hỗ trợ True Tone và P3 Wide Color. Tương thích chính hãng Apple.",
    noiDung: "Màn hình sử dụng tấm nền OLED cao cấp, cho màu sắc sống động và độ tương phản sâu. Bộ kit bao gồm: màn hình, ron cao su chống bụi, bộ vít thay thế, hướng dẫn lắp đặt. Bảo hành 3 tháng lỗi do nhà sản xuất.",
    hinhAnh: [
      "https://placehold.co/600x400/1a1a2e/e94560?text=iPhone+14+Pro+Max+Screen",
      "https://placehold.co/600x400/16213e/e94560?text=OLED+Display",
      "https://placehold.co/600x400/0f3460/e94560?text=True+Tone"
    ],
    thuongHieu: "Apple",
    baoHanh: "3 tháng"
  },


  {
    id: 2,
    ten: "Màn hình Samsung Galaxy S23 Ultra (AMOLED)",
    loai: "man-hinh",
    tenLoai: "Màn hình",
    gia: 1450000,
    trangThai: "active",
    moTa: "Màn hình Dynamic AMOLED 2X 6.8 inch, 120Hz, độ sáng 2200 nits. Hỗ trợ S-Pen tích hợp. Hàng zin tháo máy.",
    noiDung: "Tấm nền Dynamic AMOLED 2X cho trải nghiệm hình ảnh sắc nét, màu chuẩn. Tương thích đầy đủ với Samsung Galaxy S23 Ultra. Bộ kit gồm màn hình + cảm ứng nguyên khối, keo dán, dụng cụ tháo lắp.",
    hinhAnh: [
      "https://placehold.co/600x400/1a1a2e/00b4d8?text=Samsung+S23+Ultra+Screen",
      "https://placehold.co/600x400/16213e/00b4d8?text=AMOLED+2X",
      "https://placehold.co/600x400/0f3460/00b4d8?text=120Hz"
    ],
    thuongHieu: "Samsung",
    baoHanh: "3 tháng"
  },


  {
    id: 3,
    ten: "Pin iPhone 13 (3227mAh)",
    loai: "pin",
    tenLoai: "Pin",
    gia: 320000,
    trangThai: "active",
    moTa: "Pin zin bóc máy dung lượng 3227mAh, dành cho iPhone 13. Dung lượng pin còn 95%+. Có chip bảo vệ an toàn.",
    noiDung: "Pin chất lượng cao, đã qua kiểm định dung lượng thực tế bằng thiết bị chuyên dụng. Bộ kit gồm: pin, keo dán, tua vít 2 đầu. Không phù hợp pin phình, máy bị sập nguồn đột ngột.",
    hinhAnh: [
      "https://placehold.co/600x400/1a1a2e/06d6a0?text=iPhone+13+Battery",
      "https://placehold.co/600x400/16213e/06d6a0?text=3227mAh",
      "https://placehold.co/600x400/0f3460/06d6a0?text=95%25+Health"
    ],
    thuongHieu: "Apple",
    baoHanh: "6 tháng"
  },


  {
    id: 4,
    ten: "Pin Samsung Galaxy A54 (5000mAh)",
    loai: "pin",
    tenLoai: "Pin",
    gia: 280000,
    trangThai: "active",
    moTa: "Pin dung lượng 5000mAh dành cho Samsung Galaxy A54 5G. Hỗ trợ sạc nhanh 25W. Hàng new nguyên seal.",
    noiDung: "Pin mới 100%, đóng gói nguyên hộp. Hỗ trợ công nghệ sạc nhanh 25W. Bộ kit gồm: pin, hướng dẫn lắp đặt. Khuyến nghị thay tại cửa hàng uy tín.",
    hinhAnh: [
      "https://placehold.co/600x400/1a1a2e/ffd166?text=Samsung+A54+Battery",
      "https://placehold.co/600x400/16213e/ffd166?text=5000mAh",
      "https://placehold.co/600x400/0f3460/ffd166?text=25W+Fast+Charge"
    ],
    thuongHieu: "Samsung",
    baoHanh: "6 tháng"
  },


  {
    id: 5,
    ten: "Ốp lưng MagSafe iPhone 15 Pro (Silicon)",
    loai: "op-lung",
    tenLoai: "Ốp lưng",
    gia: 150000,
    trangThai: "active",
    moTa: "Ốp silicon MagSafe cho iPhone 15 Pro, tích hợp nam châm N45 chuẩn Apple. Chống sốc 4 góc, mỏng 1.5mm. Có 8 màu.",
    noiDung: "Chất liệu silicon cao cấp, không ố vàng sau thời gian dài sử dụng. Nam châm mạnh tương thích với tất cả phụ kiện MagSafe. Bảo vệ camera và màn hình nhô cao 1mm.",
    hinhAnh: [
      "https://placehold.co/600x400/1a1a2e/ef476f?text=MagSafe+Case",
      "https://placehold.co/600x400/16213e/ef476f?text=Silicon+Case",
      "https://placehold.co/600x400/0f3460/ef476f?text=MagSafe+Compatible"
    ],
    thuongHieu: "Generic",
    baoHanh: "1 tháng"
  },


  {
    id: 6,
    ten: "Cáp sạc USB-C to Lightning 1.2m (MFi)",
    loai: "cap-sac",
    tenLoai: "Cáp sạc",
    gia: 185000,
    trangThai: "active",
    moTa: "Cáp sạc chuẩn MFi (Made for iPhone) dài 1.2m. Hỗ trợ sạc nhanh PD 20W và truyền dữ liệu USB 2.0. Bọc dù bền.",
    noiDung: "Được Apple cấp chứng nhận MFi, đảm bảo an toàn cho pin và thiết bị. Lõi đồng nguyên chất 28AWG, bọc nylon chống rối. Đầu cắm mạ vàng 24K chống oxy hóa.",
    hinhAnh: [
      "https://placehold.co/600x400/1a1a2e/118ab2?text=USB-C+to+Lightning",
      "https://placehold.co/600x400/16213e/118ab2?text=MFi+Certified",
      "https://placehold.co/600x400/0f3460/118ab2?text=PD+20W"
    ],
    thuongHieu: "MFi",
    baoHanh: "6 tháng"
  },


  {
    id: 7,
    ten: "Củ sạc nhanh GaN 65W 3 cổng (USB-C + USB-A)",
    loai: "cu-sac",
    tenLoai: "Củ sạc",
    gia: 420000,
    trangThai: "active",
    moTa: "Củ sạc GaN công nghệ Gallium Nitride, tổng công suất 65W. 2 cổng USB-C (PD 45W + PD 20W) và 1 cổng USB-A (QC 3.0). Nhỏ gọn hơn củ sạc laptop 40%.",
    noiDung: "Công nghệ GaN thế hệ 3 cho hiệu suất cao, tỏa nhiệt ít. Tích hợp bảo vệ: quá điện áp, quá dòng, ngắn mạch, quá nhiệt. Tương thích: laptop MacBook, iPad, iPhone, Android, Nintendo Switch.",
    hinhAnh: [
      "https://placehold.co/600x400/1a1a2e/9b5de5?text=GaN+65W+Charger",
      "https://placehold.co/600x400/16213e/9b5de5?text=3+Port+Charger",
      "https://placehold.co/600x400/0f3460/9b5de5?text=GaN+Technology"
    ],
    thuongHieu: "Baseus",
    baoHanh: "12 tháng"
  },


  {
    id: 8,
    ten: "Kính cường lực iPhone 15 Series (9H)",
    loai: "kinh-cuong-luc",
    tenLoai: "Kính cường lực",
    gia: 85000,
    trangThai: "active",
    moTa: "Kính cường lực độ cứng 9H cho iPhone 15 / 15 Plus / 15 Pro / 15 Pro Max. Độ trong suốt 99.9%, chống vân tay, chống chói. Dán tự động bằng khay.",
    noiDung: "Sử dụng kính Corning Gorilla Glass loại 2, độ dày 0.33mm. Keo UV cường độ cao, không bong góc sau 6 tháng. Bộ kit gồm: 2 miếng kính, 2 khăn lau, 2 miếng bụi, khay dán tự động.",
    hinhAnh: [
      "https://placehold.co/600x400/1a1a2e/f72585?text=Tempered+Glass+9H",
      "https://placehold.co/600x400/16213e/f72585?text=iPhone+15+Series",
      "https://placehold.co/600x400/0f3460/f72585?text=Auto-Install+Kit"
    ],
    thuongHieu: "JRC",
    baoHanh: "1 tháng"
  },


  {
    id: 9,
    ten: "Tai nghe True Wireless Xiaomi Redmi Buds 5",
    loai: "tai-nghe",
    tenLoai: "Tai nghe",
    gia: 650000,
    trangThai: "active",
    moTa: "True Wireless, chống ồn chủ động ANC 46dB. Driver 12.4mm, pin 10h (40h với hộp). Kết nối Bluetooth 5.3, trễ thấp 45ms. Kháng nước IPX4.",
    noiDung: "Chống ồn ANC thế hệ mới hiệu quả trong môi trường văn phòng và phương tiện công cộng. Chế độ Transparency để nghe âm thanh xung quanh. Kết nối đồng thời 2 thiết bị (Multipoint). Điều khiển cảm ứng.",
    hinhAnh: [
      "https://placehold.co/600x400/1a1a2e/4cc9f0?text=Redmi+Buds+5",
      "https://placehold.co/600x400/16213e/4cc9f0?text=ANC+46dB",
      "https://placehold.co/600x400/0f3460/4cc9f0?text=True+Wireless"
    ],
    thuongHieu: "Xiaomi",
    baoHanh: "12 tháng"
  },


  {
    id: 10,
    ten: "Sạc không dây MagSafe 15W (iPhone 12+)",
    loai: "sac-khong-day",
    tenLoai: "Sạc không dây",
    gia: 390000,
    trangThai: "hidden",   // ← ẩn, không hiện ở trang khách hàng
    moTa: "Đế sạc không dây MagSafe 15W dành cho iPhone 12 trở lên. Sạc nhanh gấp đôi sạc Qi thông thường. Tích hợp nam châm alignment tự căn chỉnh.",
    noiDung: "Công suất tối đa 15W cho dòng iPhone MagSafe. Tương thích Qi 7.5W/10W/5W với các thiết bị khác. Cáp USB-C 1m tích hợp. Không cần tháo ốp MagSafe khi sạc.",
    hinhAnh: [
      "https://placehold.co/600x400/1a1a2e/7209b7?text=MagSafe+15W",
      "https://placehold.co/600x400/16213e/7209b7?text=Wireless+Charging",
      "https://placehold.co/600x400/0f3460/7209b7?text=Auto+Align"
    ],
    thuongHieu: "Apple",
    baoHanh: "6 tháng"
  }
];

// ============================================================
//  Các hàm tiện ích & LOCAL STORAGE
// ============================================================

// 1. Khởi tạo dữ liệu từ Local Storage. 
// Nếu Local Storage chưa có gì (lần đầu vào web), nó sẽ lấy mảng DATABASE gốc.
let LOCAL_DB = JSON.parse(localStorage.getItem("PHONEPARTS_DB"));
if (!LOCAL_DB) {
    LOCAL_DB = DATABASE; // DATABASE là cái mảng gốc ở trên cùng
    localStorage.setItem("PHONEPARTS_DB", JSON.stringify(LOCAL_DB));
}

// Hàm phụ: Lưu lại dữ liệu vào Local Storage mỗi khi có thay đổi
function saveData() {
    localStorage.setItem("PHONEPARTS_DB", JSON.stringify(LOCAL_DB));
}

// ============================================================

// Lấy tất cả sản phẩm đang active (dùng cho trang khách hàng)
function getSanPhamActive() {
    return LOCAL_DB.filter(sp => sp.trangThai === "active");
}

// Lấy tất cả sản phẩm (dùng cho trang quản lý admin)
function getAllSanPham() {
    return LOCAL_DB;
}

// Tìm sản phẩm theo id
function getSanPhamById(id) {
    return LOCAL_DB.find(sp => sp.id === parseInt(id));
}

// Định dạng giá tiền VND
function formatGia(gia) {
    return gia.toLocaleString("vi-VN") + " ₫";
}

// Xóa mềm: đổi trạng thái sang hidden
function xoaMemSanPham(id) {
    const sp = getSanPhamById(id);
    if (sp) {
        sp.trangThai = "hidden";
        saveData(); // <--- Lưu lại thay đổi
    }
}

// Khôi phục sản phẩm đã ẩn
function khoiPhucSanPham(id) {
    const sp = getSanPhamById(id);
    if (sp) {
        sp.trangThai = "active";
        saveData(); // <--- Lưu lại thay đổi
    }
}

// Thêm sản phẩm mới vào database
function themSanPham(sanPhamMoi) {
    const idMoi = LOCAL_DB.length > 0 ? Math.max(...LOCAL_DB.map(sp => sp.id)) + 1 : 1;
    LOCAL_DB.push({ id: idMoi, ...sanPhamMoi });
    saveData(); // <--- Lưu lại thay đổi
}

// Cập nhật sản phẩm
function capNhatSanPham(id, thongTinMoi) {
    const index = LOCAL_DB.findIndex(sp => sp.id === parseInt(id));
    if (index !== -1) {
        LOCAL_DB[index] = { ...LOCAL_DB[index], ...thongTinMoi };
        saveData(); // <--- Lưu lại thay đổi
    }
}