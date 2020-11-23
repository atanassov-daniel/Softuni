function solve(input) {
    let poolVolume = Number(input.shift());
    let debitPipe1 = Number(input.shift());
    let debitPipe2 = Number(input.shift());
    let hours = Number(input.shift());

    let total = hours * (debitPipe1 + debitPipe2)
    if (total <= poolVolume) {
        let perc = total / poolVolume * 100
        let pipe1Perc = ((debitPipe1 * hours) / total * 100).toFixed(2);
        let pipe2Perc = ((debitPipe2 * hours) / total * 100).toFixed(2)
        console.log(
            `The pool is ${perc.toFixed(2)}% full. Pipe 1: ${pipe1Perc}%. Pipe 2: ${pipe2Perc}%.`);
    } else {
        let tooMuch = (total - poolVolume).toFixed(2)
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${tooMuch} liters.`);
    }
}

solve([
    "1000",
    "100",
    "120",
    "3",
    "100",
    "100",
    "100",
    "2.5",
])