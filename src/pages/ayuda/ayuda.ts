import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';

@IonicPage()
@Component({
    selector: 'ayuda',
    templateUrl: 'ayuda.html'
})
export class Ayuda {

    slides: any;
    colorFondo : string;

    constructor(public navCtrl: NavController, public servicio: KaypiServices) {
        this.slides = [
            {
                titulo: "Búsqueda de Líneas",
                descripcion: "Escriba parte o nombre de una línea para encontrar el resultado. Existen criterios  que permiten filtrar la búsqueda  a través de calles y tipos específicos de servicios de transporte.",
                image: "linea.jpg",
                Numero: "Guia1"
            },
            {
                titulo: "Ir desde mi ubicación",
                descripcion: "Elija un punto de partida (puede ser su misma ubicación u otra diferente seleccionada del mapa).",
                image: "ubicaion.jpg",
                Numero: "Guia2"
            },
            {
                titulo: "Ir desde mi ubicación",
                descripcion: "Elija un punto de destino,  y la aplicación le mostrará las líneas más cercanas que pueden llevarle a su destino.",
                image: "ubicaion2.jpg",
                Numero: "Guia3"
            },
            {
                titulo: "Ir desde mi ubicación",
                descripcion: "La cobertura muestra el alcance actual que tiene la aplicación.",
                image: "ubicaion3.jpg",
                Numero: "Guia4"
            },
            {
                titulo: "Puntos Estratégicos",
                descripcion: "Muestra la información y ubicación de los lugares estratégicos del municipio (Centros de Abasto, Turismo, Salud, Educación, etc). Se pueden realizar búsquedas en base a parámetros.",
                image: "puntoEstrategicos.jpg",
                Numero: "Guia5"
            },
            {
                titulo: "Puntos Estratégicos",
                descripcion: "Elegido un punto estratégico es posible  determinar las líneas que pasan por dicho punto así como trazar una ruta desde su ubicación actual. La aplicación le permite crear sus propios puntos estratégicos.",
                image: "puntoEstrategicos2.jpg",
                Numero: "Guia6"
            },
            {
                titulo: "Noticias y Tráfico",
                descripcion: "Muestra noticias relevantes para el municipio así como información acerca del tráfico (Cortes de vías por reparación, bloqueos, etc.). Puede omitirse la recepción de estas noticias a través de las opciones de configuración",
                image: "noticias.jpg",
                Numero: "Guia7"
            }
        ];
        this.colorFondo = this.servicio.modoApp;
    }

    ionViewDidLoad() {
    this.servicio.paginas = 0;
  }
}