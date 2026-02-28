//  const toggle = document.getElementById("menuToggle");
//   const nav = document.getElementById("navLinks");

//   toggle.addEventListener("click", () => {
//     nav.classList.toggle("active");
//   });


// const toggle = document.getElementById("menuToggle");
// const menu = document.getElementById("navMenu");

// toggle.onclick = () => {
//   menu.classList.toggle("active");
// };


document.addEventListener("DOMContentLoaded", function () {
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
});