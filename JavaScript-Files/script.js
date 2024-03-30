// http://www.omdbapi.com/?i=tt3896198&apikey=516fdd51
// https://www.omdbapi.com/?apikey=516fdd51&s=kabhi&page=1

const searchBox = document.getElementById("search-box");
const moviepage = document.getElementById("moviepage");
const favButtons = document.getElementsByClassName("fav-btn");
let favMovieList=JSON.parse(localStorage.getItem("FAVMOVIELIST")) || [];

async function movieLoad(moviename) {
    const url = `https://www.omdbapi.com/?apikey=516fdd51&s=${moviename}&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    moviepage.innerHTML = "";
    data.Search.forEach((item) => {
        // console.log(item.Title);
        const movieData = {
            name: item.Title,
            year: item.Year,
            img: item.Poster,
            movieID: item.imdbID,
        };
        const div = document.createElement('div');
        div.classList.add('movieListDetails');
        div.innerHTML = `
        <img src="${movieData.img}" alt="">
        <p>${movieData.name}</p>
        <p>${movieData.year}</p>
        <button class="fav-btn" imdbid="${movieData.movieID}">Add To Favourites</button>
        <button id="${movieData.movieID}" class="more"><a href="moviepage.html">More</a></button>
        `;
        moviepage.appendChild(div);
    });
    const moreButtons=document.getElementsByClassName("more");
    for (const morebutton of moreButtons) {
        morebutton.addEventListener("click", () => {
            localStorage.setItem('selectedMovieID', morebutton.getAttribute("id"));
        });
    }
    // Add event listeners to each 'Add To Favourites' button
    for (const button of favButtons) {
        button.addEventListener("click", () => {
            addToFavourite(button.getAttribute("imdbid"), data);
        });
    }
    
}

searchBox.addEventListener('keyup', (e) => {
    movieLoad(e.target.value);
});

function addToFavourite(movieID, data) {
    // Find the movie details from the data fetched earlier
    const selectedMovie = data.Search.find(movie => movie.imdbID === movieID);
    console.log(selectedMovie);
    const search = favMovieList.find(movie => movie.imdbID === movieID);
    console.log(search);
    if(search===undefined){
        favMovieList.push(selectedMovie);
        alert("Added to favourite");
        document.querySelector(`[imdbid="${movieID}"]`).textContent="Added To Favourite";
        document.querySelector(`[imdbid="${movieID}"]`).style.backgroundColor="green";
        
    }
    else{
        
        document.querySelector(`[imdbid="${movieID}"]`).style.backgroundColor="green";
        document.querySelector(`[imdbid="${movieID}"]`).textContent="Added To Favourite";
        alert("Already in Fav");
        return;
    }
    localStorage.setItem("FAVMOVIELIST",JSON.stringify(favMovieList));
       
}

