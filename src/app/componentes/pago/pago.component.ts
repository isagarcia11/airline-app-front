import { Component } from '@angular/core';
import { PagoService } from '../../servicios/pago.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {

  paymentForm: FormGroup;
  approvalUrl: string | null = null;

  constructor(
    private fb: FormBuilder,
    private paymentService: PagoService,
    private snackBar: MatSnackBar
  ) {
    this.paymentForm = this.fb.group({
      clientId: ['', [Validators.required]],
    });
  }

  createPayment() {
    if (this.paymentForm.valid) {
      const clientId = this.paymentForm.value.clientId;

      this.paymentService.createOrder(clientId).subscribe({
        next: (url: string) => {
          this.approvalUrl = url;
          this.snackBar.open('Enlace generado exitosamente', 'Cerrar', {
            duration: 3000,
          });
        },
        error: (error: string) => {
          this.approvalUrl = null;
          this.snackBar.open(error, 'Cerrar', {
            duration: 3000,
          });
        },
      });
    }
  }
}
