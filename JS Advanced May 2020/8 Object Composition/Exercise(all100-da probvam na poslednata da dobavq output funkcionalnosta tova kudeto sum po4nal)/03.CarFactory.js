function solve(car) {
    const wheelsize = (size) => size % 2 !== 0 ? size : size - 1;
    
    let result = {
        model: car.model,
        engine: {},
        carriage: {
            type: car.carriage,
            color: car.color
        },
        wheels: Array(4).fill(wheelsize(car.wheelsize))
    };

    if (car.power <= 90) {
        result.engine.power = 90;
        result.engine.volume = 1800;
    } else if (car.power <= 120) {
        result.engine.power = 120;
        result.engine.volume = 2400;
    } else if (car.power <= 200) {
        result.engine.power = 200;
        result.engine.volume = 3500;
    }

    return result;
}

solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
/*
{ model: 'VW Golf II',
  engine: { power: 90,
            volume: 1800 },
  carriage: { type: 'hatchback',
              color: 'blue' },
  wheels: [13, 13, 13, 13] } */
solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});
/*
{ model: 'Opel Vectra',
  engine: { power: 120,
            volume: 2400 },
  carriage: { type: 'coupe',
              color: 'grey' },
  wheels: [17, 17, 17, 17] } */