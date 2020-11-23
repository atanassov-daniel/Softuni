function solve(arr) {

    function sort(a, b) {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else if (a.length === b.length) {
            return a.localeCompare(b);
        }
    }

    arr.sort(sort);
    console.log(arr.join('\n'));
}

solve(["alpha", "beta", "gamma"]);
//solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
solve(["test", "Deny", "omen", "Default"]);