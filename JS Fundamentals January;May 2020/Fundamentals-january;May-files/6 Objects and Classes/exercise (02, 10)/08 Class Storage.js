let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };

class Storage {

    constructor(capacity) {
        this.storage = [];
        this.capacity = capacity;
        this.totalCost = 0;
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity = this.capacity - product.quantity;
        this.totalCost = this.totalCost + product.price * product.quantity;
    }

    getProducts() {
        let arrProducts = this.storage;
        /*for (let index in arrProducts) {
            return JSON.stringify(arrProducts[index]);
        }*/
        let jsonsArr = [];
        for (let index in arrProducts) {
            jsonsArr.push(JSON.stringify(arrProducts[index]));
        }

        return jsonsArr.join('\n');

    }
}

let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

/*
{"name":"Cucamber","price":1.5,"quantity":15}
{"name":"Tomato","price":0.9,"quantity":25}
{"name":"Bread","price":1.1,"quantity":8}
2
53.8
*/
