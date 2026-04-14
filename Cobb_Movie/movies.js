// Define the Movie class
class Movie {
  // title, cast, description, rating
  #title;
  #cast;
  #description;
  #rating;

  constructor(title, cast, description, rating) {
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }

  // Method to update the rating of the movie
  updateRating(newRating) {
    this.#rating = newRating;
  }

  // Method to display the movie's information
  displayInfo() {
    const movieInfo = document.getElementById("movie-info");
    movieInfo.innerHTML += `
      <div class="movie-card">
        <h2 class="movie-title">${this.#title}</h2>
        <p class="movie-cast"><span class="label">Cast:</span> ${this.#cast.join(", ")}</p>
        <p class="movie-description"><span class="label">Description:</span> ${this.#description}</p>
        <p class="movie-rating"><span class="label">Rating:</span> ${this.#rating} / 10</p>
      </div>
    `;
  }

  get title() {
    return this.#title;
  }
}

// Test your implementation
const worldWarZ = new Movie(
  "World War Z",
  ["Brad Pitt", "Mireille Enos", "Daniella Kertesz"],
  "Former UN investigator Gerry Lane traverses the globe in a race against time to stop a zombie pandemic threatening to overrun humanity.",
  9.0
);

// Display the initial information of the movie
worldWarZ.displayInfo();

const movies = [worldWarZ];

function updateMovieRating(title, newRating) {
  const movie = movies.find(m => m.title === title);
  if (movie) {
    movie.updateRating(newRating);
    movie.displayInfo();
  }
}

// Update the rating of the movie
// Display the updated information of the movie
updateMovieRating("World War Z", 9.5);