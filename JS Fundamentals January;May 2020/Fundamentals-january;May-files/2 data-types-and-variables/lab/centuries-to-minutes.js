function convertCenturies(centuriesCount) {
    let years = centuriesCount * 100;
    let days = Math.floor(years * 365.2422);//или Math.trunc
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${centuriesCount} centuries = ${
        years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

convertCenturies(1);