export class Contact{
    constructor(
        public id ?:number,
        public nom?:String,
        public prenom?:string,
        public email?:String,
        public tel?:String,
        public sujet?:String,
        public message?:String,
    ){}
}