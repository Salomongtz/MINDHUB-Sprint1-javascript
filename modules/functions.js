export function filterByName(list, name) {
    return list.filter(item => item.title.toLowerCase().includes(name.toLowerCase()))
}
export function filterByGenre(list, genre) {
    return genre == "All" ? list : list.filter(item => item.genres.includes(genre))
}
export function createCardTemplate(movie) {
    return `
    <article class="hover:bg-ms-purple lg:hover:h-auto lg:h-80 text-ellipsis card bg-black text-white flex flex-col rounded-2xl w-64 p-4 justify-between">
    <img class="rounded-md" src="https://moviestack.onrender.com/static/${movie.image}" alt="image">
    <h3 class="font-bold text-xl">${movie.title}</h3>
    <h4 class="italic">${movie.tagline}</h4>
    <a class="p-2 bg-black text-white text-center font-bold" href="./details.html?id=${movie.id}">Details</a>
    <p class="lg:line-clamp-4 hover:block  ">${movie.overview}</p>
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
    return `<div class="lg:h-[500px] w-full flex flex-col lg:flex-row flex-wrap justify-around items-center p-8 bg-black text-white border-double border-8 border-ms-purple rounded-xl">
    <img class="rounded-md lg:w-1/3 lg:first-letter:h-4/5" src="https://moviestack.onrender.com/static/${movie.image}" alt="${movie.title}">
    <article class="lg:w-1/2 flex flex-col p-4 gap-2">
        <h3 class="font-bold text-xl">${movie.title}</h3>
        <h4 class="italic">${movie.tagline}</h4>
        <p>${movie.genres}</p>
        <p class="">${movie.overview}</p>
    </article>
</div>
<div class="flex w-full flex-wrap lg:flex-nowrap gap-8 border-double border-8 border-ms-purple bg-black rounded-xl p-8">

    <table class="w-full text-sm text-left rtl:text-right text-black">
        <tr class="flex justify-between">
            <th class="text-xs text-white uppercase bg-ms-purple w-1/2 p-2">
                Original
                Language</th>
            <td class="bg-white w-1/2 p-2 border-b ">${movie.original_language}
            </td>
        </tr>
        <tr class="flex justify-between">
            <th class="text-xs text-white uppercase bg-ms-purple w-1/2 p-2">
                Release Date</th>
            <td class="bg-white w-1/2 p-2 border-b ">${movie.release_date}</td>
        </tr>
        <tr class="flex justify-between">
            <th class="text-xs text-white uppercase bg-ms-purple w-1/2 p-2">
                Runtime</th>
            <td class="bg-white w-1/2 p-2 border-b ">${movie.runtime}</td>
        </tr>
        <tr class="flex justify-between">
            <th class="text-xs text-white uppercase bg-ms-purple w-1/2 p-2">
                Status</th>
            <td class="bg-white w-1/2 p-2 border-b ">${movie.status}</td>
        </tr>
    </table>

    <table class="w-full text-sm text-left rtl:text-right text-black">
        <tr class="flex justify-between">
            <th class="text-xs text-white uppercase bg-ms-purple w-1/2 p-2">Vote
                Average</th>
            <td class="bg-white w-1/2 p-2 border-b ">${movie.vote_average}</td>
        </tr>
        <tr class="flex justify-between">
            <th class="text-xs text-white uppercase bg-ms-purple w-1/2 p-2">
                Budget</th>
            <td class="bg-white w-1/2 p-2 border-b ">${movie.budget}</td>
        </tr>
        <tr class="flex justify-between">
            <th class="text-xs text-white uppercase bg-ms-purple w-1/2 p-2">
                Revenue</th>
            <td class="bg-white w-1/2 p-2 border-b ">${movie.revenue}</td>
        </tr>
    </table>
</div>`
}