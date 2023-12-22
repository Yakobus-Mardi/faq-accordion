"strict mode";

const summary = document.querySelectorAll("summary");

summary.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  });
});
