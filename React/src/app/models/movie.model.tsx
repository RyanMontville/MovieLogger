export class Movies {
    constructor(
        public Title: string,
        public Year: string,
        public Rated: string,
        public Released: string,
        public Runtime: string,
        public Genre: string,
        public Director: string,
        public Writer: string,
        public Actors: string,
        public Language: string,
        public Country: string,
        public Awards: string,
        public Poster: string,
        public Ratings: Rating[],
        public Plot: string,
        public Type: string,
        public DVD: string,
        public BoxOffice: string,
        public imdbID: string
    ) {}
}

export class Rating {
    constructor(Source: string, Value: string) {}
}