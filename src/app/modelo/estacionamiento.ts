import { CarroEmbarque } from "./carro-embarque";

export class Estacionamiento {
private bicola: Array<CarroEmbarque> = []; // Bicola de carros
  private colaEspera: Array<CarroEmbarque> = []; // Cola de espera
  private pila: Array<CarroEmbarque> = []; // Pila temporal
  private readonly capacidadMaxima: number = 10;
}
