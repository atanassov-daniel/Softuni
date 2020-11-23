function solve(workerObject) {
    if (workerObject.dizziness === true) {
        workerObject.levelOfHydrated += 0.1 * workerObject.experience * workerObject.weight;
        workerObject.dizziness = false;
    }

    return workerObject;
}

solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}); // levelOfHydrated: 8, dizziness: false 
solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}); // levelOfHydrated: 440, dizziness: false 
solve({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}); // същото като параметъра