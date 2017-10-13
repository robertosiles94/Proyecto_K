import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';
import { LoadingController } from 'ionic-angular';
import { LatLng } from '@ionic-native/google-maps';
import { Platform } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
    selector: 'puntos-estrategicos-info',
    templateUrl: 'puntos-estrategicos-info.html'
})
export class PuntosEstrategicosInfo {
    nombre: any;
    categoria: any;
    calles: any;
    zona: any;
    descripcion: any;
    imagen: any;
    punto: any;
    rutaImagen: string;
    colorFondo: string;
    lineas: any;

    constructor(public navCtrl: NavController, 
        public platform: Platform, 
        public servicio: KaypiServices, 
        public navParams: NavParams, 
        public loadingCtrl: LoadingController) {
        this.colorFondo = this.servicio.modoApp;
        this.rutaImagen = this.servicio.rutaImagenes;
    }
    cargarPuntoInfo() {
        this.nombre = this.navParams.get('Nombre');
        this.categoria = this.navParams.get('Categoria');
        this.calles = this.navParams.get('Calles');
        this.zona = this.navParams.get('ZonasCBBA');
        this.descripcion = this.navParams.get('Descripcion');
        this.imagen = this.navParams.get('Imagen');
        this.punto = this.navParams.get('Punto');

    }
    ionViewDidLoad() {
        this.servicio.paginas = 1;
        console.log(this.servicio.paginas);
        this.cargarPuntoInfo();
        this.platform.registerBackButtonAction(() => {
            this.navCtrl.pop();
        });
    }

    ionViewDidLeave() {
        console.log(this.servicio.paginas);
    }

    cargarLineas() {
        let loader = this.loadingCtrl.create({
            content: this.servicio.traducir("BuscandoLineas"),
            duration: 2000
        });
        loader.present();
        let myPosition: LatLng = new LatLng(this.punto.lat, this.punto.lng);
        var marker = new google.maps.Marker({
            position: myPosition
        });
        this.servicio.obtenerLineasPorPunto({ position: marker.position });
        setTimeout(() => {
            var puntos = {
                Inicio: {
                    position: marker.position
                },
                Fin: null
            };
            this.navCtrl.push('ListaLineas', puntos);
        }, 2000);
    }

    mostrarPunto() {
        var objeto = {
            Punto: this.navParams,
            Opcion: "Especifico"
        }
        this.navCtrl.push('PuntoEstrategicoMapa', objeto);
    }
}
