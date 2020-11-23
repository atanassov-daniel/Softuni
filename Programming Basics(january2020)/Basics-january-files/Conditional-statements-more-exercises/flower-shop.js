function solve(input) {
    let magnolii = Number(input.shift());
    let zumbuli = Number(input.shift());
    let roses = Number(input.shift());
    let cactuses = Number(input.shift());
    let presentPrice = Number(input.shift());

    let sum = magnolii * 3.25 + zumbuli * 4 + roses * 3.50 + cactuses * 8;
    let final = 0.95 * sum;
    if (final >= presentPrice) {
        console.log(`She is left with ${Math.floor(final - presentPrice)} leva.`)
    } else {
        console.log(`She will have to borrow ${Math.ceil(presentPrice - final)} leva.`)
    }
}

solve([
    "2",
    "3",
    "5",
    "1",
    "50",
    "15",
    "7",
    "5",
    "10",
    "100 ",
])