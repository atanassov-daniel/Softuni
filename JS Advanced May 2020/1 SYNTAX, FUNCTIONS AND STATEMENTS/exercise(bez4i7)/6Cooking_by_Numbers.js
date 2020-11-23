function solve(input) {
    let number = Number(input.shift());

    for (const operation of input) {
        if (operation === 'chop') {
            number /= 2;
        } else if (operation === 'dice') {
            number = Math.sqrt(number);
        } else if (operation === 'spice') {
            number += 1;
        } else if (operation === 'bake') {
            number *= 3;
        } else if (operation === 'fillet') {
            number *= 0.8;
        }

        console.log(number);
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);