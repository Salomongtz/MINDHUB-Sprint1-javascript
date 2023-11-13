const search = location.search
const param = new URLSearchParams(search)
const movie = movies.find(movie => movie.id == param.get("id"))

