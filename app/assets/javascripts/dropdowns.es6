let topDropdowns = document.querySelectorAll(".dropdown-top");
let bottomDropdowns = document.querySelectorAll(".dropdown-bottom");



topDropdowns.forEach((dropdown) => {
  let trigger = dropdown.querySelector(".dropdown-trigger");
  let targetId = trigger.dataset.target;
  let target = document.getElementById(targetId);
  let arrow = dropdown.querySelector(".icon");
  trigger.addEventListener("click", (event) => {
    target.classList.toggle("active");
    dropdown.classList.toggle("active");
    trigger.classList.toggle("active");
    if (arrow) {
      arrow.classList.toggle("active");
    }
  });
});

bottomDropdowns.forEach((dropdown) => {
  let trigger = dropdown.querySelector(".dropdown-trigger");
  let targetId = trigger.dataset.target;
  let target = document.getElementById(targetId);
  let arrow = dropdown.querySelector(".icon-active");
  trigger.addEventListener("click", (event) => {
    target.classList.toggle("active");
    dropdown.classList.toggle("active");
    trigger.classList.toggle("active");
    if (arrow) {
      arrow.classList.toggle("active");
    }
  });
});

