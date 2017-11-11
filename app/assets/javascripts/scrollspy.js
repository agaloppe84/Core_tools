
const isInViewport = (element) => {
  let rect = element.getBoundingClientRect();
  let html = document.documentElement;
  return (
    rect.top <= window.innerHeight / 2 &&
    rect.left >= 0 &&
    rect.bottom >= (window.innerHeight / 2 || html.clientHeight / 2) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}

const fadeAnimation = (selector) => {
  let listeners = document.querySelectorAll(selector);
  listeners.forEach((listener) => {
    let target = document.getElementById(listener.dataset.target);
    if (isInViewport(target)) {
      listener.classList.add("active");
      target.classList.add("fadein");
      target.classList.remove("fadeout");
    } else {
      listener.classList.remove("active");
      target.classList.remove("fadein");
      target.classList.add("fadeout");
    }
  });
}



window.addEventListener("scroll", (event) => {
  fadeAnimation('.scrollspy-listener');
});
