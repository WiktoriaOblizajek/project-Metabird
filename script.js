//menu
const mobileBtns = document.querySelector(".mobile-button");
const menuBtn = document.querySelector(".mobile-button__bars");
const closeBtn = document.querySelector(".mobile-button__close");
let size = 900;

mobileBtns.addEventListener("click", () => {
  if (window.innerWidth <= size) {
    menuBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
  }
});

//scroll menu

const header = document.querySelector(".header-main");

function Scroll() {
  if (window.pageYOffset > 350) {
    header.classList.add("is-fixed");
  } else {
    header.classList.remove("is-fixed");
  }
}

window.addEventListener("scroll", Scroll);

// FAQ
const question = document.querySelectorAll(".faq__questions");
const arrow = document.querySelectorAll(".faq__arrow");
const answer = document.querySelectorAll(".faq__answer");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", () => {
    arrow[i].classList.toggle("rotate");
    answer[i].classList.toggle("show");
  });
}
