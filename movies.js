function createCard(movie) {
    return `
    <article class="bg-white flex flex-col truncate  rounded-2xl w-64 h-96 p-4 gap-2">
    <img class="rounded-md" src="${movie.image}" alt="image">
    <h3 class="font-bold text-xl">${movie.title}</h3>
    <h4 class="italic">${movie.tagline}</h4>
    <p>${movie.overview}</p>
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