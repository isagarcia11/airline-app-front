import { LugaresViaje } from "../modelo/lugares-viaje";
import { ModalidadVuelo } from "../modelo/modalidad-vuelo";
import { TipoClase } from "../modelo/tipo-clase";
import { TipoRuta } from "../modelo/tipo-ruta";

export interface BusquedaVueloDTO {
  modalidadVuelo: ModalidadVuelo;
  origen: LugaresViaje;
  destino: LugaresViaje;
  tipoClase: TipoClase;
  tipoRuta: TipoRuta;
}
