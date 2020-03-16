import { Usuario } from './../login/usuario';
import { Component, OnInit } from '@angular/core';
import { FormVamlidation } from '../shared/form-validation';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DropdownService } from '../shared/services/dropdown.service';
import { VerificaEmailService } from './services/verifica-email.service';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { distinctUntilChanged, switchMap, tap, map } from 'rxjs/operators';
import { empty } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  preserveWhitespaces: true
})
export class FormComponent extends BaseFormComponent implements OnInit {

// estados: Observable<EstadoBr[]>;
usuario: any = {
  nome: null,
  email: null,
  confirmaEmail: null,
  senha: null,
  confirmarSenha: null
};
 constructor(
   private formBuilder: FormBuilder,
   private http: HttpClient,
   private dropdownService: DropdownService,
   private verificaEmailService: VerificaEmailService,
   private router: Router
   ) {
     super();
   }

 ngOnInit() {

  // this.verificaEmailService.verificarEmail('email@email.com').subscribe();

  // this.estados = this.dropdownService.getEstadosBr();
   // this.dropdownService.getEstadosBr()
   // .subscribe(dados =>  {this.estados = dados;
   //                       console.log(dados);
   // }
   // );

   //   this.formulario = new FormGroup({
   //   nome: new FormControl(null),
   //   email: new FormControl(null)
   // });

   this.formulario = this.formBuilder.group({
     nome: [null, [Validators.required, Validators.minLength(3)]],
     email: [null, [Validators.required, Validators.email]],
     confirmarEmail: [null, [FormVamlidation.equalsTo('email')]],
     senha: [null, [Validators.required, Validators.minLength(8)]],
     confirmarSenha: [null, [FormVamlidation.equalsTo('senha')]],
     termos: [null, Validators.pattern('true')]
   });
   }

 submit() {
   console.log(this.formulario);

   this.http.post('https://httpbin.org/post', JSON.stringify({}))
   .subscribe(dados => {
     console.log(dados);
     // reseta o form
     this.resetar();
   },
     (error: any) => alert('Erro'));
 }

 validarEmail(formControl: FormControl) {
   return this.verificaEmailService.verificarEmail(formControl.value)
     .pipe(
       map(emailExiste => emailExiste ? { emailInvalido: true} : null)
       );
 }

}
