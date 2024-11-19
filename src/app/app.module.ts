import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ContrasenaComponent } from './componentes/contrasena/contrasena.component';
import { NuevaContrasenaComponent } from './componentes/nueva-contrasena/nueva-contrasena.component';
import { BuscarVuelosComponent } from './componentes/buscar-vuelos/buscar-vuelos.component';
import { CargarVueloComponent } from './componentes/cargar-vuelo/cargar-vuelo.component';
import { ReservaVueloComponent } from './componentes/reserva-vuelo/reserva-vuelo.component';
import { GestionarEquipajeComponent } from './componentes/gestionar-equipaje/gestionar-equipaje.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PagoComponent } from './componentes/pago/pago.component';
import { LlegadaComponent } from './componentes/llegada/llegada.component';
import { SalidaComponent } from './componentes/salida/salida.component';
import { RetirarComponent } from './componentes/retirar/retirar.component';
import { EstadoComponent } from './componentes/estado/estado.component';
import { MenuEmbarqueComponent } from './componentes/menu-embarque/menu-embarque.component';
import { UsuarioMenuComponent } from './componentes/usuario-menu/usuario-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ContrasenaComponent,
    NuevaContrasenaComponent,
    BuscarVuelosComponent,
    CargarVueloComponent,
    ReservaVueloComponent,
    GestionarEquipajeComponent,
    PagoComponent,
    LlegadaComponent,
    SalidaComponent,
    RetirarComponent,
    EstadoComponent,
    MenuEmbarqueComponent,
    UsuarioMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    FormsModule, 
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule ,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
