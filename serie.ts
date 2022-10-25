export class Serie{
    numero: number;
    nombre: string;
    canal: string;
    temporadas: number;
    resumen: string;
    linkCanal: string;
    imagen: string;

    constructor(numero: number, nombre: string,
                canal: string, temporadas: number, resumen:string,
                linkCanal:string, imagen:string)
            {
                this.numero = numero;
                this.nombre = nombre;
                this.canal = canal;
                this.temporadas = temporadas;
                this.resumen = resumen;
                this.linkCanal = linkCanal;
                this.imagen = imagen;
            }
}