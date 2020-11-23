function solve(arr) {
    let splitted, movieToAdd, filmName, date, director;
    let movie = {};
    let moviesArray = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].includes('addMovie')) {
            filmName = arr[i].split('addMovie ')[1];
            //add the movie
            movie.name = filmName;
            moviesArray.push(movie);
        } else if (arr[i].includes('directedBy')) {
            splitted = arr[i].split(' directedBy ');
            filmName = splitted[0];
            director = splitted[1];
        } else if (arr[i].includes('onDate')) {
            splitted = arr[i].split(' onDate ');
            filmName = splitted[0];
            date = splitted[1];
        }
        movie = {};
        // for the 2 else if-s we have to use the following loop
        for (let index in moviesArray) {
            let includes = [];
            moviesArray.forEach(element => includes.push(Object.values(element).includes(filmName)));
            console.log(includes);

            if (Object.values(moviesArray[index]).includes(filmName)) {

                if (arr[i].includes('directedBy') === true && director !== undefined) {
                    moviesArray[index].director = director;
                    //moviesArray.push(movie);
                    break;
                } else if (arr[i].includes('onDate') === true && date !== undefined) {
                    moviesArray[index].date = date;
                    //moviesArray.push(movie);
                    break;
                }
                //break;
            } else {
                if (arr[i].includes('directedBy') === true && director !== undefined) {
                    movie.name = filmName;
                    movie.director = director;
                    moviesArray.push(movie);
                    break;
                } else if (arr[i].includes('onDate') === true && date !== undefined) {
                    movie.name = filmName;
                    movie.date = date;
                    moviesArray.push(movie);
                    break;
                }
                //break;
            }

            //index = 0;

        }
        movie = {};
    }
    console.log(moviesArray);
}

solve(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);