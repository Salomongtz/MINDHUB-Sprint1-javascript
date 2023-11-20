import { createCardTemplate, printTemplate } from "./modules/functions.js";

const cardContainer = document.getElementById("cardContainer")

const options = {
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
}

let movies
let favs = JSON.parse(localStorage.getItem("Favs")) || []
console.log(favs)

fetch("https://moviestack.onrender.com/api/movies", options)
    .then(response => response.json())
    .then(data => {
        console.log(JSON.stringify(favs));
        movies = data.movies.filter(movie => favs.includes(movie.id))
        printTemplate(movies, cardContainer, createCardTemplate)
    })
    .catch(e => console.error(e))

cardContainer.addEventListener("click", e => {
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
            fetch("https://moviestack.onrender.com/api/movies", options)
                .then(response => response.json())
                .then(data => {
                    console.log(JSON.stringify(favs));
                    movies = data.movies.filter(movie => favs.includes(movie.id))
                    printTemplate(movies, cardContainer, createCardTemplate)
                })
                .catch(e => console.error(e))
        }
    }
})