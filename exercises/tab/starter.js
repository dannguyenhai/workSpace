const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  // xóa hết tất cả class active ở các tab-item
  // sau đó add lại và tab hiện tại đang click
  [...tabItems].forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");
  const tabNumber = event.target.dataset.tab;
  [...tabContents].forEach((item) => {
    item.classList.remove("active");
    // console.log(item.getAttribute("data-tab"));
    // if(item.getAttribute("data-tab"))
  });
}
