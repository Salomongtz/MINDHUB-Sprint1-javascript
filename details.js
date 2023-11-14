import { createMovieDetail } from "./modules/functions.js";
const search = location.search
const param = new URLSearchParams(search)
const movie = movies.find(movie => movie.id == param.get("id"))

const container = document.getElementById("cardContainer")
const title = document.querySelector("h1")

title.textContent = movie.title
container.innerHTML = createMovieDetail(movie)