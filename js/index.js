// Your code goes here
// Your code goes here
//click event
const navSection = document.querySelector(".container");
navSection.addEventListener("click", (event) => {
  navSection.style.background = "pink";
});

//mouseover event
const navLinks = document.querySelector(".nav");
navLinks.addEventListener("mouseover", (event) => {
  event.target.style.color = "purple";
  setTimeout(function () {
    event.target.style.color = "";
  }, 500);
});

//keydown event
const header = document.querySelector(".intro");
document.addEventListener("keydown", (event) => {
  if (event.key === "p") {
    header.style.background = "pink";
  }
});
