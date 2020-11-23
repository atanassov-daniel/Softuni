function solve() {
    return {
        init(selector1, selector2, resultSelector) {
            this.selector1 = document.querySelector(selector1);
            this.selector2 = document.querySelector(selector2);
            this.resultSelector = document.querySelector(resultSelector);
        },
        add() {
            this.resultSelector.value = Number(this.selector1.value) + Number(this.selector2.value);
        },
        subtract() {
            this.resultSelector.value = Number(this.selector1.value) - Number(this.selector2.value);
        }
    };
}

document.body.innerHTML = '<input type="text" id="num1" />' +
    '<input type="text" id="num2" />' +
    '<input type="text" id="result" readonly />';

let obj = solve();

obj.init("#num1", "#num2", '#result');
let num1 = $('#num1');
let num2 = $('#num2');
let res = $('#result');

// Test 1
num1.val(5);
num2.val(3);
obj.add();
console.log(res.val() === -8);

// Test 2
num1.val(-13);
num2.val(5);
obj.subtract();
console.log(res.val() === -18);