var div3_3 = document.getElementsByClassName("v3_3");
var div3_6 = document.querySelector(".v3_6");
var div3_11 = document.querySelector(".v3_11");
var deMuc = 0;
news();
console.log(div3_3[0]);
for (let i = 0; i < div3_3.length; i++) {
  div3_3[i].onclick = function (e, index) {
    div3_6.textContent = e.target.innerText;
    div3_3[deMuc].removeAttribute("style");
    e.target.setAttribute(
      "style",
      "background-color: rgb(69, 169, 234); color: white"
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
      contact();
      break;
    case 5:
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
  var News_1_2 = document.querySelector(".news_1_2");
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
  <h1>services</h1>`;
  div3_11.setAttribute("style", "");
}
function payment() {
  div3_11.innerHTML = `
  <h1>payment</h1>`;
  div3_11.setAttribute("style", "");
}
function maintain() {
  div3_11.innerHTML = `
  `;
  div3_11.setAttribute("style", "");
}
function contact() {
  div3_11.innerHTML = `
  <h3>Chi nhánh</h3>
  <h5>    chi nhánh 1: chỗ đang ở</h5>
  <h5>    chi nhánh 2: chưa xây</h5>
  <h3>Số điện thoại</h3>
  <h5>    Quản lý tòa nhà: 1800100biết</h5>
  <h5>    Quản lý kế toán: 1800100nhớ</h5>
  <h3>Email: NgaiLam@gmail.com<h3>
  <h3>Fanpage: chưa có thời gian tạo</h3>
  <h3>Hotline bảo trì: Thuê ngoài nhá</h3>
  `;
  div3_11.setAttribute(
    "style",
    "background-color: rgba(255, 255, 255, 1);  border-radius: 6px; height: ${window.innerHeight - 173}px;"
  );
}
function aboutUs() {
  div3_11.innerHTML = `
  <h3>Chưa xây, chưa khánh thành</h3>
  <h3>Đợi update sau...</h3>
  `;
  div3_11.setAttribute(
    "style",
    "background-color: rgba(255, 255, 255, 1);  border-radius: 6px; height: ${window.innerHeight - 173}px;"
  );
}
