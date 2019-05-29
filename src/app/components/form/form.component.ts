import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/model/utente';
import { ListaService } from 'src/app/lista.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  utente: Utente = new Utente(null,null,null);

  constructor(private _listService: ListaService) { }

  ngOnInit() {
  }

  add(){
    this._listService.setListutente(this.utente.nome,this.utente.cognome ,this.utente.eta);
  }


}
