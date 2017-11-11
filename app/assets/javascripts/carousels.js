let carousels = document.querySelectorAll(".carousel");

carousels.forEach((carousel) => {
  let controls = carousel.querySelector(".carousel-control");
  let previousButton = controls.querySelector(".prev");
  let nextButton = controls.querySelector(".next");
  let items = carousel.querySelectorAll(".carousel-item");
  let urlsArray = [];
  let titlesArray = [];
  let index = -1;
  items.forEach((item) => {
    let photoUrl = item.dataset.url;
    let photoTitle = item.dataset.title;
    urlsArray.push(photoUrl);
    titlesArray.push(photoTitle);
  });
  nextButton.addEventListener("click", (event) => {
    if (index < urlsArray.length - 1) {
      index += 1;
    } else if (index >= urlsArray.length - 1) {
      index = 0;
    }
    carousel.style.backgroundImage = "url(" + urlsArray[index] + ")";
    let carouselText = carousel.querySelector(".carousel-text");
    carouselText.innerText = titlesArray[index];
    console.log(index);
    console.log(urlsArray.length - 1);
  });
  previousButton.addEventListener("click", (event) => {
    if (index <= urlsArray.length - 1 && index > 0) {
      index -= 1;
    } else if (index > urlsArray.length - 1) {
      index = 0;
    } else if (index == 0) {
      index = urlsArray.length - 1
    }
    carousel.style.backgroundImage = "url(" + urlsArray[index] + ")";
    let carouselText = carousel.querySelector(".carousel-text");
    carouselText.innerText = titlesArray[index];
    console.log(index);
    console.log(urlsArray.length - 1);
  });
});
