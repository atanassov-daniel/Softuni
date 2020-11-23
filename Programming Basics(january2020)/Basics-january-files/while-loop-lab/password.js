function solve(input) {
        let name = input.shift();
        let password = input.shift();
        let pass = input.shift();
        while (pass !== password) {
            pass = input.shift();
        }
        console.log(`Welcome ${name}!`)
}

solve([
    "Nakov",
    "1234",
    "pass",
    "1324",
    "1234",
    "Gosho",
    "secret",
    "secret",
])