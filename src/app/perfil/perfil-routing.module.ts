import { PerfilFormComponent } from './perfil-form/perfil-form.component';
import { PerfilComponent } from './perfil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
{ path: '', component: PerfilComponent},
{ path: 'novo', component: PerfilFormComponent},
{ path: 'editar/:id', component: PerfilFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
