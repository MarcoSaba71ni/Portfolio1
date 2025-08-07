// About Section
const aboutBtn = document.getElementById("about-btn"); 
const divMore = document.getElementById("div-more"); 
const aboutLess = document.getElementById("about-less"); 
const lessAbout = document.getElementById("less-about"); 
const aboutTxt = document.getElementById("about-txt");  
const moreAbout = document.getElementById("more-about");  

aboutBtn.addEventListener("click", () => {
  moreAbout.style.display = "block"; 
  moreAbout.scrollIntoView({ behavior: "smooth" }); 
  divMore.style.display = "none";
  lessAbout.style.display = "block"; 
});

lessAbout.addEventListener("click", () => {
  aboutTxt.scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    moreAbout.style.display = "none";
    lessAbout.style.display = "none";
    divMore.style.display = "flex";

    setTimeout(() => {
      aboutTxt.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, 500);
});

// Other side Section
const moreBtn = document.getElementById("more-btn");
const fullContent = document.getElementById("full-content");
const heroContent = document.getElementById("hero-content");
const overlayTxt = document.getElementById("overlay-txt");
const lessBtn = document.getElementById("less-btn");

moreBtn.addEventListener("click", () => {
  overlayTxt.style.display = "none";
  fullContent.style.display = "block";
  fullContent.scrollIntoView({ behavior: "smooth" });
});

lessBtn.addEventListener("click", () => {
  heroContent.scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    fullContent.style.display = "none";
    overlayTxt.style.display = "block";

    setTimeout(() => {
      heroContent.scrollIntoView({ behavior: "smooth" });
    }, 100);

  }, 500);
});
