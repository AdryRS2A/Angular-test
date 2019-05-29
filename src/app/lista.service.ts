import { Injectable } from '@angular/core';
import { Utente } from './model/utente';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Autori } from './model/author';
import { Note } from './model/note';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  listutente: Utente[] = [];
  private _url: string = "http://localhost:8080/api3/authors";
  private _urll: string = "http://localhost:8080/api2/notes";

  noteChanged = new Subject();
  
  setListutente(nome:string , cognome:string , eta:number){
    this.listutente.push(new Utente(nome,cognome,eta));
  }

  constructor(private http: HttpClient) { }
  
  getAutor(): Observable<Autori[]>{
    return this.http.get<Autori[]>(this._url);
  }
  getNote(): Observable<Note[]>{
    return this.http.get<Note[]>(this._urll);
  }
  // getLenght(){
  //   let num :number;
  //   let note : Note[];
  //   this.http.get<Note[]>(this._urll).subscribe(data => note = data,
  //     () => {
  //       num=note.length; 
  //     });
  //   return num
  // }
  getListutente(){
    return this.listutente;
  }



  
  // postNote(content:string ,title:string , id:number){
  //   // const ura ="content="+content+"&title="+title+"&id="+id;
  //   let body = new HttpParams();
  //   body = body.set("content", content);
  //   body = body.set("title", title);
  //   body = body.set("id", id.toString());
  //   // console.log(ura);
  
  //   this.http.post(this._urll,body).subscribe();
  // }
  putNote(id:number,nota: Note){
    const ura =this._urll+"/"+id;
    console.log(nota)
    console.log(id)
    console.log(ura)
    this.http.put(ura,nota).subscribe(
      () => {
        this.noteChanged.next();
      }
    );
  }
  postNote(note:Note){
    this.http.post(this._urll,note).subscribe(
      () => {
        this.noteChanged.next();
      }
    );
  }
  deleteNote(id:number){
    const ura =this._urll+"/"+id;
    this.http.delete(ura).subscribe(
      () => {
        this.noteChanged.next();
      }
    );
  }

}
