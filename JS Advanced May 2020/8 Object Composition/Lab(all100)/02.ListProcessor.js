function solve(input = []) {
    let innerArray = [];

    input.forEach(command => {
        const splitted = command.split(' ');

        if (splitted.includes("print")) {
            console.log(innerArray.join(","));
        } else if (splitted.includes("add")) {
            innerArray.push(splitted[1]);
        } else if (splitted.includes("remove")) {
            innerArray = innerArray.filter(el => el !== splitted[1]);
        }
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']); // again,again
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']); // pesho, george