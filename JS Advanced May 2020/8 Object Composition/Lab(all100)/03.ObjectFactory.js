function composeObject(input = '') {
    input = JSON.parse(input);

    let result = {};
    input.forEach(object => {
        Object.keys(object).forEach(key => {
            if (result[key] === undefined) {
                result[key] = object[key];
            }
        });
    });

    return result;
}

composeObject(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`); // { canMove: true, doors: 4, capacity: 5 }
composeObject(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`); // { canFly: true, canMove: true, doors: 4, capacity: 255, canLand: true }