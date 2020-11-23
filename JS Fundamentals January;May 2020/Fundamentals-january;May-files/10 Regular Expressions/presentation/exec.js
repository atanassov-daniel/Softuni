let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

let patternLiteral = /([A-Z])[a-z]+/g;

let result = patternLiteral.exec(text);
console.log(result);
/* това е без 'g': [
    'Lorem',
    'L',
    index: 0,
    input: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    groups: undefined
]  -> това е същото като в demoJS.js
*/

// .exec() е по-умен от .match()-а, като сложа 'g':
result = patternLiteral.exec(text);
console.log(result);
/* дава следващия мач:
[
  'Ipsum',
  'I',
  index: 6,
  input: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  groups: undefined
]*/

result = patternLiteral.exec(text);
console.log(result); // като свършат всичките връща 'null'