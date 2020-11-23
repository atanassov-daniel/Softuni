function solve(){
    console.log("Meow");
}
// .name - for functions -> Returns the name of the function. Function names are read-only and can not be changed.
console.log(solve.name);

solve.age='2';
solve.color='black';
console.log(solve); // VS Code output ->   [Function: solve] { age: '2', color: 'black' }
// Quokka output ->   { [λ: solve] age: '2', color: 'black' }