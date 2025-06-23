// Highlight the nav item based on scroll position
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // adjust for navbar height
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });

  // Navbar scroll background
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", scrollY > 60);
});
