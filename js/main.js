var div3_3 = document.getElementsByClassName("v3_3");
var div3_6 = document.querySelector(".v3_6");
var div3_11 = document.getElementsByClassName("v3_11");
var deMuc = 0;
div3_3[0];
console.log(div3_3[0]);
for (let i = 0; i < div3_3.length; i++) {
  div3_3[i].onclick = function (e, index) {
    div3_6.textContent = e.target.innerText;
    div3_3[deMuc].removeAttribute("style");
    e.target.setAttribute("style", "background-color: rgb(69, 169, 234);");
    deMuc = i;
  };
}
