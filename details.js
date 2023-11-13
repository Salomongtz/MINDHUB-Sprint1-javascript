import { createMovieDetail } from "./modules/functions.js";
const search = location.search
const param = new URLSearchParams(search)
const movie = movies.find(movie => movie.id == param.get("id"))

const container = document.getElementById("cardContainer")
container.innerHTML = createMovieDetail(movie)