var div3_11 = document.querySelector(".v3_11");
var services_form_1 = document.querySelector(".services_form_1");
var services_form_2 = document.querySelector(".services_form_2");
console.log(window.innerWidth);
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
