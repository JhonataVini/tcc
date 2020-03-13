import { PerfilRoutingModule } from './perfil-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PerfilComponent,
    PerfilFormComponent,
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    ReactiveFormsModule
  ]
})
export class PerfilModule { }
