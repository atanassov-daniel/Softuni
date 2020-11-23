function solve(input) {
    let day = Number(input.shift());
    let result = 0
    
    switch (day) {
        case 1: result = "Monday"; break;
        case 2: result = "Tuesday"; break;
        case 3: result = "Wednesday"; break;
        case 4: result = "Thursday"; break;
        case 5: result = "Friday"; break;
        case 6: result = "Saturday"; break;
        case 7: result = "Sunday"; break;
        default: result = "Error";
    }
    console.log(result);
}

solve([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "-1"
])

/*
if (day === 1) {
    result = "Monday"
} else if (day === 2) {
    result ="Tuesday"
} else if (day === 3) {
    result = "Wednesday"
} else if (day === 4) {
    result = "Thursday"
} else if (day === 5) {
    result = "Friday"
} else if (day === 6) {
    result = "Saturday"
} else if (day === 7) {
    result = "Sunday"
} else {
    result = "Error"
}
*/