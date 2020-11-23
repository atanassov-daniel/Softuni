let result = (function solve() {
    return {
        add(a, b) {
            return [a[0] + b[0], a[1] + b[1]];
        },
        multiply(a, scalar) {
            return [a[0] * scalar, a[1] * scalar];
        },
        length(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2));
        },
        dot(a, b) {
            //return a[0] * a[1] + b[0] * b[1]; - аз бях написал това, защото в документа е написана формулата така
            // това е от фунцкията на Ангел Златанов:
            /*
            vectorMath = {
                add: ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2],
                multiply: (vector, scalar) => vector.map((n) => n * scalar),
                length: ([x, y]) => Math.sqrt(x ** 2 + y ** 2),
                dot: ([x1, y1], [x2, y2]) => x1 * x2 + y1 * y2,
                cross: ([x1, y1], [x2, y2]) => x1 * y2 - y1 * x2,
            };
            */
            return a[0] * b[0] + a[1] * b[1];

            // https://www.mathsisfun.com/algebra/vectors-dot-product.html -> там е направено със същата формула, със която го е направил и Ангел, значи в документа просто е сбъркано :  `a · b = ax × bx + ay × by`
        },
        cross(a, b) {
            return a[0] * b[1] - b[0] * a[1];
        }
    };
})();
/*
result.add([1, 1], [1, 0]); // [2, 1]
result.multiply([3.5, -2], 2); // [7, -4]
result.length([3, -4]); // 5
result.dot([1, 0], [0, -1]); // 0
result.cross([3, 7], [1, 0]); // -7
*/
console.log(result.dot([2, 3], [2, -1]));

a = a.map(el => Math.abs(el));
b = b.map(el => Math.abs(el));