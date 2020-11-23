function solve(base, increment) {
    let width = base;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let step = 1;

    while (width > 0) {

        if (width - 2 > 0) {
            stone += (width - 2) * (width - 2) * increment;

            if (step % 5 === 0) {
                lapis += ((4 * width) - 4) * increment;
            } else {
                marble += ((4 * width) - 4) * increment;
            }
            step++;
        } else {
            gold = width * width;
        }

        width -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}

solve(11, 1)