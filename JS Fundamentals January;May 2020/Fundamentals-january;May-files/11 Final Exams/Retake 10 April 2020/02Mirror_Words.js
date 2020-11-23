function solve(input) {
    let string = input.shift();

    let pattern = /(?<symbol>[@#])(?<word1>[A-Za-z]{3,})\k<symbol>\k<symbol>(?<word2>[A-Za-z]{3,})\k<symbol>/g;

    let arrHiddenWordPairs = string.match(pattern);
    let arrMirrorWordPairs = [];


    if (arrHiddenWordPairs !== null) {

        for (const pair of arrHiddenWordPairs) {
            let currentMatch = pattern.exec(string);

            let word1 = currentMatch.groups.word1;
            let word2 = currentMatch.groups.word2;
            let reversedWord2 = word2.split('').reverse().join('');

            if (word1 === reversedWord2) {
                let result = `${word1} <=> ${word2}`;
                arrMirrorWordPairs.push(result);
            }
        }

        console.log(`${arrHiddenWordPairs.length} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }


    if (arrMirrorWordPairs.length > 0) {
        console.log(`The mirror words are:\n${arrMirrorWordPairs.join(', ')}`);
    } else {
        console.log('No mirror words!');
    }
}

//solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);

//solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);

solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);