import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { LoginDTO } from '../../dtos/login-dto';
  


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  correo: string = '';
  contrasena: string = '';
  mensaje: string = '';

  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    
  }
  
  ngOnInit(): void {
  this.loginForm = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    contrasena: ['', [Validators.required, Validators.minLength(6)]],
  });
  }

  public login() {

    this.successMessage = null;
    this.errorMessage = null;

    const correo = this.loginForm.get('correo')?.value;
    const contrasena = this.loginForm.get('contrasena')?.value;
  
    console.log("Correo enviado al backend: ", correo); // Log para verificar el valor del correo
  
    const loginDTO: LoginDTO = {
      correo: correo,
      contrasena: contrasena,
    };
  
    this.authService.login(loginDTO).subscribe(
      (response) => {
        // Verifica que la respuesta tenga el campo mensaje
        console.log('Respuesta del backend:', response);
  
        if (response.mensaje) {
          this.successMessage = response.mensaje; // Asignar el mensaje de éxito
        } else {
          this.errorMessage = 'Error inesperado. No se recibió mensaje.';
        }
        console.log(this.successMessage);
        this.router.navigate(['/usuario-menu']); // Redirige a la página correspondiente
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        this.errorMessage = error.error.error || 'Error al iniciar sesión'; 
      }
    );
  }
  
  
  
}
