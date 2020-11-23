function printDayOfWeek(number) {
    let dayOfWeek = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday', 'Sunday'
    ]

    if (number > dayOfWeek.length || number < 1) {
        console.log('Invalid day!');
    } else {
        console.log(dayOfWeek[number - 1]);
    }
}

printDayOfWeek(0)