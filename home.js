const navbar = document.querySelector(".navbar");
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

/* scroll effect */
window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* mobile toggle */
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/* close menu when link clicked (mobile) */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});