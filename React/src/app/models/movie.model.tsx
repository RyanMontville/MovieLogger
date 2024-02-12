export class Movie {
    constructor(
        public title: string,
        public year: string,
        public rated: string,
        public released: string,
        public runtime: string,
        public genre: string,
        public director: string,
        public writer: string,
        public actors: string,
        public awards: string,
        public poster: string,
        public plot: string,
        public type: string,
        public dvd: string,
        public boxOffice: string,
        public imdbID: string
    ) {}

    public rt_rating: string | undefined;
    public imdb_rating: string | undefined;
    public mc_rating: string | undefined;

    public setImdb_rating(imdbRating: string) {
        alert("setting imdb rating"+imdbRating);
        this.imdb_rating = imdbRating;
    }

    public setRT_rating(RTRating: string) {
        this.rt_rating = RTRating;
    }

    public setMC_rating(MCRating: string) {
        this.mc_rating = MCRating;
    }
}
