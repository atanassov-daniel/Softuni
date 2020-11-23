function solve(input){
    let pass = input.shift();

    if(pass === "s3cr3t!P@ssw0rd"){
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

solve([
    "qwerty",
    "s3cr3t!P@ssw0rd",
    "s3cr3t!p@ss"
])