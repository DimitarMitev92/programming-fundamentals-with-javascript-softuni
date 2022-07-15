function movies(array) {
    let movies = [];
    for (let line of array) {
        let result = {};
        if (line.includes('addMovie')) {
            let movie = line.split('addMovie ')[1];
            result.name = movie;
            movies.push(result);
        } else if (line.includes('directedBy')) {
            let tokens = line.split(' directedBy ');
            let movie = tokens[0];
            let director = tokens[1];
            for (let currentMovie of movies) {
                if (currentMovie.name === movie) {
                    currentMovie.director = director;
                }
            }
        } else if (line.includes('onDate')) {
            let tokens = line.split(' onDate ');
            let movie = tokens[0];
            let date = tokens[1];
            for (let currentMovie of movies) {
                if (currentMovie.name === movie) {
                    currentMovie.date = date;
                }
            }
        }
    }
    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            let result = JSON.stringify(movie);
            console.log(result);
        }
    }
}