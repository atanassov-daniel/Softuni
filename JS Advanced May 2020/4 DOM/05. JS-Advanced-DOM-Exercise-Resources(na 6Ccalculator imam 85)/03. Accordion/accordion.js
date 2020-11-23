function toggle() {
    let button = document.getElementsByClassName("button")[0];

    if (button.innerText === "MORE") {
        // More и Less трябват за Judge-a
        document.getElementById("extra").style.display = "block";
        button.innerText = "LESS";
    } else if (button.innerText === "LESS") {
        document.getElementById("extra").style.display = "none";
        button.innerText = "MORE";
    }
}