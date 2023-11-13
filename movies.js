const cardContainer = document.getElementById("cardContainer")

const genres = new Set()
const searchBar = document.getElementById("searchBar")
const genreSelector = document.getElementById("genreSelector")

for (const movie of movies) {
    genres.add(...movie.genres)
}
console.log(genres)

genreSelector.addEventListener("input", (e) => {
    console.log(e.target.value);
})

printTemplate(movies, cardContainer, createCardTemplate)
printTemplate(genres, genreSelector, createSelectorTemplate)
genreSelector.value = "Filter by genre"
console.log(genreSelector.value);

searchBar.addEventListener("input", (e) => {
    // const nameFilter = filterByName(movies, e.target.value)
    const nameFilter = filterBy(movies, "title", e.target.value)
    printTemplate(nameFilter, cardContainer, createCardTemplate)
})

// function filterByName(list, name) {
//     return list.filter(item => item.title.toLowerCase().includes(name.toLowerCase()))
// }

function filterBy(list, property, value) {
    return list.filter(item => item[property].toLowerCase().includes(value.toLowerCase()))
}
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

function printTemplate(list, container, templateFn) {
    let template = ""

    list.forEach(item => {
        template += templateFn(item)
    })

    if (template) {
        container.innerHTML = template
    } else {
        container.innerHTML = `<h2>Couldn't find that movie.</h2>`
    }
}

function createSelectorTemplate(genre) {
    return `<option value="${genre}">${genre}</option> `
}