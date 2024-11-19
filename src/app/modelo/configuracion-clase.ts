export class ConfiguracionClase {
    id: number;
    cantidadAsientos: number;
    precio: number;

    constructor(id: number, cantidadAsientos: number, precio: number) {
        this.id = id;
        this.cantidadAsientos = cantidadAsientos;
        this.precio = precio;
    }
}
