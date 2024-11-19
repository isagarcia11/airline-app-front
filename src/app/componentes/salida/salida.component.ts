import { Component } from '@angular/core';
import { EmbarqueService } from '../../servicios/embarque.service';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent {
  responseMessage = '';

  constructor(private embarqueService: EmbarqueService) {}

  registrarSalida() {
    this.embarqueService.salida().subscribe({
      next: (message) => (this.responseMessage = message),
      error: (err) => console.error(err),
    });
  }
}
