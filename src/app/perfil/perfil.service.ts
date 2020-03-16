import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Perfil } from './perfil';
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
