function dateOfNextDay(year, month, day) {
    let date = new Date(year, month, day);
    let nextDay = new Date(year,month-1,date.getDate()+1)
    console.log(`${nextDay.getFullYear()}-${nextDay.getMonth()+1}-${nextDay.getDate()}`);
}

dateOfNextDay(2016, 9, 30)


/*
    let tomorrow=new Date(y,m-1,date.getDate()+1);
    console.log(`${tomorrow.getFullYear()}-${tomorrow.getMonth()+1}-${tomorrow.getDate()}`);*/
