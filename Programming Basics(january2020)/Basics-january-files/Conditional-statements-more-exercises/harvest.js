function solve(input) {
    let x = Number(input.shift());  // area in square metres
    let y = Number(input.shift());  //kg grapes per square meter\
    let z = Number(input.shift());  //litres wine to be made
    let workers = Number(input.shift());

    let freeArea = x * 0.4;
    let grapeKG = freeArea * y;
    let wineLitres = grapeKG / 2.5;
    
    if(wineLitres < z){
        let result = Math.floor(z - wineLitres);
        console.log(`It will be a tough winter! More ${result} liters wine needed.`)
    }else{
        let result = Math.ceil(wineLitres - z)
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineLitres)} liters.`)
        console.log(`${result} liters left -> ${Math.ceil(result / workers)} liters per person.`)
    }
}

solve([
    "650",
    "2",
    "175",
    "3",
    "1020",
    "1.5",
    "425",
    "4",
])