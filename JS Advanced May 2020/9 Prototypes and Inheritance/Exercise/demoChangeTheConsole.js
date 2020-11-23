// Stub the console
var oldConsole = console.log;
var log = [];
console.log = function (string) {
  log.push(string);
};
// Restore the console
console.log = oldConsole;


function compareArrays(array1, array2, message) {
  expect(array1.length).to.equal(array2.length, message);
  for (let i = 0; i < array1.length; i++) {
      expect(array1[i]).to.equal(array2[i], message);
  }
}