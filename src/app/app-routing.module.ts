import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ContrasenaComponent } from './componentes/contrasena/contrasena.component';
import { UsuarioMenuComponent } from './componentes/usuario-menu/usuario-menu.component';
import { ReservaVueloComponent } from './componentes/reserva-vuelo/reserva-vuelo.component';
import { BuscarVuelosComponent } from './componentes/buscar-vuelos/buscar-vuelos.component';
import { GestionarEquipajeComponent } from './componentes/gestionar-equipaje/gestionar-equipaje.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'registro', component: RegistroComponent},
  {path:'contrasena',component:ContrasenaComponent},
  { path: 'usuario-menu', component: UsuarioMenuComponent },
  { path: 'reserva-vuelo', component: ReservaVueloComponent },
  { path: 'buscar-vuelos', component: BuscarVuelosComponent },
  { path: 'gestionar-equipaje', component: GestionarEquipajeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
