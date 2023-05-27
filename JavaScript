"use strict";

let showModal = document.querySelectorAll(".show-modal");
let modal = document.querySelector(".modal");
let hidden = document.querySelector(".hidden");
let closeModal = document.querySelector(".close-modal");
let overlay = document.querySelector(".overlay");

let _Addfunction = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
let _Removefunction = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", _Removefunction);
}
closeModal.addEventListener("click", _Addfunction);

overlay.addEventListener("click", _Addfunction);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    _Addfunction();
  }
});
