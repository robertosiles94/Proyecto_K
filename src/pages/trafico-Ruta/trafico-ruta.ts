import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';
import { Platform } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
    selector: 'trafico-ruta',
    templateUrl: 'trafico-ruta.html'
})
export class TraficoRuta {

    @ViewChild('map') mapElement: ElementRef;
    map: any;
    linea: any;
    ruta: any;
    lat: any;
    lng: any;
    tipo: string;
    colorFondo: string;

    constructor(public navCtrl: NavController, public servicio: KaypiServices, public navParams: NavParams, public platform: Platform) {
        this.linea = this.navParams.get('linea');
        this.tipo = this.navParams.get('tipo');
        this.colorFondo = this.servicio.modoApp;
        this.lat = this.linea.Rutas.Puntos[0].lat;
        this.lng = this.linea.Rutas.Puntos[0].lng;  
    }

    cargarLinea() {
        this.ruta = this.linea.Rutas.Puntos;
    }

    ionViewDidLoad() {
        this.platform.registerBackButtonAction(() => {
            this.navCtrl.pop();
        });
        console.log(this.servicio.paginas);
        this.cargarLinea();
        this.initMap();
        this.cargarRuta();
    }

    cargarRuta() {
        if(this.tipo === "0") {
            var flightPath = new google.maps.Polyline({
                path: this.ruta,
                geodesic: true,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 2
            });
            flightPath.setMap(this.map);
        } else {
            var covertura = new google.maps.Polygon({
                path: this.ruta,
                geodesic: true,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35
              });
            covertura.setMap(this.map);
        }
    }

    initMap() {
        let latLng = new google.maps.LatLng(this.lat, this.lng);
        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }


}
