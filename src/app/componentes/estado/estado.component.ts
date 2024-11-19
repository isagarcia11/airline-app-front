import { Component, OnInit } from '@angular/core';
import { EmbarqueService } from '../../servicios/embarque.service';
import { Estacionamiento } from '../../modelo/estacionamiento';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  estado: Estacionamiento | null = null;

  constructor(private embarqueService: EmbarqueService) {}

  ngOnInit() {
    this.embarqueService.obtenerEstado().subscribe({
      next: (estado) => (this.estado = estado),
      error: (err) => console.error(err),
    });
  }
}
