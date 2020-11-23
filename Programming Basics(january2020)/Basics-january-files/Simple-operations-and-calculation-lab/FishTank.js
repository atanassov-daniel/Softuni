function solve(input){
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());

    let volume = a * b* c;
    let volumeLitres = volume / 1000;

    let procent = Number(input.shift() / 100);

    let finalVolume = volumeLitres - volumeLitres * procent;

    let result = finalVolume.toFixed(3);

    console.log(result)

}

solve(["105", "77", "89", "18.5"])