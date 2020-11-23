let contacts = new Map();
contacts.set('Ivan Draganov', '+5687125');
contacts.set('John Smith', '+7986632');
// Map { 'Ivan Draganov' => '+5687125', 'John Smith' => '+7986632' }
console.log(contacts.get('Ivan Draganov')); // +5687125
contacts.set('dragan', '+35986525');
contacts.delete('Ivan Draganov');
console.log(contacts); // Map { 'John Smith' => '+7986632', 'dragan' => '+35986525' }

// Map { 'John Smith' => '+7986632', 'dragan' => '+35986525' }
let values = contacts.values();
console.log(values); // [Map Iterator] { '+7986632', '+35986525' }
console.log(Array.from(values)); // [ '+7986632', '+35986525' ]

let entries = contacts.entries(); /* [Map Entries] {
    [ 'John Smith', '+7986632' ],
    [ 'dragan', '+35986525' ]
  }
*/
                                  //тук не е в обект, а на горното беше
console.log(Array.from(entries)); /*[ [ 'John Smith', '+7986632' ], [ 'dragan', '+35986525' ] ]*/