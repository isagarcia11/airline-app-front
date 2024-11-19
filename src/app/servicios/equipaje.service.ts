import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EquipajeService {
  private baseUrl = 'http://localhost:8080/api/client'; // Cambia la URL según tu backend

  constructor(private http: HttpClient) {}

  public gestionarEquipaje(idCliente: string, idVuelo: string, equipaje: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${idCliente}/gestionar-equipaje/${idVuelo}`, equipaje);
  }
}
