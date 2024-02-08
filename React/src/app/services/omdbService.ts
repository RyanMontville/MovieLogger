export async function searchOmdb(searchTerm: string) {
    return fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=766ffdd6`).then(res => res.json()).catch(e => e.status);
}

export async function getMovieById(movieId: string) {
    return fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=766ffdd6`).then(res => res.json()).catch(e => e.status);
}