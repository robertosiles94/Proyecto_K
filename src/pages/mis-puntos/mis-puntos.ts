import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { LatLng } from '@ionic-native/google-maps';

/**
 * Generated class for the MisPuntosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-mis-puntos',
  templateUrl: 'mis-puntos.html',
})
export class MisPuntosPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  colorFondo: string;
  nombrePunto: string = "";
  isGPS: boolean;
  puntoLat: any;
  puntoLng: any;
  marker: any = null;
  esValido: boolean;
  opcion: string;

  constructor(public navCtrl: NavController,
    public diagnostic: Diagnostic,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public appCtrl: App,
    private viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public servicio: KaypiServices,
    public navParams: NavParams) {
    this.colorFondo = this.servicio.modoApp;
    console.log(this.servicio.conexionInternet);
  }

  ionViewDidLoad() {
    this.initMap();
    this.servicio.paginas = 1;
    console.log(this.servicio.paginas);
    this.mostrarInformacion();
    this.opcion = this.navParams.get("Opcion");
    if (this.opcion == "modificar") {
      this.mostrarInformacionPunto(this.navParams.get("Punto"));
    }
  }

  ionViewDidLeave() {
    console.log(this.servicio.paginas);
  }

  desdeUbicacion() {
    this.checkLocation();
    setTimeout(() => {
      if (this.isGPS) {
        this.miUbucacion();
      }
    }, 1000);
  }

  miUbucacion() {
    let loader = this.loadingCtrl.create({
      content: this.servicio.traducir("ObteniendoUbicacion")
    });
    loader.present();
    this.geolocation.getCurrentPosition()
      .then(position => {
        this.cargarMiPosicion(position, loader);
      });
    setTimeout(() => {
      loader.dismiss();
    }, 15000);
  }

  checkLocation() {
    this.diagnostic.isLocationEnabled().then(
      (isAvailable) => {
        if (!isAvailable) {
          let alert = this.alertCtrl.create({
            title: this.servicio.traducir("IrDesdeMiUbicacion.TituloAlertGps"),
            subTitle: this.servicio.traducir("IrDesdeMiUbicacion.ContenidoAlertGps"),
            buttons: [this.servicio.traducir("Botones.Aceptar")]
          });
          alert.present();
          this.isGPS = false;
        } else {
          this.isGPS = true;
        }
      }).catch((e) => {
      });
  }

  async cargarMiPosicion(position, loader) {
    if (this.marker != null) {
      this.marker.setMap(null);
    }
    let latitude = await position.coords.latitude;
    let longitud = await position.coords.longitude;
    let myPosition: LatLng = new LatLng(latitude, longitud);
    this.marker = new google.maps.Marker({
      position: myPosition,
      map: this.map,
      icon: 'img/PuntosEstrategicos/Marcadores/favorito.png',
      title: 'Mi Posicion!'
    });
    this.map.setCenter(myPosition);
    loader.dismiss();
  }

  mostrarInformacionPunto(punto) {
    this.nombrePunto = punto.nombre;
    let latLng = new google.maps.LatLng(punto.lat, punto.lng);
    this.marker = new google.maps.Marker({
      position: latLng,
      icon: 'img/PuntosEstrategicos/Marcadores/favorito.png',
      map: this.map
    });
    this.map.panTo(latLng);
    this.map.setZoom(14);
  }

  esPuntoValido() {
    return this.nombrePunto.trim() == "" || this.marker == null;
  }

  initMap() {
    let latLng = new google.maps.LatLng(-17.393835, -66.156946);
    let mapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    google.maps.event.addListener(this.map, 'click', e => {
      this.puntoLat = e.latLng.lat();
      this.puntoLng = e.latLng.lng();
      let latLng = new google.maps.LatLng(this.puntoLat, this.puntoLng);
      if (this.marker != null) {
        this.marker.setMap(null);
      }
      this.marker = new google.maps.Marker({
        position: latLng,
        icon: 'img/PuntosEstrategicos/Marcadores/favorito.png',
        map: this.map
      });
      this.map.panTo(latLng);
    });
  }

  agregarPunto() {
    var miPunto;
    if (this.opcion == "modificar") {
      miPunto = {
        nombre: this.nombrePunto,
        lat: this.marker.position.lat(),
        lng: this.marker.position.lng(),
        id: this.navParams.get("Punto").id
      };
      this.servicio.update(miPunto);
      this.mostrarMensaje(this.servicio.traducir("PuntosEstrategicos.MisPuntos.ToastGuardado"));
      this.servicio.getMisPuntos();
    } else {
      miPunto = {
        nombre: this.nombrePunto,
        lat: this.marker.position.lat(),
        lng: this.marker.position.lng()
      };
      this.servicio.create(miPunto);
      this.mostrarMensaje(this.servicio.traducir("PuntosEstrategicos.MisPuntos.ToastGuardado"));
      this.servicio.getMisPuntos();
    }
    this.viewCtrl.dismiss();
  }

  mostrarInformacion() {
    let toast = this.toastCtrl.create({
      message: this.servicio.traducir("PuntosEstrategicos.MisPuntos.ContenidoAlertPunto"),
      duration: 3000,
      position: 'middle'
    });
    toast.present(toast);
  }

  mostrarMensaje(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });

    toast.present(toast);
  }
}
