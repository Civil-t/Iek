const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Navabr Scrolling logic

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-menu li[data-target]");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      const targetSection = document.querySelector(
        `.${item.dataset.target}-container`
      );

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Section not found for: ${item.dataset.target}`);
      }
    });
  });
});

// Navabar appearance after scroll

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 100) {
    navbar.classList.add("scrolled"); // Apply the new styles
  } else {
    navbar.classList.remove("scrolled"); // Remove the styles when scrolling up
  }
});
