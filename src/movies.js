// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(movies => {
        return movies.director
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenDrama = moviesArray.filter(dramaMovie => {
        return dramaMovie.director === 'Steven Spielberg' && dramaMovie.genre.includes('Drama')
    })
    return stevenDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;

    const avgScore =
        moviesArray.reduce((total, curr) => {
            if (typeof curr.score !== "number") {
                curr.score = 0;
            }

            return total + curr.score;
        }, 0) / moviesArray.length;

    return +avgScore.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (!moviesArray.length) {
        return 0
    }

    else {
        const subArray = moviesArray.filter(movie => movie.genre.includes('Drama') && (movie.score || movie.score > 0))
        if (!subArray.length) {
            return 0
        }
        else {
            const sumScores = subArray.reduce((sum, movieScore) => sum + movieScore.score, 0)
            return Math.round((sumScores / subArray.length) * 100) / 100
        }

    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let arrayCopy = [...moviesArray];
    return arrayCopy.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            let firstTitle = a.title.toLowerCase();
            let secondTitle = b.title.toLowerCase();
            if (firstTitle > secondTitle) {
                return 1;
            } else if (firstTitle < secondTitle) {
                return -1;
            } else {
                return 0;
            }
        }
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesSort = [...moviesArray]
    moviesSort = moviesSort.sort((a, b) => a.title.localeCompare(b.title))
    moviesSort.splice(20, moviesSort.length)
    moviesSort = moviesSort.map(movie => movie.title)
    return moviesSort
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map((movie) => {
        const splitHoursAndMins = movie.duration.replace(/[a-z]/gi, "").split(" ");

        const hours = +splitHoursAndMins[0] * 60;
        const minutes = splitHoursAndMins[1] ? +splitHoursAndMins[1] : 0;

        return { ...movie, duration: hours + minutes };
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null;

    const scoresPerYear = {};

    for (const movie of moviesArray) {
        if (!scoresPerYear[movie.year]) {
            scoresPerYear[movie.year] = [movie.score];
        } else {
            scoresPerYear[movie.year].push(movie.score);
        }
    }

    let highestAvg = 0;
    let bestYear;

    for (const year in scoresPerYear) {
        const avgForYear =
            scoresPerYear[year].reduce((total, curr) => total + curr, 0) /
            scoresPerYear[year].length;

        if (avgForYear > highestAvg) {
            highestAvg = avgForYear;
            bestYear = year;
        }
    }

    return `The best year was ${bestYear} with an average score of ${highestAvg}`;

}
