let map = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]]);
console.log(map); // Map { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4 }

let iterator = map.keys();
console.log(iterator); // [Map Iterator] { 'a', 'b', 'c', 'd' }

let nextElement = iterator.next();
/*console.log(nextElement); //{ value: 'a', done: false }

nextElement = iterator.next();
console.log(nextElement); // { value: 'b', done: false }

nextElement = iterator.next();
console.log(nextElement); // { value: 'c', done: false }

nextElement = iterator.next();
console.log(nextElement); // { value: 'd', done: false }

nextElement = iterator.next();
console.log(nextElement); //{ value: undefined, done: true }
*/
while (nextElement.done === false) {
    console.log(nextElement);

    nextElement = iterator.next();
}