export class Movies {
    constructor(
        public Title: String,
        public Year: String,
        public Rated: String,
        public Released: String,
        public Runtime: String,
        public Genre: String,
        public Director: String,
        public Writer: String,
        public Actors: String,
        public Language: String,
        public Country: String,
        public Awards: String,
        public Poster: String,
        public Ratings: Rating[],
        public Plot: String,
        public Type: String,
        public DVD: String,
        public BoxOffice: String
    ) {}
}

export class Rating {
    constructor(Source: String, Value: String) {}
}