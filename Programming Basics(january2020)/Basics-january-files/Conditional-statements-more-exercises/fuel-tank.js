function solve(input) {
    let fuelType = input.shift();
    let litresAvailable = Number(input.shift());

    if (litresAvailable >= 25) {
        switch (fuelType) {
            case "Diesel":
                console.log("You have enough diesel.")
                break;
            case "Gasoline":
                console.log("You have enough gasoline.")
                break;
            case "Gas":
                console.log("You have enough gas.")
                break;
            default:
                console.log("Invalid fuel!")
                break;
        }
    } else if (litresAvailable < 25) {
        switch (fuelType) {
            case "Diesel":
                console.log("Fill your tank with diesel!")
                break;
            case "Gasoline":
                console.log("Fill your tank with gasoline!")
                break;
            case "Gas":
                console.log("Fill your tank with gas!")
                break;
            default:
                console.log("Invalid fuel!")
                break;
        }
    }
}

solve([
    "Diesel",
    "10",
    "Gasoline",
    "40",
    "Gas",
    "25",
    "Kerosene",
    "200",
])