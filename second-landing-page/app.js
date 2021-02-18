const hamburger = document.querySelector(".hamburger");
const lines = document.querySelectorAll(".line");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  console.log(lines);
  lines.forEach((line) => line.classList.toggle("line-active"));
  navLinks.classList.toggle("nav-links-active");
});
