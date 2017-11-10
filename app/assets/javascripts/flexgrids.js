let flexRows = document.querySelectorAll(".flexrow");
let containersFlex = document.querySelectorAll(".container-flexrow");




flexRows.forEach((flexrow) => {
  let currentRowOptions = flexrow.dataset.wrap;
  if (currentRowOptions) {
    if (currentRowOptions === "center") {
      flexrow.style.justifyContent = "center";
    } else if (currentRowOptions === "left") {
      flexrow.style.justifyContent = "flex-start";
    } else if (currentRowOptions === "right") {
      flexrow.style.justifyContent = "flex-end";
    }
  }
});

containersFlex.forEach((containerGap) => {
  let currentContainerGap = containerGap.dataset.gap;
  if (currentContainerGap) {
    containerGap.style.padding = currentContainerGap;
    let gaps = containerGap.querySelectorAll(".flexcol-gap");
    gaps.forEach((colGap) => {
      colGap.style.padding = currentContainerGap;
    });
  }
});


