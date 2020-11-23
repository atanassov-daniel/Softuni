function solve() {
    let expressionOutput = document.getElementById("expressionOutput");
    let resultOutput = document.getElementById("resultOutput");


    let clear = document.querySelector("button.clear");
    clear.addEventListener("click", () => {
        expressionOutput.innerText = "";
        resultOutput.innerText = "";
    });


    let keysDiv = document.querySelector("div.keys");

    keysDiv.addEventListener("click", function (event) {
        let clickedKey = event.target.value;

        let splitted = expressionOutput.innerText.split(' ');

        if (!clickedKey) {
            return;
        } else if (Number.isNaN(Number(clickedKey)) === false) {
            if (splitted.length === 1 && splitted[0] === "") {
                expressionOutput.innerText += Number(clickedKey);
            } else if (expressionOutput.innerText[expressionOutput.innerText.length - 1] === ".") {
                expressionOutput.innerText += Number(clickedKey);
            } else if (Number.isNaN(Number(expressionOutput.innerText[expressionOutput.innerText.length - 1])) === false) {
                expressionOutput.innerText += Number(clickedKey);
            } else if (Number.isNaN(Number(expressionOutput.innerText[expressionOutput.innerText.length - 1])) === true) {
                expressionOutput.innerText += ' ' + Number(clickedKey);
            }
        } else {
            if (clickedKey === ".") {
                if (Number.isNaN(Number(expressionOutput.innerText[expressionOutput.innerText.length - 1])) === false) {
                    expressionOutput.innerText += '.';
                }
            } else if (splitted.length === 1 && splitted[0] !== "" && clickedKey !== "=") {
                expressionOutput.innerText += ' ' + clickedKey;
            } else if (clickedKey === "=") {
                if (splitted.length === 3) {
                    let firstNum = Number(splitted[0].trim());
                    let secondNum = Number(splitted[2].trim());
                    let operator = splitted[1].trim();

                    if (!operator || !firstNum || !secondNum) {
                        return;
                    } else if (operator === "+") {
                        resultOutput.innerText = firstNum + secondNum;
                    } else if (operator === "-") {
                        resultOutput.innerText = firstNum - secondNum;
                    } else if (operator === "*") {
                        resultOutput.innerText = firstNum * secondNum;
                    } else if (operator === "/") {
                        resultOutput.innerText = firstNum / secondNum;
                    } else {
                        resultOutput.innerText = 'NaN';
                    }
                } else {
                    if (splitted[0] !== "") {
                        resultOutput.innerText = 'NaN';
                    }
                }
            }
        }
    });
}