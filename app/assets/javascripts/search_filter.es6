const input = document.getElementById("input-filter");

input.addEventListener("keyup", (event) => {
  searchFilter('.search-filter', input.value);
});


const searchFilter = (selector, word) => {
  let filterableItems = document.querySelectorAll(selector);
  let itemCount = 0;
  if (word.length === 0) {
    filterableItems.forEach((item) => {
      item.style.display = "block";
    });
  } else if(word.length > 0){
    filterableItems.forEach((item) => {
      if (item.dataset.filter.includes(word)) {
        item.style.display = "block";
        itemCount += 1;
      } else {
        item.style.display = "none";
      }
    });
  }
  const filterResultCount = document.getElementById("filter-result-count");
  if (itemCount < 1) {
    filterResultCount.innerText = "No results";
  } else if (itemCount == 1){
    filterResultCount.innerText = itemCount + " result";
  } else {
    filterResultCount.innerText = itemCount + " results";
  }
}
