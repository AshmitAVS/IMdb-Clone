let favMovieList = JSON.parse(localStorage.getItem("FAVMOVIELIST")) || [];

// console.log(favMovieList);

// Display favorite movies
for (let i = 0; i < favMovieList.length; i++) {
    displayFavMovie(favMovieList[i]);
}

function displayFavMovie(movie) {
    const favContainer = document.getElementById("fav-movie-lists-container");
    // Create the HTML element for the added movie
    console.log(movie.Title);
    const div = document.createElement('div');
    div.classList.add('favmovieListDetails');
    div.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title}">
        <p>${movie.Title}</p>
        <p>${movie.Year}</p>
        <button class="remove-fav" removeID="${movie.imdbID}">Remove From Favourites</button>
    `;
    favContainer.appendChild(div);
}

// Add event listeners to each 'Remove From Favourites' button
const removeButtons = document.getElementsByClassName("remove-fav");

for (const button of removeButtons) {
    button.addEventListener("click", () => {
        // console.log(removeButtons);
        removeFromFav(button.getAttribute("removeID"));
    });
}

function removeFromFav(removeID) {
    // Remove the movie with the given ID from the favorites list
    favMovieList = favMovieList.filter(movie => movie.imdbID !== removeID);
    // Update the localStorage with the modified list
    localStorage.setItem('FAVMOVIELIST', JSON.stringify(favMovieList));
    // Remove the corresponding movie from the DOM
    const movieToRemove = document.querySelector(`[removeID="${removeID}"]`);
        if (movieToRemove) {
        // Retrieve the movie title
        const movieTitle = movieToRemove.parentElement.querySelector('p').innerText;
        // Remove the movie's parent element from the DOM
        movieToRemove.parentElement.remove();
        // Show an alert message with the removed movie's title
        alert(`${movieTitle} Will be Removed !`);
        }

}
