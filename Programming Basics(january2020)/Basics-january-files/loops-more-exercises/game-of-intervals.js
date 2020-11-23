function solve(input) {
    let tries = Number(input.shift());
    let result = 0;
    let first = 0;
    let second = 0;
    let third = 0;
    let fourth = 0;
    let fifth = 0;
    let sixth = 0;
    for (let i = 0; i < tries; i++) {
        let points = Number(input.shift());

        if (points < 0 || points > 50) {
            result /= 2;
            sixth++;
        } else if (points <= 9) {
            result += 0.2 * points;
            first++;
        } else if (points <= 19) {
            result += 0.3 * points;
            second++;
        } else if (points <= 29) {
            result += 0.4 * points;
            third++;
        } else if (points <= 39) {
            result += 50;
            fourth++;
        } else if (points <= 50) {
            result += 100;
            fifth++;
        }
    }
    console.log(result.toFixed(2))
    console.log(`From 0 to 9: ${(first / tries * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(second / tries * 100).toFixed(2)}% `);
    console.log(`From 20 to 29: ${(third / tries * 100).toFixed(2)}% `);
    console.log(`From 30 to 39: ${(fourth / tries * 100).toFixed(2)}% `);
    console.log(`From 40 to 50: ${(fifth / tries * 100).toFixed(2)}% `);
    console.log(`Invalid numbers: ${(sixth / tries * 100).toFixed(2)}% `);
}

solve([
   //"10",
   //"43",
   //"57",
   //"-12",
   //"23",
   //"12",
   //"0",
   //"50",
   //"40",
   //"30",
   //"20",
    "3",
    "12",
    "-23",
    "46",
])