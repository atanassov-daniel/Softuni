function validate() {
    let input = document.getElementById("email");

    input.addEventListener("change", (e) => {
        let text = e.target.value;

        if (text.match(/[a-z]+@[a-z]+.[a-z]+/g) === null) {
            input.className = "error";
        } else {
            input.className = "";
        }
    });
}