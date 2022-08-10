const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("mainNavigation");

console.log(hamburger);
console.log(navUL);

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});
