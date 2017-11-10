let modalsNormal = document.querySelectorAll(".modal");
let modalsBottom = document.querySelectorAll(".modal-bottom");


modalsNormal.forEach((modal) => {
  let modalTrigger = modal.querySelector(".modal-trigger");
  let modalContent = modal.querySelector(".modal-content");
  let modalStructure = modalContent.dataset.structure;
  let modalClose = modalContent.querySelector(".modal-close");
  let backfilter = document.createElement("div");
  backfilter.classList.add("backfilter");
  modalTrigger.addEventListener("click", (event) => {
    modalContent.classList.toggle("active");
    document.body.append(backfilter);
  });
  modalClose.addEventListener("click", (event) => {
    modalContent.classList.toggle("active");
    document.body.removeChild(backfilter);
  });
  backfilter.addEventListener("click", (event) => {
    modalContent.classList.toggle("active");
    document.body.removeChild(backfilter);
  });
});



modalsBottom.forEach((modal) => {
  let modalTrigger = modal.querySelector(".modal-bottom-trigger");
  let modalContent = modal.querySelector(".modal-bottom-content");
  let modalStructure = modalContent.dataset.structure;
  let modalClose = modalContent.querySelector(".modal-bottom-close");
  let modalResize = modalContent.querySelector(".modal-resize");
  let backfilter = document.createElement("div");
  backfilter.classList.add("backfilter");
  modalTrigger.addEventListener("click", (event) => {
    modalContent.classList.toggle("active");
    document.body.append(backfilter);
  });
  modalClose.addEventListener("click", (event) => {
    modalContent.classList.toggle("active");
    document.body.removeChild(backfilter);
  });
  backfilter.addEventListener("click", (event) => {
    modalContent.classList.toggle("active");
    document.body.removeChild(backfilter);
  });
  if (modalResize != null) {
    modalResize.addEventListener("click", (event) => {
      modalContent.classList.toggle("fullheight");
    });
  }
});
