// components/reserva-vuelo/reserva-vuelo.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VueloService } from '../../servicios/vuelo.service';
import { ReservaVueloDTO } from '../../dtos/reserva-vuelo-dto';

@Component({
  selector: 'app-reserva-vuelo',
  templateUrl: './reserva-vuelo.component.html',
  styleUrls: ['./reserva-vuelo.component.css'],
})
export class ReservaVueloComponent {
  reservaForm: FormGroup;
  resultado: string | null = null;
  error: string | null = null;

  constructor(private fb: FormBuilder, private vueloService: VueloService) {
    this.reservaForm = this.fb.group({
      vueloId: ['', Validators.required],
      clientId: ['', Validators.required],
      tipoClase: ['', Validators.required],
      cantidadPasajeros: [1, [Validators.required, Validators.min(1)]],
    });
  }

  reservarVuelo() {
    if (this.reservaForm.valid) {
      const { vueloId, clientId, tipoClase, cantidadPasajeros } = this.reservaForm.value;
      const reserva: ReservaVueloDTO = { tipoClase, cantidadPasajeros };

      this.vueloService.reservarVuelo(vueloId, clientId, reserva).subscribe({
        next: (response) => {
          this.resultado = response;
          this.error = null;
        },
        error: (err) => {
          this.error = err.error || 'Ocurrió un error';
          this.resultado = null;
        },
      });
    }
  }
}

