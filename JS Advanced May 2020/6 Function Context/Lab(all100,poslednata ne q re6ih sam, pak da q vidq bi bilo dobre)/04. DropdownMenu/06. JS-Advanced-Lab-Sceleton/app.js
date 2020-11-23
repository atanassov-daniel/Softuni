function solve() {
    let dropdown = document.getElementById("dropdown-ul");

    let box = document.getElementById("box");

    let button = document.getElementById("dropdown"); // 'Choose your style' button

    button.addEventListener("click", function (e) {
        if (dropdown.style.display === "none" || dropdown.style.display === "") {
            dropdown.style.display = "block";
        } else if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
            //box.removeAttribute("style");
            box.style.backgroundColor = "black";
            box.style.color = "white";
        }

        dropdown.addEventListener("click", function (e) {
            let color = e.target.innerText;
            box.style.backgroundColor = color;
            box.style.color = "black";
        });
    });
}