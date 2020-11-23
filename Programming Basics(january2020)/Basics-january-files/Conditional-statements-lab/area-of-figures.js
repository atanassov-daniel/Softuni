function solve(input){
    let type = input.shift();
    //let area = 0

    if(type === "square"){
        let a = Number(input.shift());
        let area = a * a; //    area = ...
        console.log(area.toFixed(3));
    } else if(type === "rectangle"){
        let a = Number(input.shift());
        let b = Number(input.shift());
        let area = a * b; //    area = ...
        console.log(area.toFixed(3));
    } else if(type === "circle"){
        let r = Number(input.shift());
        let area = Math.PI * r * r; // може и с Math.pow(r, 2)
        console.log(area.toFixed(3));
    } else if(type === "triangle"){         //може и само ELSE тука заради условието на задачата(получаваме 4 възможни входа)
        let side = Number(input.shift());
        let heightToSide = Number(input.shift());
        let area = (side * heightToSide) / 2; //    area = ...
        console.log(area.toFixed(3));
    }
    //console.log(area.toFixed(3));
}

solve([
    "square",
    "5",
    "rectangle",
    "7",
    "2.5",
   "circle",
    "6",
    "triangle",
    "4.5",
    "20"
])