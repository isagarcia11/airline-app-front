import { ModalidadVuelo } from "../modelo/modalidad-vuelo";
import { TipoClase } from "../modelo/tipo-clase";
import { TipoRuta } from "../modelo/tipo-ruta";
import { Cliente } from "../modelo/cliente";
import { Aeronave } from "./aeronave";


export interface Vuelo {
   idVuelo: String,
   nombreRuta:String,
   nombreRutaVuelta: String,
   aeronave: Aeronave,
   pasajeros: Cliente[]

}
