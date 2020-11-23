function ticketPrice(typeOfDay, age) {
    if (age >= 0) {
        if (age <= 18) {
            if (typeOfDay === "Weekday") {
                console.log("12$");
            } else if (typeOfDay === "Weekend") {
                console.log("15$");
            } else {
                console.log("5$");
            }
        } else if (age <= 64) {
            if (typeOfDay === "Weekday") {
                console.log("18$");
            } else if (typeOfDay === "Weekend") {
                console.log("20$");
            } else {
                console.log("12$");
            }
        } else if (age <= 122) {
            if (typeOfDay === "Weekday") {
                console.log("12$");
            } else if (typeOfDay === "Weekend") {
                console.log("15$");
            } else {
                console.log("10$");
            }
        } else {
            console.log("Error!");
        }
    } else {
        console.log("Error!");
    }
}

ticketPrice('Holiday', 15)