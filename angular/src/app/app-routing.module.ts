import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioAddComponent } from './components/formulario-add/formulario-add.component';
import { FormularioEditComponent } from './components/formulario-edit/formulario-edit.component';

import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  { path: '', redirectTo: '/listaContactos', pathMatch: 'full' },
  { path: 'nuevoContacto', component: FormularioAddComponent },
  { path: 'editarContacto/:id', component: FormularioEditComponent },
  { path: 'listaContactos', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
