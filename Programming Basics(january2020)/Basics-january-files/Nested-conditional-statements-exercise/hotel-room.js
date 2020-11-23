function solve(input) {
    let month = input.shift();
    let nights = input.shift();

    let studioNight = 0
    let apartmentNight = 0
    let priceStudio = 0
    let priceApartment = 0
    if (month === "May" || month === "October") {
        studioNight = 50;
        apartmentNight = 65;
        priceStudio = nights * studioNight;
        priceApartment = nights * apartmentNight;
        if (nights > 14) {
            priceStudio = 0.7 * priceStudio;
        } else if (nights > 7) {
            priceStudio = 0.95 * priceStudio;
        }
    } else if (month === "June" || month === "September") {
        studioNight = 75.20;
        apartmentNight = 68.70;
        priceStudio = nights * studioNight;
        priceApartment = nights * apartmentNight;
        if (nights > 14) {
            priceStudio = 0.8 * priceStudio;
        }
    } else if (month === "July" || month === "August") {
        studioNight = 76;
        apartmentNight = 77;
        priceStudio = nights * studioNight;
        priceApartment = nights * apartmentNight;
    }
    if (nights > 14) {
        priceApartment = 0.9 * priceApartment;
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}

solve([
    "May",
    "15",
    "June",
    "14",
    "August",
    "20"
])