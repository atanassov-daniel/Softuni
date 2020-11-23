function solve(input) {
    let town = input.shift();
    let sales = Number(input.shift());
    let comission = 0;

    if (sales < 0) {
        comission = "error";
    } else if (sales <= 500) {
        switch (town) {
            case "Sofia":
                comission = 0.05 * sales; break;
            case "Varna":
                comission = 0.045 * sales; break;
            case "Plovdiv":
                comission = 0.055 * sales; break;
            default:
                 comission = "error"; break;
        }
    } else if (sales <= 1000) {
        switch (town) {
            case "Sofia":
                comission = 0.07 * sales; break;
            case "Varna":
                comission = 0.075 * sales; break;
            case "Plovdiv":
                comission = 0.08 * sales; break;
            default: 
            comission = "error"; break;
        }
    } else if (sales <= 10000) {
        switch (town) {
            case "Sofia":
                comission = 0.08 * sales; break;
            case "Varna":
                comission = 0.10 * sales; break;
            case "Plovdiv":
                comission = 0.12 * sales; break;
            default: 
            comission = "error"; break;
        }
    } else if (sales > 10000) {
        switch (town) {
            case "Sofia":
                comission = 0.12 * sales; break;
            case "Varna":
                comission = 0.13 * sales; break;
            case "Plovdiv":
                comission = 0.145 * sales; break;
            default:
                comission = "error"; break;
        }
    }

    if (typeof comission === 'string') {
        console.log(comission)
    } else {
        console.log(comission.toFixed(2));
    }
}

solve([
    //"Sofia",
    //"1500",
    //"Plovdiv",
    //"499.99",
    //"Varna",
    //"3874.50",
    //"Kaspichan",
    "Varna",
    "-50"
])