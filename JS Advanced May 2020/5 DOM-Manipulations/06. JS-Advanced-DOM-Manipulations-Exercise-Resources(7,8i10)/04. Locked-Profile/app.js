function lockedProfile() {
    Array.from(document.querySelectorAll("div.profile")).forEach(div => {
        let button = div.getElementsByTagName("button")[0];

        button.addEventListener("click", (e) => {
            // if it is not locked
            if (Object.values(div.querySelector('input[value="lock"]').attributes)[3] == undefined) {
                if (div.querySelector("div").style.display != "block") {
                    div.querySelector("div").style.display = "block";
                    button.innerText = "Hide it";
                } else {
                    div.querySelector("div").style.display = "none";
                    button.innerText = "Show more";
                }

            }
        });
    });


    let lockInputs = document.querySelectorAll('input[value="lock"]');
    let unlockInputs = document.querySelectorAll('input[value="unlock"]');

    lockInputs[0].addEventListener("click", (e) => {
        lockInputs[0].setAttribute("checked", "");
        unlockInputs[0].removeAttribute("checked");
    });
    unlockInputs[0].addEventListener("click", (e) => {
        unlockInputs[0].setAttribute("checked", "");
        lockInputs[0].removeAttribute("checked");
    });

    lockInputs[1].addEventListener("click", (e) => {
        lockInputs[1].setAttribute("checked", "");
        unlockInputs[1].removeAttribute("checked");
    });
    unlockInputs[1].addEventListener("click", (e) => {
        unlockInputs[1].setAttribute("checked", "");
        lockInputs[1].removeAttribute("checked");
    });

    lockInputs[2].addEventListener("click", (e) => {
        lockInputs[2].setAttribute("checked", "");
        unlockInputs[2].removeAttribute("checked");
    });
    unlockInputs[2].addEventListener("click", (e) => {
        unlockInputs[2].setAttribute("checked", "");
        lockInputs[2].removeAttribute("checked");
    });
}