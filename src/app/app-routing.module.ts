import { PerfilComponent } from './perfil/perfil.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: '/home'
},
{ path: 'login', component: LoginComponent},
{ path: 'home', component: HomeComponent},
{ path: 'cadastro', component: FormComponent},
{ path: 'perfil', component: PerfilComponent},
//  {
//    path: 'perfil',
//   loadChildren: () => import('./upload-file/upload-file.module').then(m => m.UploadFileModule)
//  },
// //  {
// //    path: 'rxjs-poc',
// //    loadChildren: () => import('./unsubscribe-rxjs/unsubscribe-rxjs.module').then(m => m.UnsubscribeRxjsModule)
// //  },
//  {
//    path: 'busca-reativa',
//    loadChildren: () => import('./reactive-search/reactive-search.module').then(m => m.ReactiveSearchModule)
//  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
