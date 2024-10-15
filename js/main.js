let div3_3 = document.getElementsByClassName("v3_3");
let div3_6 = document.querySelector(".v3_6");
let div3_11 = document.querySelector(".v3_11");
let deMuc = 0;
news();
console.log(div3_3[0]);
for (let i = 0; i < div3_3.length; i++) {
  div3_3[i].onclick = function (e, index) {
    div3_6.textContent = e.target.innerText;
    div3_3[deMuc].removeAttribute("style");
    e.target.setAttribute(
      "style",
      "background-color: rgb(116, 175, 117); color: white"
    );
    deMuc = i;
    chang3_11(deMuc);
  };
}
function chang3_11(option) {
  switch (option) {
    case 0:
      news();
      break;
    case 1:
      services();
      break;
    case 2:
      payment();
      break;
    case 3:
      maintain();
      break;
    case 4:
      aboutUs();
      break;
    default:
      console.log("Lỗi!!!");
  }
  return 0;
}
function news() {
  div3_11.innerHTML = `
  <div class="news_1">
      <div class="news_1_1">
        <div class="news_1_1_1">Theo Dõi</div>
        <div class="news_1_1_1" style="color: black">Đề Xuất</div>
        <div class="news_1_1_1">Sự Kiện</div>
      </div>
      <div></div>
      <div class="news_1_2">
        <div class="news_1_2_1">
          <div class="news_1_2_1_1"></div>
          <span
            >Ngoài trả lại ba tháng tiền nhà, chủ còn sẵn sàng bồi thường
            thêm 10 triệu tiền hợp đồng cho người thuê.</span
          >
          <div class="news_1_2_1_2">
            <img src="./images/news_1_2_1.jpg" />
          </div>
          <div></div>
        </div>
        <div class="news_1_2_1">
          <div class="news_1_2_1_1"></div>
          <span
            >Hải sản "Mồng leo" cực quý hiếm đã có tại quầy mại
            dzô....</span
          >
          <div class="news_1_2_1_2">
            <img src="./images/news_1_2_2.jpg" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <div></div>
    <div class="news_2">
      <div class="news_2_1">
        <div class="news_2_1_1">
          <img src="./images/news_2_2_1.jpg" />
          <span>Bài Viết</span>
        </div>
        <div class="news_2_1_1">
          <img src="./images/news_2_2_2.jpg" />
          <span>Cá Nhân</span>
        </div>
        <div class="news_2_1_1">
          <img src="./images/news_2_2_3.jpg" />
          <span>Đã lưu</span>
        </div>
      </div>
      <div></div>
      <div class="news_2_2">
        <div class="news_2_2_1">
          <div>Thông báo</div>
          <img src="./images/news_2_2_4.jpg" />
        </div>
        <div class="news_2_2_2">
          <div class="news_2_2_2_1">Thông báo bài viết</div>
          <div class="news_2_2_2_1">Thông báo sự kiện</div>
        </div>
      </div>
    </div>`;
  let News_1_2 = document.querySelector(".news_1_2");
  News_1_2.setAttribute("style", `height: ${window.innerHeight - 173}px;`);
  div3_11.setAttribute(
    "style",
    "display: grid; grid-template-columns: 6fr 10px 2fr;"
  );
  window.addEventListener("resize", function () {
    News_1_2.setAttribute("style", `height: ${window.innerHeight - 173}px`);
  });
}
function services() {
  div3_11.innerHTML = `
  <div class="services_1">
    <img
      src="./images/Services_1.webp"
      style="width: 80%; max-height: 100%; margin: 10px auto"
    />
    <span id="name_services">Cleaning</span>
  </div>
  <div class="services_1">
    <img
      src="./images/services_2.jpg"
      style="max-width: 80%; max-height: 100%; margin: 10px auto"
    />
    <span id="name_services">swimming pool</span>
  </div>
  <div class="services_1">
    <img
      src="./images/services_3.png"
      style="max-width: 80%; max-height: 100%; margin: 10px auto"
    />
    <span id="name_services">football field</span>
  </div>`;
  for (let i = 0; i < 15; i++) {
    div3_11.innerHTML += `<div class="services_1">
    <img
      src="./images/services_3.png"
      style="max-width: 80%; max-height: 100%; margin: 10px auto"
    />
    <span id="name_services">football field</span>
  </div>`;
  }
  div3_11.setAttribute(
    "style",
    `height: ${
      window.innerHeight - 130
    }px; display: flex; flex-wrap: wrap; gap: 10px; overflow: auto;`
  );
  var services_1 = document.getElementsByClassName("services_1");
  for (let i = 0; i < services_1.length; i++) {
    services_1[i].onclick = function (e) {
      form(services_1[i].innerText);
    };
  }
}
function form(e) {
  div3_11.innerHTML = `FORM ĐĂNG KÍ DỊCH VỤ ${e}`;
  div3_11.setAttribute(
    "style",
    `height: ${
      window.innerHeight - 130
    }px; background-color: rgba(245, 245, 245, 1)`
  );
  console.log(e);
}
function payment() {
  div3_11.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Dịch vụ</th>
        <th>thời gian</th>
        <th>Địa Điểm</th>
        <th>Trạng Thái</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <th>Pham Anh</th>
        <th>Sân bóng</th>
        <th>9/10/2023</th>
        <th>HN</th>
        <th>đã thanh toán</th>
      </tr>
      <tr>
        <th>2</th>
        <th>Pham Anh</th>
        <th>Tiền điện tháng 10</th>
        <th>9/10/2023</th>
        <th>HN</th>
        <th>đã thanh toán</td>
      </tr>
      <tr></tr>
    </tbody>
  </table>`;
  div3_11.setAttribute("style", "");
}
function maintain() {
  div3_11.innerHTML = `
  `;
  div3_11.setAttribute("style", "");
}
function aboutUs() {
  div3_11.innerHTML = `
  <h3>Chi nhánh</h3>
  <h5 style="margin: 20px;">chi nhánh 1: chỗ đang ở</h5>
  <h5 style="margin: 20px;">chi nhánh 2: chưa xây</h5>
  <h3>Số điện thoại</h3>
  <h5 style="margin: 20px;">Quản lý tòa nhà: 1800100biết</h5>
  <h5 style="margin: 20px;">Quản lý kế toán: 1800100nhớ</h5>
  <h3>Email: NgaiLam@gmail.com<h3>
  <h3>Fanpage: chưa có thời gian tạo</h3>
  <h3>Hotline bảo trì: Thuê ngoài nhá</h3>
  <h3>Chưa xây, chưa khánh thành</h3>
  <h3>Đợi update sau...</h3>
  `;
  div3_11.setAttribute(
    "style",
    "background-color: rgba(255, 255, 255, 1);  border-radius: 6px; height: ${window.innerHeight - 173}px;"
  );
}
