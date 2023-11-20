import { filterByName, filterByGenre, createCardTemplate, printTemplate, createSelectorTemplate } from "./modules/functions.js";

const cardContainer = document.getElementById("cardContainer")
const searchBar = document.getElementById("searchBar")
const genreSelector = document.getElementById("genreSelector")

const options = {
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}

let movies
let favs = JSON.parse(localStorage.getItem("Favs")) || []

fetch("https://moviestack.onrender.com/api/movies", options)
    .then(response => response.json())
    .then(data => {
        movies = data.movies.slice(0, 50)
        const unfilteredGenres = movies.map(movie => movie.genres).flat()
        const genresSet = [...new Set(unfilteredGenres)]
        const genres = Array.from(genresSet)
        genres.unshift("All")

        printTemplate(movies, cardContainer, createCardTemplate)
        printTemplate(genres, genreSelector, createSelectorTemplate)
    })
    .catch(e => console.error(e))

genreSelector.addEventListener("input", (e) => {
    const genreFilter = filterByGenre(movies, e.target.value)
    const nameFilter = filterByName(genreFilter, searchBar.value)
    printTemplate(nameFilter, cardContainer, createCardTemplate)
})

searchBar.addEventListener("input", (e) => {
    const nameFilter = filterByName(movies, e.target.value)
    const genreFilter = filterByGenre(nameFilter, genreSelector.value)
    printTemplate(genreFilter, cardContainer, createCardTemplate)
})

cardContainer.addEventListener("click", e => {

    const action = e.target.dataset.action
    const id = e.target.dataset.id
    console.log(id);
    if (id) {
        if (!favs.includes(id)) {
            favs.push(id)
            localStorage.setItem("Favs", JSON.stringify(favs))
            e.target.setAttribute("fill", "red")
        }
        else if (favs.includes(id)) {
            favs.splice(favs.indexOf(id), 1)
            localStorage.setItem("Favs", JSON.stringify(favs))
            e.target.setAttribute("fill", "black")
        }
    }
})