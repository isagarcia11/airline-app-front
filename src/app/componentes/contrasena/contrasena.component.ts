import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Para hacer las solicitudes HTTP

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.component.html',
  styleUrl: './contrasena.component.css'
})
export class ContrasenaComponent {
  contrasenaForm: FormGroup;
  mensaje: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) { 
    this.contrasenaForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  };

  ngOnInit() {
   
  }

  enviarCorreo() {
    if (this.contrasenaForm.valid) {
      const correo = this.contrasenaForm.get('correo')?.value;
      this.mensaje = 'Enviando código...';
  
      this.http.post('http://localhost:8080/api/auth/enviar-codigo-recuperacion', { correo })
        .subscribe(
          (response: any) => {
            if (response.message) {
              this.mensaje = response.message;  // Asegúrate de mostrar el mensaje correcto
            } else {
              this.mensaje = 'Hubo un problema al enviar el código.';
            }
          },
          error => {
            this.mensaje = 'Error en el servidor, intenta más tarde.';
          }
        );
    } else {
      this.mensaje = 'Por favor, ingresa un correo electrónico válido.';
    }
  }
  
  
  


}
