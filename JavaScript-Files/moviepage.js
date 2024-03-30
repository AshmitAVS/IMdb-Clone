// https://omdbapi.com/?i=tt0286716&apikey=516fdd51

const moviecard = document.querySelector(".moviecard");
const movieid = localStorage.getItem('selectedMovieID');

async function movieDetails(movieid) {
    const url = `https://omdbapi.com/?i=${movieid}&apikey=516fdd51`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // Check if data is returned successfully
    if (data.Response === 'True') {
        const movieData = {
            name: data.Title,
            year: data.Year,
            img: data.Poster,
            // movieID: data.imdbID,
            actors: data.Actors,
            awards: data.Awards,
            boxoffice: data.BoxOffice,
            country: data.Country,
            dvd: data.DVD,
            director: data.Director,
            genre: data.Genre,
            language: data.Language,
            rating: data.imdbRating,
            plot: data.Plot,
            released: data.Released,
            runtime: data.Runtime,
            votes: data.imdbVotes,

        };
        moviecard.innerHTML = `
            <img src="${movieData.img}" alt="">
            <p>${movieData.name}</p>
            <p>Rating: ${movieData.rating}</p>
            <p>${movieData.awards}</p>
            <p>${movieData.year}</p>
            <p>${movieData.boxoffice}</p>
            <p>${movieData.country}</p>
            <p>${movieData.released}</p>
            <p>${movieData.director}</p>
            <p>${movieData.genre}</p>
            <p>${movieData.language}</p>
            <p>${movieData.plot}</p>
            <p>${movieData.runtime}</p>
            <p>${movieData.actors}</p>
        `;
    } else {
        console.error('Failed to fetch movie details.');
    }
}

movieDetails(movieid);


// Actors
// : 
// "Shah Rukh Khan, Rani Mukerji, Amitabh Bachchan"
// Awards
// : 
// "16 wins & 40 nominations"
// BoxOffice
// : 
// "$3,275,444"
// Country
// : 
// "India"
// DVD
// : 
// "17 Nov 2016"
// Director
// : 
// "Karan Johar"
// Genre
// : 
// "Drama, Romance"
// Language
// : 
// "Hindi, English"
// Metascore
// : 
// "N/A"
// Plot
// : 
// "Dev, a former football player is married to Rhea, a successful fashion editor. Maya is a kindergarten teacher who is married to Rishi, an outgoing event planner. These couples' lives intersect and they each question their own marr..."
// Poster
// : 
// "https://m.media-amazon.com/images/M/MV5BNjllNTM0ZWQtMDMyOS00Yzc5LWFlNGYtNTA3MzY0ZjY5YWRiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
// Production
// : 
// "N/A"
// Rated
// : 
// "Not Rated"
// Ratings
// : 
// (2) [{…}, {…}]
// Released
// : 
// "11 Aug 2006"
// Response
// : 
// "True"
// Runtime
// : 
// "193 min"
// Title
// : 
// "Kabhi Alvida Naa Kehna"
// Type
// : 
// "movie"
// Website
// : 
// "N/A"
// Writer
// : 
// "Karan Johar, Shibani Bathija, Niranjan Iyengar"
// Year
// : 
// "2006"
// imdbID
// : 
// "tt0449999"
// imdbRating
// : 
// "6.0"
// imdbVotes
// : 
// "21,372"