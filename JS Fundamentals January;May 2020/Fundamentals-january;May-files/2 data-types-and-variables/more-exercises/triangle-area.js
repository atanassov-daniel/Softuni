function calculateTriangleArea(a, b, c) {
    let semiPerimeter = (a + b + c) / 2;
    let expressionToBeRooted =
        semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c);
    let result = Math.sqrt(expressionToBeRooted)
    console.log(result);
}

calculateTriangleArea(2, 3.5, 4)