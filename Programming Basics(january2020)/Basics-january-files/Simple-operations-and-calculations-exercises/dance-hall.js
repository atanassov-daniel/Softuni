function solve(input){
    let hallLength = Number(input.shift());
    let hallWidth = Number(input.shift());
    let wardrobeA = Number(input.shift());

    let hallArea = hallLength * hallWidth;
    let wardrobeArea = wardrobeA * wardrobeA;
    let benchArea = hallArea / 10;

    let dancerArea = (7000 + 40) * 0.0001;

    let finalArea = hallArea - wardrobeArea - benchArea;

    let dancersNumber = finalArea / dancerArea;

    let printResult = Math.floor(dancersNumber);
    console.log(printResult)
}
// не знам защо в обясненията ги преобразуват в CM^2, на мен всичко си ми излиза правилно в метри
solve([
    '50',
    '25',
    '2'
])