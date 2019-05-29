import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimoComponentComponent } from './components/primo-component/primo-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRouterModule } from './app-router.module';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { ListaService } from './lista.service';
import { HttpClientModule } from '@angular/common/http';
import { BackendComponent } from './components/backend/backend.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponentComponent,
    NavbarComponent,
    FormComponent,
    ListComponent,
    BackendComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ListaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
