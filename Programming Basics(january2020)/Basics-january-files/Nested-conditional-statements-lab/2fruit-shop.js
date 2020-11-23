function solve(input) {
    let fruit = input.shift();
    let day = input.shift();
    let quantity = Number(input.shift());

    let isWeekDay = (day === "Monday" || day === "Tuesday" || day === "Wednesday" ||
        day === "Thursday" || day === "Friday")

    let isWeekend = (day === "Saturday" || day === "Sunday");

    let result = 0;

    if (isWeekDay === true) {
        switch (fruit) {
            case "banana":
                result = quantity * 2.50; break;
            case "apple":
                result = quantity * 1.20; break;
            case "orange":
                result = quantity * 0.85; break;
            case "grapefruit":
                result = quantity * 1.45; break;
            case "kiwi":
                result = quantity * 2.70; break;
            case "pineapple":
                result = quantity * 5.50; break;
            case "grapes":
                result = quantity * 3.85; break;
            default:
                result = "error"; break;
        }
    } else if (isWeekend === true) {
        switch (fruit) {
            case "banana":
                result = quantity * 2.70; break;
            case "apple":
                result = quantity * 1.25; break;
            case "orange":
                result = quantity * 0.90; break;
            case "grapefruit":
                result = quantity * 1.60; break;
            case "kiwi":
                result = quantity * 3.00; break;
            case "pineapple":
                result = quantity * 5.60; break;
            case "grapes":
                result = quantity * 4.20; break;
            default:
                result = "error"; break;
        }
    } else {
        result = "error"
    }

    if (typeof result === 'string') {
        console.log(result)
    } else {
        console.log(result.toFixed(2));
    }
}// да намеря как се решава без TYPEOF

solve([
    //"apple",
    //"Tuesday",
    //"2",
    //"orange",
    //"Sunday",
    //"3",
    //"kiwi",
    //"Monday",
    //"2.5",
    //"grapes",
    //"Saturday",
    //"0.5",
    //"tomato",
    //"Monday",
    //"0.5",
    "apple",
    "Workday",
    "2"
])