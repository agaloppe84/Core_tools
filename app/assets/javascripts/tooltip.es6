let downTooltips = document.querySelectorAll(".tooltip-bottom");



downTooltips.forEach((tooltip) => {
  let trigger = tooltip.querySelector(".tooltip-trigger");
  let targetId = trigger.dataset.target;
  let target = document.getElementById(targetId);
  let arrow = tooltip.querySelector(".icon");
  trigger.addEventListener("click", (event) => {
    target.classList.toggle("active");
    tooltip.classList.toggle("active");
    trigger.classList.toggle("active");
    if (arrow) {
      arrow.classList.toggle("active");
    }
  });
});

