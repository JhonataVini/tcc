import { delay, tap } from 'rxjs/operators';
import { PerfilService } from './perfil.service';
import { Usuario } from './../login/usuario';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';
import { Perfil } from './perfil';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  preserveWhitespaces: true
})
export class PerfilComponent implements OnInit {

   perfil: Perfil[];

   perfil$: Observable<Perfil[]>;

     constructor(private service: PerfilService) { }

  ngOnInit() {
  this.perfil$ = this.service.list()
  .pipe(
    delay(1000),
    tap(console.log)
  );
  }



}
