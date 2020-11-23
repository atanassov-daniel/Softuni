function solve() {
   document.querySelector("button#searchBtn").addEventListener("click", (e) => {
      // remove all classes from a possible previous search
      Array.from(document.querySelectorAll("tbody tr")).forEach(tr => {
         tr.className = "";
      });

      // save the input field and its value in separate variables
      let input = document.querySelector("input#searchField");
      let inputValue = document.querySelector("input#searchField").value;

      // save all td's in an array
      let tdArray = Array.from(document.querySelectorAll("tbody tr td"));

      // search through all td cells for a match
      for (const td of tdArray) {
         if (td.innerText.includes(inputValue)) {
            // if a match has been found, apply the class "select" to its parent - its table row "tr"
            td.parentElement.className = "select";
         }
      }

      // clear the input field
      input.value = "";
   });
}