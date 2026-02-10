
 const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Auto close when clicking menu item
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });

  const sections = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.2   // text konjam late-aa varanum na value change pannalaam
  }
);

sections.forEach(section => {
  observer.observe(section);
});