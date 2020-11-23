function focus() {
    for (var input of document.getElementsByTagName("input")) {
        input.addEventListener("focus", (e) => {
            e.target.parentElement.className = "focused";
        });

        input.addEventListener("blur", (event) => {
            event.target.parentElement.className = "";
        });
    }
}

/*

function focus() {
    let index = 0;

    for (var div of document.getElementsByTagName("div")) {
        if (index > 0) {
            div.addEventListener("mouseover", (e) => {
                if (e.target.outerHTML.includes("<div")) {
                    e.target.className = "focused";
                } else {
                    e.target.parentElement.className = "focused";
                }
            });

            div.addEventListener("mouseout", (event) => {
                if (event.target.outerHTML.includes("<div")) {
                    event.target.className = "";
                } else {
                    event.target.parentElement.className = "";
                }
            });
        }

        index++;
    }
}

*/