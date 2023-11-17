import { filter, createCardTemplate, printTemplate, createSelectorTemplate } from "./modules/functions.js";

const cardContainer = document.getElementById("cardContainer")
const searchBar = document.getElementById("searchBar")
const genreSelector = document.getElementById("genreSelector")

const unfilteredGenres = movies.map(movie => movie.genres).flat()
const genresSet = [...new Set(unfilteredGenres)]

const genres = Array.from(genresSet)
genres.unshift("All")

printTemplate(movies, cardContainer, createCardTemplate)
printTemplate(genres, genreSelector, createSelectorTemplate)

genreSelector.addEventListener("input", () => filter(genreSelector, searchBar, cardContainer))
searchBar.addEventListener("input", () => filter(genreSelector, searchBar, cardContainer))