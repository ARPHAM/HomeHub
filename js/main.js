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
          <span>Ngoài trả lại ba tháng tiền nhà, chủ còn sẵn sàng bồi thường thêm 10 triệu tiền hợp đồng cho người thuê.</span>
          <div class="news_1_2_1_2">
            <img src="./images/news_1_2_1.jpg" />
          </div>
          <div></div>
        </div>
        <div class="news_1_2_1">
          <div class="news_1_2_1_1"></div>
          <span>Hải sản "Mồng leo" cực quý hiếm đã có tại quầy mại dzô....</span>
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
  window.addEventListener("resize", function () {
    News_1_2.setAttribute("style", `height: ${window.innerHeight - 173}px;`);
  });
  div3_11.setAttribute(
    "style",
    "display: grid; grid-template-columns: 6fr 10px 2fr;"
  );
}
function services() {
  div3_11.innerHTML = `
  <div class="services_1">
    <img
      src="./images/Services_1.webp"
      style="width: 80%; max-height: 100%; margin: 10px auto"
    />
    <span id="name_services">CLEANING</span>
  </div>
  <div class="services_1">
    <img
      src="./images/services_2.jpg"
      style="max-width: 80%; max-height: 100%; margin: 10px auto"
    />
    <span id="name_services">SWIMMING POOL</span>
  </div>
  <div class="services_1">
    <img
      src="./images/services_3.png"
      style="max-width: 80%; max-height: 100%; margin: 10px auto"
    />
    <span id="name_services">FOOTBALL FIELD</span>
  </div>
  <div class="services_1">
    <img
      src="./images/services_4.png"
      style="max-width: 80%; max-height: 100%; margin: 10px auto"
    />
    <span id="name_services">MAINTAIN</span>
  </div>
  <div class="services_1">
    <img
      src="./images/services_5.png"
      style="max-width: 80%; max-height: 100%; margin: 10px auto"
    />
    <span id="name_services">BOARDROOM</span>
  </div>`;
  for (let i = 0; i < 14; i++) {
    div3_11.innerHTML += `<div class="services_1">
    <img
      src="./images/services_3.png"
      style="max-width: 80%; max-height: 100%; margin: 10px auto"/>
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
  div3_11.innerHTML = `
  <div class="services_form_1">
    <div class="services_form_1_1"><</div>
    <div class="services_form_1_2">FORM DANG KI DANG KY DICH VU</div>
  </div>
  <div class="services_form_2">
    <div class="container-form">
        <h2>Đăng Ký Dịch Vụ</h2>
        <form action="/payment" method="POST">
            <label for="name">Tên của bạn:</label>
            <input type="text" id="name" name="name" placeholder="Nhập tên" required>

            <label for="address">Số nhà:</label>
            <input type="text" id="address" name="address" placeholder="Nhập số nhà" required>

            <label for="service_time">Thời gian sử dụng dịch vụ:</label>
            <select id="service_time" name="service_time" required>
                <option value="" disabled selected>Chọn thời gian</option>
                <option value="1 month">1 Tháng</option>
                <option value="3 months">3 Tháng</option>
                <option value="6 months">6 Tháng</option>
                <option value="1 year">1 Năm</option>
            </select>

            <button type="submit">Thanh Toán</button>
        </form>
    </div>
  </div>`;
  let services_form_2 = document.querySelector(".services_form_2");
  let services_form_1_1 = document.querySelector(".services_form_1_1");
  services_form_1_1.onclick = function () {
    services();
  };
  div3_11.setAttribute("style", "display: flex; flex-direction: column;");
  services_form_2.setAttribute(
    "style",
    `background-color: rgba(255, 255, 255, 1);  border-radius: 6px; margin-top: 10px; width: 100%; height: ${
      window.innerHeight - 190
    }px;`
  );
  window.addEventListener("resize", function () {
    services_form_2.setAttribute(
      "style",
      `background-color: rgba(255, 255, 255, 1);  border-radius: 6px; margin-top: 10px; width: 100%; height: ${
        window.innerHeight - 190
      }px;`
    );
  });
  console.log(e);
}
function payment() {
  let div3_11innerHTML = `<table class = "table">
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
    <tbody>`;
  for (let i = 0; i < 20; i++)
    div3_11innerHTML += `<tr>
        <td>${2 * i + 1}</td>
        <td>Pham Anh</td>
        <td>Sân bóng</td>
        <td>9/10/2023</td>
        <td>HN</td>
        <td>đã thanh toán</td>
      </tr>
      <tr>
        <td>${2 * i + 2}</td>
        <td>Pham Anh</td>
        <td>Tiền điện tháng 10</td>
        <td>9/10/2023</td>
        <td>HN</td>
        <td>đã thanh toán</td>
      </tr>`;
  div3_11innerHTML += `
    </tbody>
  </table>`;
  div3_11.innerHTML = div3_11innerHTML;
  div3_11.setAttribute(
    "style",
    `height: ${
      window.innerHeight - 130
    }px; overflow: auto; padding: 0 20px 10px 20px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 6px;`
  );
  window.addEventListener("resize", function () {
    div3_11.setAttribute(
      "style",
      `height: ${
        window.innerHeight - 130
      }px; overflow: auto; padding: 0 20px 10px 20px;
      background-color: rgba(255, 255, 255, 1);
      border-radius: 6px;`
    );
  });
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
