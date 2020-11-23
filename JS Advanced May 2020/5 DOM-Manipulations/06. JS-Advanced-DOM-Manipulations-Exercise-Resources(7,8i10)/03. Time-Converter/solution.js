function attachEventsListeners() {
    let inputDays = document.getElementById("days");
    let inputHours = document.getElementById("hours");
    let inputMinutes = document.getElementById("minutes");
    let inputSeconds = document.getElementById("seconds");

    let obj = {
        //One day is equal to 24 hours/1440 minutes/86400 seconds.

        //case 1
        daysToHours(days) {
            return days * 24;
        },
        hoursToMinutes(hours) {
            return hours * 60;
        },
        minutesToSeconds(minutes) {
            return minutes * 60;
        },
        //case 2
        hoursToDays(hours) {
            return hours / 24;
        },
        //case 3
        minutesToHours(minutes) {
            return minutes / 60;
        },
        //case 4
        secondsToMinutes(seconds) {
            return seconds / 60;
        },
    };
    document.getElementById("daysBtn").addEventListener("click", (e) => {
        let days = Number(e.target.previousElementSibling.value);
        let hours = obj.daysToHours(days);
        console.log(hours);
        let minutes = obj.hoursToMinutes(hours);
        console.log(minutes);
        let seconds = obj.minutesToSeconds(minutes);
        console.log(seconds);

        inputHours.value = hours;
        inputMinutes.value = minutes;
        inputSeconds.value = seconds;
    });
    document.getElementById("hoursBtn").addEventListener("click", (e) => {
        let hours = Number(e.target.previousElementSibling.value);
        let days = obj.hoursToDays(hours);
        console.log(days);
        let minutes = obj.hoursToMinutes(hours);
        console.log(minutes);
        let seconds = obj.minutesToSeconds(minutes);
        console.log(seconds);

        inputDays.value = days;
        inputMinutes.value = minutes;
        inputSeconds.value = seconds;
    });
    document.getElementById("minutesBtn").addEventListener("click", (e) => {
        let minutes = Number(e.target.previousElementSibling.value);
        let hours = obj.minutesToHours(minutes);
        let days = obj.hoursToDays(hours);
        console.log(days);
        console.log(hours);
        let seconds = obj.minutesToSeconds(minutes);
        console.log(seconds);

        inputDays.value = days;
        inputHours.value = hours;
        inputSeconds.value = seconds;
    });
    document.getElementById("secondsBtn").addEventListener("click", (e) => {
        let seconds = Number(e.target.previousElementSibling.value);
        let minutes = obj.secondsToMinutes(seconds);
        let hours = obj.minutesToHours(minutes);
        let days = obj.hoursToDays(hours);
        console.log(days);
        console.log(hours);
        console.log(minutes);

        inputDays.value = days;
        inputHours.value = hours;
        inputMinutes.value = minutes;
    });
}


//let buttons = Array.from(document.getElementsByTagName("input")).filter(button => button.outerHTML.includes('type="button"'));