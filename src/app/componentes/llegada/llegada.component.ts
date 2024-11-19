import { Component } from '@angular/core';
import { EmbarqueService } from '../../servicios/embarque.service';
import { CarroEmbarque } from '../../modelo/carro-embarque';

@Component({
  selector: 'app-llegada',
  templateUrl: './llegada.component.html',
  styleUrls: ['./llegada.component.css']
})
export class LlegadaComponent {
  carro: CarroEmbarque = { idCarro: '', cargaActual: 0, idVueloAsociado: '' };
  responseMessage = '';

  constructor(private embarqueService: EmbarqueService) {}

  enviarLlegada() {
    this.embarqueService.llegada(this.carro).subscribe({
      next: (message) => (this.responseMessage = message),
      error: (err) => console.error(err),
    });
  }
}
