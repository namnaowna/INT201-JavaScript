//65130500028 ธมลวรรณ ซิ้มเจริญ

class Movies {
  constructor() {
    this.movies = []
  }

  getAllMovies() {
    return this.movies
  }

  addMovie(title, director, year, genre) {
    if (!title || !director || !year || !genre) {
      return undefined
    }

    const duplicateMovie = this.movies.find(
      (movie) =>
        movie.title?.toLowerCase() === title?.toLowerCase() &&
        movie.director?.toLowerCase() === director?.toLowerCase()
    )

    if (duplicateMovie) {
      return undefined
    }

    const add = { title: title, director: director, year: year, genre: genre }
    return this.movies.push(add)
  }

  updateMovie(title, updatedDetails) {}

  deleteMovieByTitle(title) {}
}

module.exports = Movies
