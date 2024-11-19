import { Component } from '@angular/core';
import { VueloService } from '../../servicios/vuelo.service';

@Component({
  selector: 'app-cargar-vuelo',
  templateUrl: './cargar-vuelo.component.html',
  styleUrls: ['./cargar-vuelo.component.css'],
})
export class CargarVueloComponent {
  vueloId: string = '';
  vuelo: any = null;
  errorMessage: string = '';

  constructor(private vueloService: VueloService) {}

  cargarVuelo() {
    this.vueloService.cargarVuelo(this.vueloId).subscribe({
      next: (data) => {
        this.vuelo = data;
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.vuelo = null;
      },
    });
  }
}
