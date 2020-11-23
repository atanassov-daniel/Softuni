solve = (array = []) => {

    const sum = (array) => {
        let sum = 0;
        array.forEach(num => sum += num);
        return sum;
    };

    const inverseSum = (array) => {
        let inverseSum = 0;
        array.forEach(num => inverseSum += (1 / num));
        return inverseSum;
    };

    const concat = (array) => {
        let concatenated = '';
        //array.map(element => element.toString()).forEach(string => concatenated += string);
        array.forEach(string => concatenated += string.toString());
        return concatenated;
    };

    console.log(sum(array));
    console.log(inverseSum(array));
    console.log(concat(array));
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);