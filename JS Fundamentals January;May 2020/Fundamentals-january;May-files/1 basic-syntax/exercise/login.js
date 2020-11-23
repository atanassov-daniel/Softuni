function login(arr) {
    let username = arr[0];
    let pass = "";

    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i];
    }
    let password = pass;
    let currentPassword = 0;
    let triesCount = 0;
    while (currentPassword != password) {
        currentPassword = arr[triesCount + 1]
        triesCount++;
        if (triesCount === 4 && currentPassword != password) {
            console.log(`User ${username} blocked!`);
            break;
        }

        if (currentPassword != password) {
            console.log("Incorrect password. Try again.");
        } else {
            console.log(`User ${username} logged in.`);
            break;
        }
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny']);