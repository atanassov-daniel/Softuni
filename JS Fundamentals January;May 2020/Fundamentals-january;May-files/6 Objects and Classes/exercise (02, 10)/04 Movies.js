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



        //for (let index in moviesArray) {
        /*let includesArr = [];
        moviesArray.forEach(element => includesArr.push(Object.values(element).includes(filmName)));*/



        /*let indexOfTrue;
        for (let g = 0; g < includesArr.length; g++) {

            if (includesArr[g] === true) {
                indexOfTrue = g;
                break;
            }
        }*/


        //includesArr.forEach(check)
        /*let check = function (element) {
            if (element === true) {

            }
        };*/

        //indexOfTrue = undefined;

        let indexOfFilm;
        for (let g = 0; g < moviesArray.length; g++) {
            if (Object.values(moviesArray[g]).includes(filmName) === true) {
                indexOfFilm = g;
                break;
            }
        }
        //indexOfFilm = undefined;

        if (indexOfFilm !== undefined) {

            if (arr[i].includes('directedBy') === true && director !== undefined) {
                moviesArray[indexOfFilm].director = director;
            } else if (arr[i].includes('onDate') === true && date !== undefined) {
                moviesArray[indexOfFilm].date = date;
            }
        } else if (indexOfFilm === undefined) {

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


        /*if (Object.values(moviesArray[index]).includes(filmName)) {

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
    }*/

        //index = 0;

        //}
        //movie = {};
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