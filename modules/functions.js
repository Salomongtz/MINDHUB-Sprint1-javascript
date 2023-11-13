export function filterByName(list, name) {
    return list.filter(item => item.title.toLowerCase().includes(name.toLowerCase()))
}
export function filterByGenre(list, genre) {
    return genre=="All"?list:list.filter(item => item.genres.includes(genre))
}
export function createCardTemplate(movie) {
    return `
    <article class="hover:bg-ms-purple hover:h-auto h-80 text-ellipsis card bg-black text-white flex flex-col rounded-2xl w-64 p-4 gap-2">
    <img class="rounded-md" src="${movie.image}" alt="image">
    <h3 class="font-bold text-xl">${movie.title}</h3>
    <h4 class="italic">${movie.tagline}</h4>
    <a class="p-2 bg-black text-white font-bold" href="./details.html?id=${movie.id}">Details</a>
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
export function createMovieDetail(movie) {
    return `<div class="flex flex-wrap">
    <img src="${movie.image}" alt="${movie.title}">
    <article class=" flex flex-col w-64 p-4 gap-2">
        <h3 class="font-bold text-xl">${movie.title}</h3>
        <h4 class="italic">${movie.tagline}</h4>
        <p>${movie.genres}</p>
        <p class="">${movie.overview}</p>
    </article>
    </div>
    <div class="flex gap-8">
                    <table>
                        <tr>
                            <th>Original Language</th>
                            <td>${movie.original_language}</td>
                        </tr>
                        <tr>
                            <th>Release Date</th>
                            <td>${movie.release_date}</td>
                        </tr>
                        <tr>
                            <th>Runtime</th>
                            <td>${movie.runtime}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>${movie.status}</td>
                        </tr>
                    </table>
    
                    <table>
                        <tr>
                            <th>Vote Average</th>
                            <td>${movie.vote_average}</td>
                        </tr>
                        <tr>
                            <th>Budget</th>
                            <td>${movie.budget}</td>
                        </tr>
                        <tr>
                            <th>Revenue</th>
                            <td>${movie.revenue}</td>
                        </tr>
                    </table>
                </div>`
}