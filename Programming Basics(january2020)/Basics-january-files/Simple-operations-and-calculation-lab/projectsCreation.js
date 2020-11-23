function solve(input){
    let name = input.shift();
    let projects = Number(input.shift());

    let time = projects * 3;

    console.log(`The architect ${name} will need ${time} hours to complete ${projects} project/s.`)
}

solve(["George", "4"])