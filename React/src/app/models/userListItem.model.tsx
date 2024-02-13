export class UserListItem {
    constructor(
        public userListId: number,
        public userId: number,
        public imdbId: string,
        public title: string,
        public poster: string,
        public list: string,
        public rating: number
    ) {}
}