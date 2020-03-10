import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { DropdownService } from './services/dropdown.service';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BaseFormComponent } from './base-form/base-form.component';



@NgModule({
  declarations: [
     AlertModalComponent,
     ConfirmModalComponent,
     FormDebugComponent,
     CampoControlErroComponent,
     ErrorMsgComponent,
     InputFieldComponent,
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [AlertModalComponent,
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
    InputFieldComponent],

  entryComponents: [
    AlertModalComponent,
     ConfirmModalComponent],
  providers: [ DropdownService]
})
export class SharedModule { }
