function solve(area, vol, input) {
    input = JSON.parse(input);

    let output = [];
    for (const object of input) {
        for (const key in object) {
            object[key] = Math.abs(Number(object[key]));
        }

        output.push({
            area: area.apply(object),
            volume: vol.apply(object)
        });
    }

    return output;
}

solve(
    function area() {
        return this.x * this.y;
    },
    function vol() {
        return this.x * this.y * this.z;
    }, '[{"x":"10","y":"-22","z":"10"},{"x":"47","y":"7","z":"-5"},{"x":"55","y":"8","z":"0"},{"x":"100","y":"100","z":"100"},{"x":"55","y":"80","z":"250"}]'
);
//'[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]'