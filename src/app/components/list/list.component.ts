import { Component, OnInit, Input } from '@angular/core';
import { Utente } from 'src/app/model/utente';
import { FormComponent } from '../form/form.component';
import { ListaService } from 'src/app/lista.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public listutente: Utente[] = [];
  
  constructor(private _listService: ListaService) { }

  ngOnInit() {
    this.listutente = this._listService.getListutente();
  }

}
