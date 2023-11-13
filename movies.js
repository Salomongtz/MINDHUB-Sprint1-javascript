function createCardTemplate(movie) {
    return `
    <article class="hover:bg-ms-purple hover:h-auto h-80 text-ellipsis card bg-black text-white flex flex-col rounded-2xl w-64 p-4 gap-2">
    <img class="rounded-md" src="${movie.image}" alt="image">
    <h3 class="font-bold text-xl">${movie.title}</h3>
    <h4 class="italic">${movie.tagline}</h4>
    <p class="line-clamp-4 hover:block  ">${movie.overview}</p>
    </article>
`
}

const cardContainer = document.getElementById("cardContainer")

// function addCard(movieList, container) {
//     let template = ""
//     for (const movie of movieList) {
//         template += createCardTemplate(movie)
//     }
//     container.innerHTML += template
// }

// addCard(movies, cardContainer)

//Sprint 2
const genres = new Set()
const searchBar = document.getElementById("searchBar")
const genreSelector = document.getElementById("genreSelector")

//Obtain movie genres
for (const movie of movies) {
    genres.add(...movie.genres)
}
console.log(genres)

//Create selector with genres
function createSelectorTemplate(genre) {
    return `<option value="${genre}">${genre}</option> `
}

// function appendSelectorItems(genres, container) {
//     let template = ""
//     genres.forEach(genre => {
//         template += createSelectorTemplate(genre)
//     })
//     container.innerHTML += template
// }

function appendTemplate(list, container, templateFn) {
    let template = ""
    list.forEach(item => {
        template += templateFn(item)
    })
    container.innerHTML += template
}

appendTemplate(genres, genreSelector, createSelectorTemplate)
appendTemplate(movies, cardContainer, createCardTemplate)

// appendSelectorItems(genres, genreSelector)

//Create searchbar
searchBar.addEventListener("input", (event) => {
    console.log("Entró")
})

