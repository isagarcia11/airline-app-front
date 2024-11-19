import { TipoClase } from "./tipo-clase";
    export class Cliente {
        idCliente: string;
        identificacion: string;
        nombre: string;
        apellido: string;
        direccion: string;
        correo: string;
        contrasena: string;
        fechaNacimiento: Date;
        listaReservas: Map<string, TipoClase>; 
        ordenId: string;
        codigoRecuperacionContrasena: string;
    
        constructor(
            idCliente: string,
            identificacion: string,
            nombre: string,
            apellido: string,
            direccion: string,
            correo: string,
            contrasena: string,
            fechaNacimiento: Date,
            listaReservas: Map<string, TipoClase>,
            ordenId: string,
            codigoRecuperacionContrasena: string
        ) {
            this.idCliente = idCliente;
            this.identificacion = identificacion;
            this.nombre = nombre;
            this.apellido = apellido;
            this.direccion = direccion;
            this.correo = correo;
            this.contrasena = contrasena;
            this.fechaNacimiento = fechaNacimiento;
            this.listaReservas = listaReservas;
            this.ordenId = ordenId;
            this.codigoRecuperacionContrasena = codigoRecuperacionContrasena;
        }
    }
    
    
