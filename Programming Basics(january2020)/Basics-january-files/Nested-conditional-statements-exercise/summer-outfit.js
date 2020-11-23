function solve(input) {
    let degrees = Number(input.shift());
    let timeOfDay = input.shift();

    let outfit = 0
    let shoes = 0

    if (degrees <= 18) {
        switch (timeOfDay) {
            case "Morning":
                outfit = "Sweatshirt"
                shoes = "Sneakers"
                break;
            case "Afternoon":
                outfit = "Shirt"
                shoes = "Moccasins"
                break;
            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                break;
        }
    } else if (degrees <= 24) {
        switch (timeOfDay) {
            case "Morning":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                break;
        }
    } else if (degrees >= 25) {
        switch (timeOfDay) {
            case "Morning":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon":
                outfit = "Swim Suit"
                shoes = "Barefoot"
                break;
            case "Evening":
                outfit = "Shirt"
                shoes = "Moccasins"
                break;
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}

solve([
    "16",
    "Morning",
    "22",
    "Afternoon",
    "28",
    "Evening"
])