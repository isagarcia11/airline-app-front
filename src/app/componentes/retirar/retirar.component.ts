import { Component } from '@angular/core';
import { EmbarqueService } from '../../servicios/embarque.service';

@Component({
  selector: 'app-retirar',
  templateUrl: './retirar.component.html',
  styleUrls: ['./retirar.component.css']
})
export class RetirarComponent {
  idCarro = '';
  responseMessage = '';

  constructor(private embarqueService: EmbarqueService) {}

  retirarCarro() {
    this.embarqueService.retirar(this.idCarro).subscribe({
      next: (message) => (this.responseMessage = message),
      error: (err) => console.error(err),
    });
  }
}
