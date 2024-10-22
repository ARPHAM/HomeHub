let div3_7 = document.querySelector(".v3_7");
let divprofile_card = document.querySelector(".profile-card");
divprofile_card.setAttribute("style", `left: ${window.innerWidth - 360}px`);
window.addEventListener("resize", function () {
  divprofile_card.setAttribute("style", `left: ${window.innerWidth - 360}px`);
});
let isHovering1 = false;
let isHovering2 = false;
divprofile_card.style.display = "none";
div3_7.addEventListener("mouseover", () => {
  isHovering1 = true;
  divprofile_card.style.display = "block";
  console.log(1);
});

divprofile_card.addEventListener("mouseover", () => {
  isHovering2 = true;
  divprofile_card.style.display = "block";
  console.log(2);
});

div3_7.addEventListener("mouseout", () => {
  isHovering1 = false;
  checkAndHide();
  console.log(3);
});

divprofile_card.addEventListener("mouseout", () => {
  isHovering2 = false;
  checkAndHide();
  console.log(4);
});

function checkAndHide() {
  if (!isHovering1 && !isHovering2) {
    divprofile_card.style.display = "none";
    console.log(5);
  }
}
