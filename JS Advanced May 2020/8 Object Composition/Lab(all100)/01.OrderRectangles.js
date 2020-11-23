function solve(inputArray) {
    let result = [];

    inputArray.forEach(triangle => result.push({
        width: triangle[0],
        height: triangle[1],
        area: function () {
            return this.width * this.height;
        },
        compareTo: function (otherTriangle) {
            return otherTriangle.area() - this.area() || otherTriangle.width - this.width;
        }
    }));

    result.sort((a, b) => a.compareTo(b));
    return result;
}

let sizes = [
    [1, 20],
    [20, 1],
    [5, 3],
    [5, 3]
];

let sortedRectangles = solve(sizes);
sortedRectangles.forEach(rect => console.log(rect));

console.log(sortedRectangles[0].compareTo(sortedRectangles[1])); // < 0
console.log(sortedRectangles[1].compareTo(sortedRectangles[0])); // > 0

console.log(sortedRectangles[1].compareTo(sortedRectangles[2])); // < 0
console.log(sortedRectangles[2].compareTo(sortedRectangles[1])); // > 0

console.log(sortedRectangles[2].compareTo(sortedRectangles[3])); // == 0
console.log(sortedRectangles[2].compareTo(sortedRectangles[2])); // == 0

/*solve([
    [10, 5],
    [5, 12]
]);*/
/* [{width:5, height:12, area:function(), compareTo:function(other)},
{width:10, height:5, area:funciton(),compareTo:function(other)}] */
/*solve([
    [10, 5],
    [3, 20],
    [5, 12]
]);*/
/* [{width:5, height:12, area:function(), compareTo:function(other)},
   {width:3, height:20, area:funciton(),compareTo:function(other)},
   {width:10, height:5, area:funciton(),compareTo:function(other)}]]*/