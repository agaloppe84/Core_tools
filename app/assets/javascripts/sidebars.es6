var sidebarTriggers = document.querySelectorAll(".sidebar-trigger");

sidebarTriggers.forEach((sidebar) => {
  let dataTarget = sidebar.dataset.target;
  let target = document.getElementById(dataTarget);
  let closeIcon = target.querySelector(".sidebar-close");

  if (target.classList.contains("sidebar-right")) {
    sidebar.addEventListener("click", (event) => {
      if (target.classList.contains("sidebar-right-animation")) {
        target.classList.remove("sidebar-right-animation");
      } else {
        target.classList.add("sidebar-right-animation");
      }
    });
    closeIcon.addEventListener("click", (event) => {
      target.classList.remove("sidebar-right-animation");
    });
  } else if (target.classList.contains("sidebar-left")) {
    sidebar.addEventListener("click", (event) => {
      if (target.classList.contains("sidebar-left-animation")) {
        target.classList.remove("sidebar-left-animation");
      } else {
        target.classList.add("sidebar-left-animation");
      }
    });
    closeIcon.addEventListener("click", (event) => {
      target.classList.remove("sidebar-left-animation");
    });
  }

});
