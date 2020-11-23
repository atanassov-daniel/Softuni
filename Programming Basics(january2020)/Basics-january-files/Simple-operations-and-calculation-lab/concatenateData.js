function solve(input){
    let firstName = input.shift();
    let lastName = input.shift();
    let age = Number(input.shift());
    let town = input.shift();

    let result = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;

    console.log(result);
}

solve(["Ivan", "Petrov", "27", "Sofia"])