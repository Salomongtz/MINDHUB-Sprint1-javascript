export function filterByName(list, name) {
    return list.filter(item => item.title.toLowerCase().includes(name.toLowerCase()))
}
export function filterByGenre(list, genre) {

    return list.filter(item => item.genres.includes(genre))
}
export function createCardTemplate(movie) {

    return `
    <article class="hover:bg-ms-purple hover:h-auto h-80 text-ellipsis card bg-black text-white flex flex-col rounded-2xl w-64 p-4 gap-2">
    <img class="rounded-md" src="${movie.image}" alt="image">
    <h3 class="font-bold text-xl">${movie.title}</h3>
    <h4 class="italic">${movie.tagline}</h4>
    <p class="line-clamp-4 hover:block  ">${movie.overview}</p>
    </article>
`
}
export function printTemplate(list, container, templateFn) {

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
export function createSelectorTemplate(genre) {

    return `<option value="${genre}">${genre}</option>`
}

export default {
    filterByName, filterByGenre, createCardTemplate, printTemplate, createSelectorTemplate
}