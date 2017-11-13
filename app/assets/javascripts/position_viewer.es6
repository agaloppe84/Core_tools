
const position_viewer = (position_scroll, dynamicBar, dynamicText) => {
  let outerHeight = window.innerHeight;
  let windowHeight = (window.document.body.clientHeight) - outerHeight;
  let compute = (position_scroll * 100) / windowHeight;
  let roundedCompute = Math.round(compute * 100) / 100;
  dynamicText.innerText = (Math.round(roundedCompute)) + "%";
  dynamicBar.style.width = roundedCompute + "%";
};

let scroll_position = 0;
let moving = false;
let bar = document.querySelector(".bar");
let percentText = document.querySelector(".percents");

window.addEventListener('scroll', (event) => {
  scroll_position = window.scrollY;
  if (!moving) {
    window.requestAnimationFrame(() => {
      position_viewer(scroll_position, bar, percentText);
      moving = false;
    });
  }
  moving = true;
});
