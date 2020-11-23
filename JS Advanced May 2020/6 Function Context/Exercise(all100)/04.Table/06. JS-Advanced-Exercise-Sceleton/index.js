function solve() {
   let tbody = document.getElementsByTagName("tbody")[0];
   let trArray = Array.from(tbody.querySelectorAll("tr"));

   tbody.addEventListener("click", function (e) {
      let target = e.target;

      let previousClickedRows = trArray.filter(el => (el !== target && el !== target.parentElement) && el.hasAttribute("style"));
      previousClickedRows.forEach(row => row.removeAttribute("style"));

      if (target.outerHTML.includes("<td")) {
         if (target.parentElement.hasAttribute("style")) {
            target.parentElement.removeAttribute("style");
         } else {
            target.parentElement.style.backgroundColor = "#413f5e";
         }
      } else if (target.outerHTML.includes("<tr")) {
         if (target.hasAttribute("style")) {
            target.removeAttribute("style");
         } else {
            target.style.backgroundColor = "#413f5e";
         }
      }
   });
}
// console.log(trArray.filter(tr => tr !== trArray[trArray.length-1]));