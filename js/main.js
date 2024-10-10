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
    e.target.setAttribute("style", "background-color: rgb(69, 169, 234);");
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
  <h1>news</h1>`;
  console.log(div3_11);
}
function services() {
  div3_11.innerHTML = `
  <h1>services</h1>`;
  console.log(div3_11);
}
function payment() {
  div3_11.innerHTML = `
  <h1>payment</h1>`;
  console.log(div3_11);
}
function maintain() {
  div3_11.innerHTML = `
  <h1>maintain</h1>`;
  console.log(div3_11);
}
function contact() {
  div3_11.innerHTML = `
  <h1>contact</h1>`;
  console.log(div3_11);
}
function aboutUs() {
  div3_11.innerHTML = `
  <h1>aboutUs</h1>`;
  console.log(div3_11);
}
