function solve(input) {
        let number = Number(input.shift());
        let inputType = input.shift();
        let outputType = input.shift();

        let result = 0;
        if (inputType === "mm") {
            if(outputType === "cm"){
                result = number / 10;
            } else {
                result = number / 1000;
            }
        } else if (inputType === "cm"){
            if(outputType === "mm"){
                result = number * 10;
            } else {
                result = number / 100;
            }
        } else if (inputType === "m") {
            if(outputType === "mm"){
                result = number * 1000;
            } else {
                result = number * 100;
            }
        }
        console.log(result.toFixed(3));
}

solve([
    "12",
    "mm",
    "m",
    "150",
    "m",
    "cm",
    "45",
    "cm",
    "mm"
])