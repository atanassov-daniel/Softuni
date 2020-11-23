function solve(input) {
    input = input.split('').reverse().join('');
    let half = input.length / 2;
    let firstSubstring = input.substring(half);
    let secondSubstring = input.substring(0, half);

    console.log(firstSubstring);
    console.log(secondSubstring);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');