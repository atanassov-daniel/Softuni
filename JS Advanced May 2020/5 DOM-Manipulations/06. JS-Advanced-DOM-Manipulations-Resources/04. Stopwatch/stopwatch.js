function stopwatch() {
    let startButton = document.getElementById("startBtn");
    let stopButton = document.getElementById("stopBtn");
    let time = document.getElementById("time");


    startButton.addEventListener("click", (e) => {
        time.innerText = "00:00";

        
        intervalID = setInterval(
            function () {
                console.log("1 sec. passed");

                let splitted = time.innerText.split(":");
                console.log(splitted);
                let seconds = Number(splitted[1]);
                let minutes = Number(splitted[0]);
                seconds++;


                if (minutes == 0) {
                    if (seconds < 10) {
                        time.innerText = '00:0' + seconds;
                    } else if (seconds < 60) {
                        time.innerText = '00:' + seconds;
                    } else if (seconds >= 60) {

                        if (seconds % 60 === 0) {
                            minutesToAdd = seconds / 60;

                            var secToAdd;
                            if (seconds % 60 < 10) {
                                secToAdd = ':0' + seconds % 60;
                            } else if (seconds % 60 < 60) {
                                secToAdd = ':' + seconds % 60;
                            }


                            if (minutes < 10) {
                                time.innerText = '0' + minutesToAdd + secToAdd;
                            } else if (minutes < 99) {
                                time.innerText = minutesToAdd + secToAdd;
                            }

                        } else {

                        }
                    }
                } else {
                    //if (seconds >= 60) {

                    if (seconds % 60 === 0) {
                        minutesToAdd = seconds / 60;

                        var secToAdd;
                        if (seconds % 60 < 10) {
                            secToAdd = ':0' + seconds % 60;
                        } else if (seconds % 60 < 60) {
                            secToAdd = ':' + seconds % 60;
                        }


                        if (minutes < 9) {
                            time.innerText = '0' + (minutes + minutesToAdd) + secToAdd;
                        } else if (minutes < 99) {
                            time.innerText = (minutes + minutesToAdd) + secToAdd;
                        }

                    } else {
                        var secToAdd;
                        if (seconds % 60 < 10) {
                            secToAdd = ':0' + seconds % 60;
                        } else if (seconds % 60 < 60) {
                            secToAdd = ':' + seconds % 60;
                        }


                        if (minutes < 10) {
                            time.innerText = '0' + minutes + secToAdd;
                        } else if (minutes <= 99) {
                            time.innerText = minutes + secToAdd;
                        }
                    }
                    //}

                }
            },
            1000
        );



        startButton.setAttribute("disabled", "true");
        stopButton.removeAttribute("disabled");
    });

    stopButton.addEventListener("click", (e) => {
        clearInterval(intervalID);
        
        stopButton.setAttribute("disabled", "true");
        startButton.removeAttribute("disabled");
    });
}