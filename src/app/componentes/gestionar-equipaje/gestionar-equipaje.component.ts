import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-gestionar-equipaje',
  templateUrl: './gestionar-equipaje.component.html',
  styleUrls: ['./gestionar-equipaje.component.css'],
})
export class GestionarEquipajeComponent {
  equipajeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.equipajeForm = this.fb.group({
      pesoPiezaUno: [null, [Validators.required, Validators.min(0)]],
      pesoPiezaDos: [null, [Validators.required, Validators.min(0)]],
      altoPiezaUno: [null, [Validators.required, Validators.min(0)]],
      altoPiezaDos: [null, [Validators.required, Validators.min(0)]],
      anchoPiezaUno: [null, [Validators.required, Validators.min(0)]],
      anchoPiezaDos: [null, [Validators.required, Validators.min(0)]],
      largoPiezaUno: [null, [Validators.required, Validators.min(0)]],
      largoPiezaDos: [null, [Validators.required, Validators.min(0)]],
      pesoEquipajeMano: [null, [Validators.required, Validators.min(0)]],
      altoEquipajeMano: [null, [Validators.required, Validators.min(0)]],
      anchoEquipajeMano: [null, [Validators.required, Validators.min(0)]],
      largoEquipajeMano: [null, [Validators.required, Validators.min(0)]],
      pesoEquipajeAdicional: [null, [Validators.required, Validators.min(0)]],
      pesoMascota: [null, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.equipajeForm.valid) {
      console.log('Formulario enviado:', this.equipajeForm.value);
      // Aquí puedes llamar al servicio para enviar los datos al backend
    }
  }

  onReset() {
    this.equipajeForm.reset();
  }
}

