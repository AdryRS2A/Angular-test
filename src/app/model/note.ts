import { Autori } from './author';

export class Note
{
    id:number;
    title:string;
    content: string;
    createdAt: Date;
    updatedAt: Date
    author: Autori;
    
constructor(){
}

}



// {
//     "id": 10,
//     "title": "Dix",
//     "content": "jinx",
//     "createdAt": "2019-05-15T14:51:07.000+0000",
//     "updatedAt": "2019-05-15T14:51:07.000+0000",
//     "author": {
//         "id": 3,
//         "name": "Dio",
//         "dataDiNascita": "2010-10-09"
//     }