import { Component, OnInit } from '@angular/core';
import { catchError, delay, tap } from 'rxjs/operators';
import { empty, Observable } from 'rxjs';
import { Perfil } from './perfil';
import { AlertModalService } from '../shared/alert-modal.service';
import { PerfilService } from './perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  perfil: Perfil[];

   perfil$: Observable<Perfil[]>;

     constructor(
       private alertService: AlertModalService,
       private service: PerfilService) { }

  ngOnInit() {
  this.perfil$ = this.service.list()
  .pipe(
    delay(1000),
    tap(console.log)
  );
  }
  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde.';
  }

  onRefresh() {
    this.perfil$ = this.service.list().pipe(
      // map(),
      // tap(),
      // switchMap(),
      catchError(error => {
        console.error(error);
        // this.error$.next(true);
        this.handleError();
        return empty();
      })
    );



}

}
