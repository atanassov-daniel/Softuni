function solve(input) {
        let x = Number(input.shift());
        let y = Number(input.shift());
        let h = Number(input.shift());

        let backWall = x * x;
        let frontWall = backWall - 1.2 * 2;
        let sideWalls = 2 * (x * y - 1.5 * 1.5);
        let pokriv = 2 * x * y + x * h;

        let green = (backWall + frontWall + sideWalls) / 3.4;
        let red = pokriv / 4.3;

        console.log(green.toFixed(2));
        console.log(red.toFixed(2));
}

solve([
    "6",
    "10",
    "5.2",
    "10.25",
    "15.45",
    "8.88"       
])