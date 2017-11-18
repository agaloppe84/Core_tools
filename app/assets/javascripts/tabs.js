
let allTabsContainer = document.querySelectorAll(".tabs-container");
let allTabsLinks = document.querySelectorAll(".tabs-links");


allTabsLinks.forEach((links) => {
  var tabsTarget = links.dataset.target;
  var links = links.querySelectorAll(".tab-trigger");
  var tabsDest = document.getElementById(tabsTarget);
  var tabsDestContents = tabsDest.querySelectorAll(".tab-content");
  links.forEach((link) => {
    let target = document.getElementById(link.dataset.target);
    link.addEventListener("click", (event) => {
      link.classList.add(link.dataset.target);
      let currentTrigger = document.querySelector("." + link.dataset.target);
      tabsDestContents.forEach((tab) => {
        tab.classList.remove("active");
      });
      links.forEach((trig) => {
        trig.classList.remove("active");
      });
      target.classList.add("active");
      currentTrigger.classList.add("active");
    });
  });
});



