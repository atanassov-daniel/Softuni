let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

let patternLiteral = /(?<firstLetter>[A-Z])[a-z]+/g;

let matches = text.matchAll(patternLiteral);
console.log(matches); // Object [RegExp String Iterator] {}

for (const match of matches) {
    console.log(match);
    /*[
        'Lorem',
        'L',
        index: 0,
        input: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        groups: [Object: null prototype] { firstLetter: 'L' }
      ]*/
    /*  [
        'Ipsum',
        'I',
        index: 6,
        input: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        groups: [Object: null prototype] { firstLetter: 'I' }
      ]*/
}