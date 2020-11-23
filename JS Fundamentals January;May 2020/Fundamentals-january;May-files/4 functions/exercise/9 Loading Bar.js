function solve(num) {
    if (num === 100) {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    } else {
        let percentageSignsCount = num / 10;
        let dotsCount = (100 - num) / 10;
        let result = '[';

        for (let i = 0; i < percentageSignsCount; i++) {
            result += '%';
        }

        for (let g = 0; g < dotsCount; g++) {
            result += '.';
        }

        console.log(num + '% ' + result + ']');
        console.log('Still loading...');
    }
}

solve(30);
solve(50);
solve(100);