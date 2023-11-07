function createCard(movie) {
    return `
    <article>
    <img src="${movie.image}" alt="image">
    <h3>${movie.title}</h3>
    <h4>${movie.tagline}</h4>
    <p>${movie.overview}</p>
    </article>
`
}
const cardContainer = document.getElementById("cardContainer")
function addCard(movieList) {
    let template = ""
    for (const movie of movieList) {
        template += createCard(movie)
    }
    return template
}

console.log(addCard(movies))
cardContainer.innerHTML += addCard(movies)