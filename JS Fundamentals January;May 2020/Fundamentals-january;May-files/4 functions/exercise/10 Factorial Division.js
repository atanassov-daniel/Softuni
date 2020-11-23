function factorialDivision(integer1, integer2) {

    function factorialOfInteger(num) {
        let factorial = 1;
        for (let i = num; i > 0; i--) {
            factorial *= i;
        }

        return factorial;
    }

    let division = factorialOfInteger(integer1) / factorialOfInteger(integer2);
    console.log(division.toFixed(2));
}

factorialDivision(6, 2);