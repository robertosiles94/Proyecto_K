import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';

declare var google;

/**
 * Generated class for the BusquedaCallePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-busqueda-calle',
  templateUrl: 'busqueda-calle.html',
})
export class BusquedaCallePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  colorFondo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servicio: KaypiServices,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.colorFondo = this.servicio.modoApp;
  }

  ionViewDidLoad() {
    this.initMap();
    this.mostrarMensajeCalle();
  }

  initMap() {
    let latLng = new google.maps.LatLng(-17.393835, -66.156946);
    let mapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    google.maps.event.addListener(this.map, 'click', e => {
      this.clickMapa(e);
    });
  }

  goToIrDesdeUbicacion() {
    this.navCtrl.setRoot('MiDestino');
  }

  clickMapa(punto) {
    let loader = this.loadingCtrl.create({
      content: this.servicio.traducir("BuscandoLineas"),
      duration: 2000
    });
    loader.present();
    this.servicio.obtenerLineasPorPunto({position: punto.latLng});
    setTimeout(() => {
      var puntos = {
        Inicio: {position: punto.latLng},
        Fin: null
      };
      this.navCtrl.push('ListaLineas', puntos);
    }, 2000);
  }

  mostrarMensajeCalle() {
    let alert = this.alertCtrl.create({
      title: this.servicio.traducir("BusquedaDeLineas.TituloAlertCalles"),
      message: this.servicio.traducir("BusquedaDeLineas.ContenidoAlertCalles"),
      buttons: [
        {
          text: this.servicio.traducir("Botones.Aceptar")
        }
      ]
    });
    alert.present();
  }

}
