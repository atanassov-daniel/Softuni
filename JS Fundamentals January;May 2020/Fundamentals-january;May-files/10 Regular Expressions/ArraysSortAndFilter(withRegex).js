let sentence = 'It was a dark and stormy night';
let words = sentence.split(/\W+/);
console.log(words); // [ 'It', 'was', 'a', 'dark', 'and', 'stormy', 'night' ]

let longThreeOrMore = words.filter(word => word.length > 2);
console.log(longThreeOrMore); // [ 'was', 'dark', 'and', 'stormy', 'night' ]

//longThreeOrMore.sort((a, b) => a.length - b.length);
//console.log(longThreeOrMore); // [ 'was', 'and', 'dark', 'night', 'stormy' ]

longThreeOrMore.sort((a, b) => a.length - b.length || a.localeCompare(b));
console.log(longThreeOrMore); // [ 'and', 'was', 'dark', 'night', 'stormy' ]