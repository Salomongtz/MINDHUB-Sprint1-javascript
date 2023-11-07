function createCard(movie) {
    return `
    <article class="card bg-black text-white flex flex-col rounded-2xl w-64 p-4 gap-2">
    <img class="rounded-md" src="${movie.image}" alt="image">
    <h3 class="font-bold text-xl">${movie.title}</h3>
    <h4 class="italic">${movie.tagline}</h4>
    <p class="line-clamp-4 hover:block  ">${movie.overview}</p>
    </article>
`
}

const cardContainer = document.getElementById("cardContainer")
function addCard(movieList, container) {
    let template = ""
    for (const movie of movieList) {
        template += createCard(movie)
    }
    container.innerHTML += template
}

addCard(movies, cardContainer)