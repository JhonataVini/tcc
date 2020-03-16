import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilComponent } from './perfil.component';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';

const routes: Routes = [{
  path: '', component: PerfilComponent},
{ path: 'novo', component: PerfilFormComponent},
{ path: 'editar/:id', component: PerfilFormComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
