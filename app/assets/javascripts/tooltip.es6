let tooltips = document.querySelectorAll(".tooltip-trigger");

tooltips.forEach((tooltip) => {
  let target = document.getElementById(tooltip.dataset.target);
  tooltip.addEventListener("mouseover", (event) => {
    target.classList.add("active");
  });
  tooltip.addEventListener("mouseout", (event) => {
    target.classList.remove("active");
  });
});
