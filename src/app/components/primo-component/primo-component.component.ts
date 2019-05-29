import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Utente } from 'src/app/model/utente';

@Component({
  selector: 'app-primo-component',
  templateUrl: './primo-component.component.html',
  styleUrls: ['./primo-component.component.css']
})
export class PrimoComponentComponent implements OnInit, OnDestroy {
  utente: Utente = new Utente("","Maio",9);
  constructor() { }
  visibile : boolean =true;
  bot:string="Nascondi";
  mioArrayString: Array<string>=["ninp","lip","zip"];
  apparizione : Array<boolean>=[false,false,false];
  
  ngOnInit() {
  }

  ngOnDestroy(){
    console.log("Distutto")
  }
  changeVisibile()
  {
  console.log("ok");
  this.visibile= !this.visibile;
  if(this.bot ==="Nascondi")
  {
    this.bot="Mostra";
  }
  else
  {
    this.bot="Nascondi";
  }
  }
  add(nuovo:string)
  {
    this.mioArrayString.push(nuovo);
    this.apparizione.push(false);
  }
  remove(deleta:number)
  {
    this.mioArrayString.splice(deleta,1);
    this.apparizione.pop;
  }
  Mod(index:number,valore:string)
  {
    this.mioArrayString.splice(index,1,valore)
  }
  appari(inde:number)
  {
    this.apparizione[inde] = !this.apparizione[inde];
    console.log("fatto")
  }
}
