// ellipses modal
const ellipsesBtn = document.querySelector(".ellipsis-btn");
const openModal = document.querySelector(".ellipses-modal");
const hero = document.querySelector(".hero");
const header = document.querySelector(".header");
const navToggle = document.querySelector(".nav-toggle");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar-wrapper");
const tabletMenuToggle = document.querySelector(".tablet-menu-toggle");
const exchangeBtn = document.querySelector(".nav-down-button");

ellipsesBtn.addEventListener("mouseover", function () {
  openModal.classList.add("show");
});

hero.addEventListener("mouseover", function () {
  openModal.classList.remove("show");
});

header.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("ellipsis-btn")) {
    openModal.classList.remove("show");
  }
});

tabletMenuToggle.addEventListener("click", function () {
  openModal.classList.toggle("show");
});

navToggle.addEventListener("click", function () {
  sideBar.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("show");
});

exchangeBtn.addEventListener("click", function (e) {
  const content = e.currentTarget.parentElement.parentElement;
  content.classList.toggle("show-text");
});
