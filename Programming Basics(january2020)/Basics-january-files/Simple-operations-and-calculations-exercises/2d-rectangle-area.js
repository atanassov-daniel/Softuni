function solve(input){
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
       
    let width = Math.abs(x1 - x2);
    let heigth = Math.abs(y2 - y1);

    let area = width * heigth;
    let perimeter = (width + heigth) * 2;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
// ако обърнем местата на x1 и x2 и на y няма нищо да се промени заради Math.abs
solve([
    `60`,
    `20`,
    `10`,
    `50`,
    '30',
    '40',
    '70',
    '-10',
    '600.25',
    '500.75',
    '100.50',
    '-200.5'


])