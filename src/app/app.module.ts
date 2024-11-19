import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card'; // Importa MatCardModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Para formularios
import { MatInputModule } from '@angular/material/input'; // Para inputs
import { MatButtonModule } from '@angular/material/button'; // Para botones
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    GestionarEquipajeComponent
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
    BrowserAnimationsModule
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
