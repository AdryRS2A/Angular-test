import {Routes, RouterModule} from '@angular/router'
import { PrimoComponentComponent } from './components/primo-component/primo-component.component';
import { NgModule } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { BackendComponent } from './components/backend/backend.component';


const route :Routes=[
    {path:"", redirectTo:"/home",pathMatch:"full"},
    {path: "home", component:PrimoComponentComponent},
    {path:"form", component:FormComponent},
    {path:"list",component:ListComponent},
    {path:"bk",component:BackendComponent}
]
@NgModule({
        imports:[RouterModule.forRoot(route)],
        exports:[RouterModule]
    })

export class AppRouterModule{
}