function Spy(target, method) {
    // не успях сам, това е чак след като гледах видеото лаб-а -"https://youtu.be/LBA4mwBFCXc?t=8080" на 2:14:40, преди това има и други интерсени решения за тази задача
    let obj = {
        count: 0
    };

    /*
    if (!target[method]) {
        throw new Error("No such method exists");
    }
    */

    let tempFunc = target[method];
    target[method] = function (...args) {
        obj.count++;
        return tempFunc.apply(target, args);
    };

    return obj;
}

let obj = {
    method: () => "invoked"
};
let spy = Spy(obj, 'method');
obj.method();
obj.method();
obj.method();
let actual = spy;
console.log(actual);
let expected = {
    count: 3
};
/*let spy = Spy({
        method: () => "invoked"
    },
    "method");*/

/*let spy = Spy({
        first: () => "output",
        second: () => " second output"
    },
    "second");
console.log(spy);*/