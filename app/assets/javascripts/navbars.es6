let lastScrollPosition = 0;
let ticking = false;
let navbar = document.querySelector(".navbar-scroll");
if (navbar === null) {
} else {
  let navbarLinks = navbar.querySelectorAll("a");
  const colorsChanges = (position_scroll) => {
    if (position_scroll > 60) {
      navbar.classList.add("color-change");
      navbarLinks.forEach((link) => {
        link.classList.add("color-text-change");
      });
    } else {
      navbar.classList.remove("color-change");
      navbarLinks.forEach((link) => {
        link.classList.remove("color-text-change");
      });
    }
  };

  window.addEventListener("scroll", (event) => {
    lastScrollPosition = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        colorsChanges(lastScrollPosition);
        ticking = false;
      });
    }
    ticking = true;
  });
}




















