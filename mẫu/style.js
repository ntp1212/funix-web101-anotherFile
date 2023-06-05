document.querySelectorAll("button").forEach(function (el) {
  el.addEventListener("click", function () {
    this.parentNode.querySelector(".card-text").classList.toggle("d-none");
    this.closest('[class^="col"]').classList.toggle("d-flex");
  });
});
