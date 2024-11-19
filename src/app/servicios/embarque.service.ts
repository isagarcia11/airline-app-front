import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarroEmbarque } from '../modelo/carro-embarque';
import { Estacionamiento } from '../modelo/estacionamiento';

@Injectable({
  providedIn: 'root'
})
export class EmbarqueService {

  private apiUrl = 'http://localhost:8080/api/embarque'; // Update this if needed

  constructor(private http: HttpClient) {}

  llegada(carro: CarroEmbarque): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/llegada`, carro);
  }

  salida(): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/salida`, {});
  }

  retirar(id: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/retirar/${id}`, {});
  }

  obtenerEstado(): Observable<Estacionamiento> {
    return this.http.get<Estacionamiento>(`${this.apiUrl}/estado`);
  }
}
