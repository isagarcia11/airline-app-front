import { Component } from '@angular/core';
import { VueloService } from '../../servicios/vuelo.service';
import { Vuelo } from '../../modelo/vuelo';
import { Cliente } from '../../modelo/cliente';
import { ModalidadVuelo } from '../../modelo/modalidad-vuelo'; 
import { LugaresViaje } from '../../modelo/lugares-viaje';
import { TipoClase } from '../../modelo/tipo-clase';
import { TipoRuta } from '../../modelo/tipo-ruta';
import { BusquedaVueloDTO } from '../../dtos/busqueda-vuelo-dto';

@Component({
  selector: 'app-buscar-vuelos',
  templateUrl: './buscar-vuelos.component.html',
  styleUrls: ['./buscar-vuelos.component.css']
})
export class BuscarVuelosComponent {
 
  modalidadVuelo: ModalidadVuelo = ModalidadVuelo.IDA;
  origen: LugaresViaje = LugaresViaje.CDMX;
  destino: LugaresViaje = LugaresViaje.BOGOTA;
  tipoClase: TipoClase = TipoClase.ECONOMICA;
  tipoRuta: TipoRuta = TipoRuta.INTERNACIONAL;

  // Almacenamos los vuelos recibidos
  vuelos: Vuelo[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  busquedaDTO: BusquedaVueloDTO = {
    modalidadVuelo: this.modalidadVuelo,
    origen: this.origen,
    destino: this.destino,
    tipoClase: this.tipoClase,
    tipoRuta: this.tipoRuta
  };

  // Enumeraciones para mostrar opciones
  modalidadVueloEnum = Object.values(ModalidadVuelo);
  tipoClaseEnum = Object.values(TipoClase);
  tipoRutaEnum = Object.values(TipoRuta);
  lugaresEnum = Object.values(LugaresViaje);

  constructor(private vueloService: VueloService) {}

  // Método para buscar vuelos
  buscarVuelos() {
    this.isLoading = true;
    this.errorMessage = '';

    // Crear el DTO con los valores seleccionados
    const busquedaDto: BusquedaVueloDTO = {
      modalidadVuelo: this.modalidadVuelo,
      origen: this.origen,
      destino: this.destino,
      tipoClase: this.tipoClase,
      tipoRuta: this.tipoRuta
    };

    const clientId = '12345';  // Aquí puedes pasar el ID de cliente actual

    // Llamada al servicio para buscar vuelos
    this.vueloService.buscarVuelos(clientId, busquedaDto).subscribe({
      next: (result) => {
        this.vuelos = result;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Error al buscar vuelos: ' + err.message;
        this.isLoading = false;
      }
    });
  }
}
