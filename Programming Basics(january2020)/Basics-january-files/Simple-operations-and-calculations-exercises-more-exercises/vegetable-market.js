function solve(input) {
    let vegetablesKG = Number(input.shift());
    let fruitsKG = Number(input.shift());
    let vegetables = Number(input.shift());
    let fruits = Number(input.shift());

    let totalLeva = vegetables * vegetablesKG + fruits * fruitsKG;
    let totalEuro = totalLeva / 1.94;

    console.log(totalEuro.toFixed(2));
}

solve([
    "0.194",
    "19.4",
    "10",
    "10",
    "1.5",
    "2.5",
    "10",
    "10",
])