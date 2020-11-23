function solve(input) {
    let product = input.shift();
    let town = input.shift();
    let quantity = Number(input.shift());

    let result = 0

    if (product === "coffee") {
        if (town === "Sofia") {
            result = quantity * 0.50;
        } else if (town === "Plovdiv") {
            result = quantity * 0.40;
        } else if (town === "Varna") {
            result = quantity * 0.45;
        }
    } else if (product === "water") {
        if (town === "Sofia") {
            result = quantity * 0.80;
        } else if (town === "Plovdiv") {
            result = quantity * 0.70;
        } else if (town === "Varna") {
            result = quantity * 0.70;
        }
    } else if (product === "beer") {
        if (town === "Sofia") {
            result = quantity * 1.20
        } else if (town === "Plovdiv") {
            result = quantity * 1.15
        } else if (town === "Varna") {
            result = quantity * 1.10
        }
    } else if (product === "sweets") {
        if (town === "Sofia") {
            result = quantity * 1.45
        } else if (town === "Plovdiv") {
            result = quantity * 1.30
        } else if (town === "Varna") {
            result = quantity * 1.35
        }
    } else if (product === "peanuts") {
        if (town === "Sofia") {
            result = quantity * 1.60
        } else if (town === "Plovdiv") {
            result = quantity * 1.50
        } else if (town === "Varna") {
            result = quantity * 1.55
        }
    }

    console.log(result)
}

solve([
    "coffee",
    "Varna",
    "2",
    "peanuts",
    "Plovdiv",
    "1",
    "beer",
    "Sofia",
    "6",
    "water",
    "Plovdiv",
    "3",
    "sweets",
    "Sofia",
    "2.23"
])

/*
if (town === "Sofia") {
        if(product === coffee)
    } else if (town === "Plovdiv") {

    } else if (town === "Varna") {

    }
*/