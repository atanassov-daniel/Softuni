function solve(input) {
    let animal = input.shift();
    let animalType = 0;

    switch (animal) {
        case "dog": animalType = "mammal"; break;
        case "snake": 
        case "crocodile" :
        case "tortoise" :
        animalType = "reptile"; break;
        default : animalType = "unknown"; break;
    }
    console.log(animalType)
}

solve([
    "dog",
    "snake",
    "cat",
])