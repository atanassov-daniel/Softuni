function solve(input) {
    let sum = Number(input.shift());
    let command = input.shift();
    let cash = 0;
    let cashCount = 0;
    let card = 0;
    let cardCount = 0;
    let isEnough = false;
    let count = 0;
    let begin = 0;

    while (command != "End") {

        if (sum <= 0) {
            isEnough = true;
            break;
        }

        command = Number(command);

        if (count % 2 == 0) {
            if (command > 100) {
                console.log("Error in transaction!");
            } else {
                cash += command;
                cashCount++;
                sum -= command;
                console.log("Product sold!");
            }
        } else if (count % 2 == 1) {
            if (command < 10) {
                console.log("Error in transaction!");
            } else {
                card += command;
                cardCount++;
                sum -= command;
                console.log("Product sold!");
            }
        }


        command = input.shift();
        count++;
    }
    if (isEnough == true) {
        console.log(`Average CS: ${(cash / cashCount).toFixed(2)}`);
        console.log(`Average CC: ${(card / cardCount).toFixed(2)}`);
    } else {
        console.log("Failed to collect required money for charity.");
    }
}

solve([
    "500",
    "120",
    "8",
    "63",
    "256",
    "78",
    "317",

    //"600",
    //"86",
    //"150",
    //"98",
    //"227",
    //"End"
])