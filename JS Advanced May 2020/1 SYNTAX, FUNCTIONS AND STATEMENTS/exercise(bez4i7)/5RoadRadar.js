function solve(input) {
    let [currentSpeed, area] = input;
    let speedingSeverity = 0;

    if (area === 'motorway') {
        let maxSpeed = 130;

        if (currentSpeed > maxSpeed) {
            speedingSeverity = currentSpeed - maxSpeed;
        }
    } else if (area === 'interstate') {
        let maxSpeed = 90;

        if (currentSpeed > maxSpeed) {
            speedingSeverity = currentSpeed - maxSpeed;
        }
    } else if (area === 'city') {
        let maxSpeed = 50;

        if (currentSpeed > maxSpeed) {
            speedingSeverity = currentSpeed - maxSpeed;
        }
    } else if (area === 'residential') {
        let maxSpeed = 20;

        if (currentSpeed > maxSpeed) {
            speedingSeverity = currentSpeed - maxSpeed;
        }
    }

    if (speedingSeverity === 0) {} else if (speedingSeverity <= 20) {
        console.log('speeding');
    } else if (speedingSeverity <= 40) {
        console.log('excessive speeding');
    } else {
        console.log('reckless driving');
    }
}

solve([40, 'city']);
solve([21, 'residential']);
solve([120, 'interstate']);
solve([200, 'motorway']);