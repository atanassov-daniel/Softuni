function solve(input) {
    let fruit = input.shift();
    let day = input.shift();
    let quantity = Number(input.shift());

    let isWeekDay = (day === "Monday" || day === "Tuesday" || day === "Wednesday" ||
        day === "Thursday" || day === "Friday")

    let isWeekend = (day === "Saturday" || day === "Sunday");

    let result = 0;

    if (isWeekDay === true) {
        if (fruit === "banana") {
            result = quantity * 2.50
        } else if (fruit === "apple") {
            result = quantity * 1.20
        } else if (fruit === "orange") {
            result = quantity * 0.85
        } else if (fruit === "grapefruit") {
            result = quantity * 1.45
        } else if (fruit === "kiwi") {
            result = quantity * 2.70
        } else if (fruit === "pineapple") {
            result = quantity * 5.50
        } else if (fruit === "grapes") {
            result = quantity * 3.85
        } else {
            result = "error"
        }
    } else if (isWeekend === true) {
        if (fruit === "banana") {
            result = quantity * 2.70
        } else if (fruit === "apple") {
            result = quantity * 1.25
        } else if (fruit === "orange") {
            result = quantity * 0.90
        } else if (fruit === "grapefruit") {
            result = quantity * 1.60
        } else if (fruit === "kiwi") {
            result = quantity * 3.00
        } else if (fruit === "pineapple") {
            result = quantity * 5.60
        } else if (fruit === "grapes") {
            result = quantity * 4.20
        }
    } else {
        result = "error"
    }
    if(typeof result === 'string'){
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
    "tomato",
    "Monday",
    "0.5"
])