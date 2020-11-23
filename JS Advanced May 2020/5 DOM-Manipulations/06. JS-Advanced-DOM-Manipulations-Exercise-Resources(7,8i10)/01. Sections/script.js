function create(words) {
   words.forEach(word => {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.innerText = word;
      p.style.display = "none";

      div.appendChild(p);

      div.addEventListener("click", (e) => {
         p.style.display = "block";
      });

      document.getElementById("content").appendChild(div);
   });
}