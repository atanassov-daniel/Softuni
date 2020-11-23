function solve(input) {
    let skumriqPrice = Number(input.shift());
    let cacaPrice = Number(input.shift());
    let palamudKilos = Number(input.shift());
    let safridKilos = Number(input.shift());
    let midiKilos = Number(input.shift());

    let palamudPrice = 1.6 * skumriqPrice;
    let safridPrice = 1.8 * cacaPrice;
    let midiPrice = 7.50;

    let total = palamudKilos * palamudPrice + safridKilos * safridPrice +
        midiKilos * midiPrice
    console.log(total.toFixed(2));
}

solve([
    "6.90",
    "4.20",
    "1.5",
    "2.5",
    "1",
    
    "5.55",
    "3.57",
    "4.3",
    "3.6",
    "7",
])