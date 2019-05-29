import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/lista.service';
import { Note } from 'src/app/model/note';
import { NotExpr } from '@angular/compiler';
import { Autori } from 'src/app/model/author';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

  constructor(private _listService: ListaService) { }
  public autoris = [];
  public notoris =[];
  author:Autori = new Autori(null);
  note: Note = new Note();
  note2: Note = new Note();
  bol:Boolean[] =[];
  id:number;



  ngOnInit() {
    this._listService.getAutor()
    .subscribe(data => this.autoris = data);
    this._listService.getNote()
    .subscribe(data => this.notoris = data,
      () => {
        this.bol.length = this.notoris.length;
        Object.keys(this.bol).forEach(v => this.bol[v] = false)
        console.log(this.bol)
      });
    // console.log(this.notoris)
    // this.lenght=this._listService.getLenght();
    // console.log(this.lenght);
    
    this._listService.noteChanged.subscribe(
      () => {
        this._listService.getNote()
        .subscribe(data => this.notoris = data,
          () => {
            this.bol.length = this.notoris.length;
            Object.keys(this.bol).forEach(v => this.bol[v] = false)
            console.log(this.bol)
          });
      }
      );
      console.log(this.notoris)
    }
// manda(content:string,title:string,id:number){
//   this._listService.postNote(content,title,id);
//   console.log("fatto")
// }
manda(note:Note){
  // content:string,title:string,id:number){
  // this.author = new Autori(id);
  // console.log(this.author);
  // this.note = new Note(title,content,this.author);
  // console.log(this.note);
  this._listService.postNote(note)
}
put(note2:Note,id:number){
  this._listService.putNote(id,note2)
}
mod(id:number,title:string,content:string){
  let not: Note = new Note();
  not.title=title;
  not.content=content;
  this._listService.putNote(id,not);
}
delete(id:number){
  this._listService.deleteNote(id)
}
appari(inde:number)
  {
    this.bol[inde] = !this.bol[inde];
    console.log("fatto")
  }
}
