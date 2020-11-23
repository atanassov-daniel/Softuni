function solve(input){
    let tables = Number(input.shift());
    let length = Number(input.shift());
    let width = Number(input.shift());

    //Pokrivki
    let pokrivkaLength = length + 2 * 0.3;
    let pokrivkaWidth = width + 2 * 0.3;
    let pokrivkaArea = pokrivkaLength * pokrivkaWidth;

    //Kareta
    let kareSide = length / 2;
    let kare = kareSide * kareSide;

    let pokrivkas = tables;
    let kares = pokrivkas;

    //Ceni(poslednoto e sumata za m^2)
    let pricePokrivkas = pokrivkaArea * pokrivkas * 7;
    let priceKares = kare * kares * 9;

    let USD = pricePokrivkas + priceKares;
    //направих закръглянето чак на финала       let finalUSD = USD.toFixed(2);
    let BGN = USD * 1.85
//няма нужда от нея защото закръглям накрая     let BGN = finalUSD * 1.85;
    //закръглям накрая а и я няма горната       let finalBGN = BGN.toFixed(2);

    
    let printUSD = `${USD.toFixed(2)} USD`;
    let printBGN = `${BGN.toFixed(2)} BGN`;

    //вместо горното   let printUSD = `${finalUSD} USD`;
    //вместо горното   let printBGN = `${finalBGN} BGN`;

    console.log(printUSD);
    console.log(printBGN);
}
//4 от 16 теста в Judge не бяха излезли когато бях използвал закоментираните неща
solve([
    '10',
    '1.20',
    '0.65'
])