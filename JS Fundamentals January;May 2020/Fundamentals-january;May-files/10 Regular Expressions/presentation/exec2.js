let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

let patternLiteral = /(?<firstLetter>[A-Z])[a-z]+/g;

let result = patternLiteral.exec(text);
while (result) {
    console.log(result);
    console.log(result[0]);
    console.log(result.groups.firstLetter);

    result = patternLiteral.exec(text);
}
