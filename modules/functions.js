export function filterByName(list, name) {
    return list.filter(item => item.title.toLowerCase().includes(name.toLowerCase()))
}
export function filterByGenre(list, genre) {
    return genre == "All" ? list : list.filter(item => item.genres.includes(genre))
}
export function createCardTemplate(movie) {
    const favs = JSON.parse(localStorage.getItem("Favs"))
    let color
    favs == null ? color = "black" : color = favs.find(id => movie.id == id) ? "red" : "black"

    return `
    <article class="hover:bg-ms-purple md:hover:h-auto md:h-96 w-64 p-4 text-ellipsis card bg-black text-white flex flex-col rounded-2xl justify-between">
    <img class="rounded-md" src="https://moviestack.onrender.com/static/${movie.image}" alt="image">
    <svg fill="${color}" class="p-1.5 bg-gray-300 absolute hover:bg-gray-400 font-bold h-8 w-8 rounded-full inline-flex justify-center items-center favbtn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path data-action="fav" data-id="${movie.id}" d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
    <h3 class="font-bold text-xl">${movie.title}</h3>
    <h4 class="italic">${movie.tagline}</h4>
    <a class="p-2 bg-black text-white text-center font-bold" href="./details.html?id=${movie.id}">Details</a>
    <p class="md:line-clamp-4 hover:block">${movie.overview}</p>
    </article>
    `
}

/* <button class="z-20 bg-gray-300 absolute hover:bg-gray-400 text-black font-bold h-8 w-8 rounded-full inline-flex justify-center items-center favbtn" data-action="fav" data-id="${movie.id}">
        <svg class="z-10 fill-current object-contain w-8 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="z-0" d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
    </button> */

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