import { TipoAeronave } from "./tipo-aeronave";
import { TipoRuta } from "./tipo-ruta";
import { TipoClase } from "./tipo-clase";
import { ConfiguracionClase } from "./configuracion-clase";

export class Aeronave {
    tipo: TipoAeronave;
    tipoDeRuta: TipoRuta; // Nacional o Internacional
    capacidadPasajeros: number;
    configuracionClases: Map<TipoClase, ConfiguracionClase>;
    capacidadCargaKg: number;
    capacidadCargaKgActual: number;
    tripulacionAsignada: Tripulacion; // Tripulación asignada al vuelo
    disponible: boolean;

    constructor(
        tipo: TipoAeronave,
        tipoDeRuta: TipoRuta,
        capacidadPasajeros: number,
        configuracionClases: Map<TipoClase, ConfiguracionClase>,
        capacidadCargaKg: number,
        capacidadCargaKgActual: number,
        tripulacionAsignada: Tripulacion,
        disponible: boolean
    ) {
        this.tipo = tipo;
        this.tipoDeRuta = tipoDeRuta;
        this.capacidadPasajeros = capacidadPasajeros;
        this.configuracionClases = configuracionClases;
        this.capacidadCargaKg = capacidadCargaKg;
        this.capacidadCargaKgActual = capacidadCargaKgActual;
        this.tripulacionAsignada = tripulacionAsignada;
        this.disponible = disponible;
    }
}



export class Tripulacion {
    piloto: string;
    copiloto: string;
    asistentes: string[];

    constructor(piloto: string, copiloto: string, asistentes: string[]) {
        this.piloto = piloto;
        this.copiloto = copiloto;
        this.asistentes = asistentes;
    }
}

