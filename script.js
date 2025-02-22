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
