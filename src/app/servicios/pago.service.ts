import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private baseUrl = 'http://localhost:8080/api/pago'; 

  constructor(private http: HttpClient) {}

  createOrder(clientId: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/${clientId}/create-payment`, {}, {responseType: 'text' as 'json'})
    .pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error inesperado';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error del servidor: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }
}
