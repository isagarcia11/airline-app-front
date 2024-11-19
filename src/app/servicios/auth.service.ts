import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrarClienteDTO } from '../dtos/registrar-cliente-dto';
import { LoginDTO } from '../dtos/login-dto';
import { LoginResponse } from '../modelo/login-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; 

  constructor(private http: HttpClient) {}

  login(loginDTO: LoginDTO): Observable<LoginResponse> {
    const url = `${this.apiUrl}/login`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<LoginResponse>(url, loginDTO, { headers });
  }

  registrarCliente(cliente: RegistrarClienteDTO): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string>(`${this.apiUrl}/registrar`, cliente, { headers });
  }

  
 
}
