// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(function(movie){
    return movie.director;
  });
  console.log("Exercise 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(function(movie) {
    return movie.director === director;
  })

  console.log(`Exercise 2 -> director${director}`, result)
  return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(moviesArray, director) {
  const directorMovies = getMoviesFromDirector(moviesArray, director)

  if (directorMovies.length === 0) return 0;

  const totalScore = directorMovies.reduce((acc, movie) => acc + movie.score, 0)
  const average = totalScore / directorMovies.length;

  return Number(average.toFixed(2));

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
