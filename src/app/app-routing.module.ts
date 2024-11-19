import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ContrasenaComponent } from './componentes/contrasena/contrasena.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'registro', component: RegistroComponent},
  {path:'contrasena',component:ContrasenaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
