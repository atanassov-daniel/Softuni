solve = (string) => {
    let wordsArr = string.match(/\w+/g);
    let uppercaseArr = wordsArr.map(word => word.toUpperCase());
    let result = uppercaseArr.join(', ');
    console.log(result);
};

solve('Hi, how are you?');
solve('hello');