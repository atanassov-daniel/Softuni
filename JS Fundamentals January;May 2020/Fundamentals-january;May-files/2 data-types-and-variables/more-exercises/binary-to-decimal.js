function convertBinaryToDecimal(bin) {
    let g = 0;
    let num = 0;
    let binary = 0;

    for (let i = bin.length - 1; i >= 0; i--) {
        num = Number(bin[i]);
        binary += num * Math.pow(2, g);
        g++;
    }
    console.log(binary);
}

convertBinaryToDecimal("00001001")