import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from './guards/auth-guard';
import { AuthService } from './login/auth.service';
import { FormComponent } from './form/form.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    FormComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    SharedModule
  ],
  providers: [AuthService,
    FormsModule,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
