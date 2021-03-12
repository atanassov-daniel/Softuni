// using the Module Revealing Pattern
function getAll() {
    const url = 'http://localhost:3000/books';

    return fetch(url)
        .then(resp => resp.json())
        .catch(error => console.log(error));
}

export default {
    getAll // we reval only this function
}; // that's for in case we want to have some private functions or something additional, a helper function for inside the module