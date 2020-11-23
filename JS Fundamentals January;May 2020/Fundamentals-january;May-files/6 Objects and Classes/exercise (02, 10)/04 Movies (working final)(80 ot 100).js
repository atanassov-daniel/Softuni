function solve(arr) {
    let splitted, filmName, date, director;
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


        let indexOfFilm;
        for (let g = 0; g < moviesArray.length; g++) {
            if (Object.values(moviesArray[g]).includes(filmName) === true) {
                indexOfFilm = g;
                break;
            }
        }
        //indexOfFilm = undefined;

        if (indexOfFilm !== undefined && arr[i].includes('addMovie') === false) {

            if (arr[i].includes('directedBy') === true && director !== undefined) {
                moviesArray[indexOfFilm].director = director;
            } else if (arr[i].includes('onDate') === true && date !== undefined) {
                moviesArray[indexOfFilm].date = date;
            }
        } else if (indexOfFilm === undefined && arr[i].includes('addMovie') === false) {

            if (arr[i].includes('directedBy') === true && director !== undefined) {
                movie.name = filmName;
                movie.director = director;
                moviesArray.push(movie);
            } else if (arr[i].includes('onDate') === true && date !== undefined) {
                movie.name = filmName;
                movie.date = date;
                moviesArray.push(movie);
            }
        }

        movie = {};
        //indexOfFilm = undefined;

    }

    for (const element of moviesArray) {
        if (Object.values(element).length === 3) {
            console.log(JSON.stringify(element));
        }
    }
}

solve(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);