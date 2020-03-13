import { environment } from './../../environments/environment';
import { Perfil } from './perfil';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private readonly API = `${environment.API}usuario`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Perfil[]>(this.API)
    .pipe(
      tap(console.log)
    );
  }
}
