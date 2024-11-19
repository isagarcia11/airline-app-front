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
    const loginDTO: LoginDTO = {
      correo: this.correo,
      contrasena: this.contrasena,
    };

    this.authService.login(loginDTO).subscribe(
      (response) => {
        this.mensaje = `Inicio de sesión exitoso: ${response}`;
        console.log(response); // Maneja la respuesta según tus necesidades
      },
      (error) => {
        this.mensaje = `Error al iniciar sesión: ${error.error}`;
        console.error(error); // Maneja el error
      }
    );
  }
}
