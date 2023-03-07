const acccordionHeaders = document.querySelectorAll(".accordion-header");
[...acccordionHeaders].forEach((item) =>
  item.addEventListener("click", handleClickAccordion)
);
const activeStr = "is-active";
function handleClickAccordion(e){
    const content = e.target.nextElementSibling;
    content.classList.toggle(activeStr);
    content.style.height = `${content.scrollHeight}`
    if (!content.classList.contains("is-active")){
        content.style.height = "0px";
    }
    const icon = document.querySelectorAll(".icon");
    [...icon].forEach(function(el) {
        el.classList.toggle("fa-angle-down");
        el.classList.toggle("fa-angle-up");
    });
   
}