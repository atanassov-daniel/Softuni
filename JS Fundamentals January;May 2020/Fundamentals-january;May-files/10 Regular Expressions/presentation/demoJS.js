let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

//let pattern = new RegExp('[A-Z][a-z]+', 'g');
let patternLiteral = /([A-Z])[a-z]+/;

let result = patternLiteral.test(text);
console.log(result); // true

let arrMatches = text.match(patternLiteral);
console.log(arrMatches);
/*  [
  'Lorem',
  'L',
  index: 0,
  input: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  groups: undefined
    ]   */

// pri patternLiteral СЪС /g накрая е : [ 'Lorem', 'Ipsum' ]

arrMatches = text.match(patternLiteral);
console.log(arrMatches);
/* ако пак му дам, пак същото връща, при .exec() обаче това не е така
[
  'Lorem',
  'L',
  index: 0,
  input: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  groups: undefined
]*/