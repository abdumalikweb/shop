const openModal = document.querySelector("#modal_show");
const closeModal = document.querySelector(".close");
const modal = document.querySelector("#login_modal");

openModal.addEventListener("click", function () {
  modal.classList.add("active");
});
closeModal.addEventListener("click", function () {
  modal.classList.remove("active");
});

// drapdown
const btn_drapdown = document.querySelector("#show_drap");
const change = document.querySelector(".drapdawn");

btn_drapdown.addEventListener("click", function () {
  change.classList.toggle("active");
});
