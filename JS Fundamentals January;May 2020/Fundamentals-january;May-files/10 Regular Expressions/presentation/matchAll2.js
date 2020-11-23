let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

let patternLiteral = /(?<firstLetter>[A-Z])[a-z]+/g;

let matches = text.matchAll(patternLiteral);

let nextMatch = matches.next();
console.log(nextMatch.value);

nextMatch = matches.next();
if (!nextMatch.done) {
    console.log(nextMatch.value);
}