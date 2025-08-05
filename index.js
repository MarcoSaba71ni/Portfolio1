// About Section

const aboutBtn = document.getElementById("about-btn");
const moreAbout = document.getElementById("more-about");
const aboutLess = document.getElementById("about-less");
const lessAbout = document.getElementById("less-about");
const aboutTxt = document.getElementById("about-txt");
const divMore = document.getElementById("div-more");

aboutBtn.addEventListener("click", () => {
  moreAbout.style.display = "block";
  moreAbout.scrollIntoView ({behavior: "smooth"});
  aboutBtn.style.display = "none";
  lessAbout.style.display = "block";
})

lessAbout.addEventListener("click", () => {
  moreAbout.style.display = "none";
  lessAbout.style.display = "none";
  aboutBtn.style.display = "block";
})

// Other Side Section

const moreBtn = document.getElementById("more-btn");
const fullContent = document.getElementById("full-content");
const heroContent = document.getElementById("hero-content");
const overlayTxt = document.getElementById("overlay-txt");
const lessBtn = document.getElementById("less-btn");

moreBtn.addEventListener("click", () => {
  overlayTxt.style.display = "none";
  heroContent.style.display = "block";
  fullContent.style.display = "block";
  fullContent.scrollIntoView({ behavior: "smooth" });
});

lessBtn.addEventListener("click", () => {
  fullContent.style.display = "none";
  overlayTxt.style.display = "block";
  heroContent.scrollIntoView({ behavior: "smooth" });
})