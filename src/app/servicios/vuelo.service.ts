import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Vuelo } from '../modelo/vuelo';
import { Cliente } from '../modelo/cliente';
import { BusquedaVueloDTO } from '../dtos/busqueda-vuelo-dto';
import { ReservaVueloDTO } from '../dtos/reserva-vuelo-dto';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  private apiUrl: string = 'http://localhost:8080/api/client';  // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) { }

  // Método para obtener vuelos con la lista de pasajeros
  public buscarVuelos(clientId: string, busquedaDto: BusquedaVueloDTO): Observable<Vuelo[]> {
    const url = `${this.apiUrl}/buscar-vuelos/${clientId}`;

    // Configuración de los headers (si es necesario para la API)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Vuelo[]>(url, busquedaDto, { headers });
  }

  public cargarVuelo(vueloId: string): Observable<any> {
    const url = `${this.apiUrl}/cargar-vuelo/${vueloId}`;
    return this.http.get(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al cargar vuelo:', error.message);
        return throwError(() => new Error('Error al cargar vuelo'));
      })
    );
  }
  public reservarVuelo(vueloId: string, clientId: string, reserva: ReservaVueloDTO): Observable<string> {
    const url = `${this.apiUrl}/${vueloId}/reservar-vuelo/${clientId}`;
    return this.http.post<string>(url, reserva);
  }

}
