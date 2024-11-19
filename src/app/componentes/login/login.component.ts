import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
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
  login() {
    if (this.loginForm.valid) {
      const { correo, contrasena } = this.loginForm.value;
      this.authService.login(correo, contrasena).subscribe({
        next: (response) => {
          this.router.navigate(['/registro']);
          this.successMessage = response;
          this.errorMessage = null;
        },
        error: (error) => {
          this.errorMessage = error.error || 'Error inesperado.';
          this.successMessage = null;
        },
      });
    }
  }
}
