import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrarClienteDTO } from '../dtos/registrar-cliente-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Cambia esto según tu API backend

  constructor(private http: HttpClient) {}

  public login(correo: string, contrasena: string): Observable<string> {
    const url = `${this.apiUrl}/login`;
    const body = { correo, contrasena };
    return this.http.post<string>(url, body);
  }

  registrarCliente(cliente: RegistrarClienteDTO): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string>(`${this.apiUrl}/registrar`, cliente, { headers });
  }

  
 
}
