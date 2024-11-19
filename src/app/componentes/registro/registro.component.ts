import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { RegistrarClienteDTO } from '../../dtos/registrar-cliente-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  registroForm!: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registroForm = this.fb.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      fechaNacimiento: ['', Validators.required],
    });
  }

  registrarCliente(): void {
    if (this.registroForm.valid) {
      const cliente: RegistrarClienteDTO = this.registroForm.value;
      this.authService.registrarCliente(cliente).subscribe({
        next: (respuesta: any) => {
          console.log('Respuesta del backend:', respuesta);
          this.mensaje = respuesta.mensaje || 'Registro exitoso';
          this.registroForm.reset();
        },
        error: (error) => {
          console.error('Error recibido:', error);
          if (error.error && typeof error.error === 'object' && error.error.error) {
            this.mensaje = `Error al registrar: ${error.error.error}`;
          } else {
            this.mensaje = 'Ocurrió un error inesperado. Por favor, inténtalo más tarde.';
          }
        },
      });
    }
  }
  
}
