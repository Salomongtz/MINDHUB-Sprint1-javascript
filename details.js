import { createMovieDetail } from "./modules/functions.js";

const container = document.getElementById("cardContainer")
const title = document.querySelector("h1")

let movies
const options = {
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}

fetch("https://moviestack.onrender.com/api/movies", options)
    .then(response => response.json())
    .then(data => {
        const search = location.search
        const param = new URLSearchParams(search)

        movies = data.movies
        const movie = movies.find(movie => movie.id == param.get("id"))
        title.textContent = movie.title
        container.innerHTML = createMovieDetail(movie)
    })
    .catch(e => console.error(e))