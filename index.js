const moreBtn = document.getElementById("more-btn");
const fullContent = document.getElementById("full-content");
const heroContent = document.getElementById("hero-content");

moreBtn.addEventListener("click", () => {
  heroContent.style.display = "none";
  fullContent.style.display = "block";
  fullContent.scrollIntoView({ behavior: "smooth" });
});