import { filterByName, filterByGenre, createCardTemplate, printTemplate, createSelectorTemplate } from "./modules/functions.js";

const cardContainer = document.getElementById("cardContainer")

const genres = new Set()
const searchBar = document.getElementById("searchBar")
const genreSelector = document.getElementById("genreSelector")

for (const movie of movies) {
    genres.add(...movie.genres)
}
console.log(genres)

printTemplate(movies, cardContainer, createCardTemplate)
printTemplate(genres, genreSelector, createSelectorTemplate)

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