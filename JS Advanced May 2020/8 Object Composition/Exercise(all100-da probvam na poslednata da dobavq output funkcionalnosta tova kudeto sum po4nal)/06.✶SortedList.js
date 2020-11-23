function solve() {
    return  {
        list: [],
        add(element) {
            this.list.push(element);
            this.list.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
            }
        },
        get(index) {
            if (index >= 0 && index < this.list.length) {
                return this.list[index];
            }
        },
        get size() {
            return this.list.length;
        }
    };
}

let obj = solve();
console.log(obj);
obj.add(123);
console.log(obj);
console.log(obj.size);
obj.add(5);
console.log(obj);