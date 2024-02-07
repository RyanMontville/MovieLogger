export class ErrorStatus {
    constructor(
        public status: number,
        public error: string,
        public message: string,
        public path: string
    ) {}
}