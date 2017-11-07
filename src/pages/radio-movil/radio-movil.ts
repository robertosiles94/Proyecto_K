import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController, ModalController } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { LatLng } from '@ionic-native/google-maps';

import { OpenNativeSettings } from '@ionic-native/open-native-settings';

/**
 * Generated class for the RadioMovilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-radio-movil',
  templateUrl: 'radio-movil.html',
})
export class RadioMovilPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  radioMoviles: any;
  colorFondo: string;
  origen: any;
  isGPS: boolean;
  miPosicion: any;
  marcadorYo: any;
  mensajesToast: any;
  allMarcadores: any;
  marcadoresActuales: number;
  isOrigen: boolean = false;
  listaDistancias: any = [];
  listaDistanciasFinal: any = [];
  public NroMoviles: number = 4;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public servicio: KaypiServices,
    public toastCtrl: ToastController,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public diagnostic: Diagnostic,
    private openNativeSettings: OpenNativeSettings,
    private modal: ModalController) {
    this.colorFondo = this.servicio.modoApp;
    this.marcadoresActuales = 0;
  }

  ionViewDidLoad() {
    this.initMap();
    this.empezarBusqueda();
    this.cargarRadioMoviles();

  }

  removeAllPuntos() {
    for (let i = 0; i < this.allMarcadores.length; i++) {
      this.allMarcadores[i].setMap(null);
    }
  }

  cargarRadioMoviles() {
    this.radioMoviles = this.servicio.obtenerRadioMoviles();
  }


  graficarParadasFinal() {
    this.allMarcadores = [];
    for (let i = 0; i < this.NroMoviles; i++) {
      let latitude = this.listaDistanciasFinal[i].Lati;
      let longitud = this.listaDistanciasFinal[i].Long;
      let myPosition: LatLng = new LatLng(latitude, longitud);
      var marker = new google.maps.Marker({
        position: myPosition,
        map: this.map,
        icon: {
          labelOrigin: new google.maps.Point(25, -10),
          url: 'img/RadioMoviles/marcadorTaxiA.png',
          origin: new google.maps.Point(0, 0),
        },
        title: this.listaDistanciasFinal[i].Titulo,
        label: {
          color: 'black',
          fontWeight: 'bold',
          fontsize: 14,
          text: this.listaDistanciasFinal[i].Titulo,
        },
      });
      const objetoFinal = {
        Marker: marker, Objeto: this.listaDistanciasFinal[i]
      }
      this.addInfoWindowToMarker(objetoFinal);
      this.allMarcadores.push(marker);
      marker.setMap(this.map);
      this.map.setCenter(myPosition);
    }
    this.map.setZoom(13);
    this.mensajesToast.dismiss();
    if (this.listaDistanciasFinal.length == 0) {
      this.mensajesToast.dismiss();
      this.mensajesToast = this.toastCtrl.create({
        message: this.servicio.traducir("RadioMoviles.ToastError"),
        position: 'bottom'
      });
      this.mensajesToast.present(this.mensajesToast);
    }
  }


  graficarParadas() {
    this.allMarcadores = [];
    for (let i = 0; i < this.radioMoviles.length; i++) {
      for (let j = 0; j < this.radioMoviles[i].Paradas.length; j++) {
        let latitude = this.radioMoviles[i].Paradas[j].lat;
        let longitud = this.radioMoviles[i].Paradas[j].lng;
        let myPosition: LatLng = new LatLng(latitude, longitud);
        var marker = new google.maps.Marker({
          position: myPosition,
          map: this.map,
          icon: {
            labelOrigin: new google.maps.Point(25, -10),
            url: 'img/RadioMoviles/marcadorTaxiA.png',
            origin: new google.maps.Point(0, 0),
          },
          label: {
            color: 'black',
            fontWeight: 'bold',
            fontsize: 14,
            text: this.radioMoviles[i].Nombre,
          },
        });
        const objetoFinal = {
          Marker: marker, Objeto: {
            Lati: latitude, Long: longitud, Titulo: this.radioMoviles[i].Nombre,
            Direccion: this.radioMoviles[i].Paradas[j].direccion, Logo: this.radioMoviles[i].Logo,
            Telefonos: this.radioMoviles[i].Telefonos
          }
        }
        this.addInfoWindowToMarker(objetoFinal);
        this.allMarcadores.push(marker);
        marker.setMap(this.map);
        this.map.setCenter(myPosition);
      }
      this.map.setZoom(13);
    }
  }
  addInfoWindowToMarker(object) {
    object.Marker.addListener('click', () => {
      const myModal = this.modal.create('ModalRadioMovilPage', { data: object });
      myModal.present();
    });
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
      this.clickMapa(e);
    });
  }

  limpiarPuntos() {
    if (this.origen !== undefined) {
      this.origen.setMap(null);
      this.origen = undefined;
      this.marcadoresActuales--;
      this.removeAllPuntos();
      this.listaDistanciasFinal = [];
    }
    if (this.allMarcadores !== undefined) {
      if (this.allMarcadores.length > 0) {
        this.removeAllPuntos();
      }
    }
  }


  empezarBusqueda() {
    this.limpiarPuntos();
    let alert = this.alertCtrl.create();
    alert.setTitle(this.servicio.traducir("RadioMoviles.TituloAlert"));

    alert.addInput({
      type: 'radio',
      label: this.servicio.traducir("RadioMoviles.Opcion1"),
      value: 'miUbicacion',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: this.servicio.traducir("RadioMoviles.Opcion2"),
      value: 'eleccion',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: this.servicio.traducir("RadioMoviles.Opcion3"),
      value: 'todos',
      checked: false
    });

    alert.addButton({
      text: this.servicio.traducir("Botones.Cancelar"),
      handler: data => {
      }
    });
    alert.addButton({
      text: this.servicio.traducir("Botones.Aceptar"),
      handler: data => {
        this.seleccionOrigen(data);

      }
    });
    alert.present();
  }

  seleccionOrigen(opcion) {
    if (opcion == "miUbicacion") {
      this.desdeUbicacion();
    } else if (opcion == "eleccion") {
      this.seleccioneOrigen();
      this.marcadoresActuales = 0;
      this.isOrigen = true;
    }
    else if (opcion == "todos") {
      this.graficarParadas();
    }
  }

  seleccioneOrigen() {
    if (this.mensajesToast != null)
      this.mensajesToast.dismiss();
    this.mensajesToast = this.toastCtrl.create({
      message: this.servicio.traducir("RadioMoviles.ToastSeleccionPunto"),
      duration: 2000,
      position: 'bottom'
    });
    this.mensajesToast.present(this.mensajesToast);
  }

  async getMyCurrentPosition() {
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

  async cargarMiPosicion(position, loader) {
    let latitude = await position.coords.latitude;
    let longitud = await position.coords.longitude;
    let myPosition: LatLng = new LatLng(latitude, longitud);
    var marker = new google.maps.Marker({
      position: myPosition,
      map: this.map,
      icon: 'img/RadioMoviles/miMarcador.png',
      title: 'Mi Posicion!'
    });
    this.marcadorYo = marker;
    this.miPosicion = myPosition;
    this.origen = this.marcadorYo;
    this.map.setCenter(myPosition);
    this.map.setZoom(14);
    loader.dismiss();
    this.verificarDistancias(marker);
    if (this.listaDistanciasFinal.length == 0) {
      this.mensajesToast.dismiss();
      this.mensajesToast = this.toastCtrl.create({
        message: this.servicio.traducir("RadioMoviles.ToastError"),
        position: 'bottom'
      });
      this.mensajesToast.present(this.mensajesToast);
    } else
      this.graficarParadasFinal();
  }

  desdeUbicacion() {
    this.checkLocation();
    setTimeout(() => {
      if (this.isGPS) {
        this.getMyCurrentPosition();
      } else {
        this.marcadorYo = null;
        this.marcadoresActuales = 0;
        this.isOrigen = false;
      }
    }, 1000);
  }

  checkLocation() {
    this.diagnostic.isLocationEnabled().then(
      (isAvailable) => {
        if (!isAvailable) {
          let alert = this.alertCtrl.create({
            title: this.servicio.traducir("IrDesdeMiUbicacion.TituloAlertGps"),
            subTitle: this.servicio.traducir("IrDesdeMiUbicacion.ContenidoAlertGps")
          });
          alert.addButton({
            text: this.servicio.traducir("Botones.Aceptar")
          });
          alert.addButton({
            text: this.servicio.traducir("Botones.Ajustes"),
            handler: data => {
              this.openNativeSettings.open('location');
            }
          });
          alert.present();
          this.isGPS = false;
        } else {
          this.isGPS = true;
        }
      }).catch((e) => {
      });
  }

  verificarDistancias(pI) {
    this.listaDistanciasFinal = [];
    var c = 0;
    var x = 0;
    for (let i = 0; i < this.radioMoviles.length; i++) {
      for (let j = 0; j < this.radioMoviles[i].Paradas.length; j++) {
        let latitude = this.radioMoviles[i].Paradas[j].lat;
        let longitud = this.radioMoviles[i].Paradas[j].lng;
        this.listaDistancias[c] = Math.sqrt(Math.pow(Math.abs(latitude) - Math.abs(pI.position.lat()), 2) + Math.pow(Math.abs(longitud) - Math.abs(pI.position.lng()), 2)) * 100000;
        if (this.listaDistancias[c] < 6000) {
          this.listaDistanciasFinal = this.listaDistancias.sort((n1, n2) => n1 - n2);
          const myObject = {
            Lati: latitude, Long: longitud, Titulo: this.radioMoviles[i].Nombre,
            Direccion: this.radioMoviles[i].Paradas[j].direccion, Logo: this.radioMoviles[i].Logo,
            Telefonos: this.radioMoviles[i].Telefonos
          }
          this.listaDistanciasFinal[c] = myObject;
          c++;
        }
      }
    }
  }

  clickMapa(punto) {
    if (this.isOrigen) {
      if (this.marcadoresActuales < 1) {
        var marker = new google.maps.Marker({
          position: punto.latLng,
          icon: 'img/BusquedaUbicacion/Marcadores/marcadorYo.png',
          map: this.map
        });
        this.origen = marker;
        this.marcadoresActuales += 1;
        this.map.panTo(punto.latLng);
        this.verificarDistancias(marker);
        if (this.listaDistanciasFinal.length == 0) {
          this.mensajesToast.dismiss();
          this.mensajesToast = this.toastCtrl.create({
            message: this.servicio.traducir("RadioMoviles.ToastError"),
            position: 'bottom'
          });
          this.mensajesToast.present(this.mensajesToast);
        } else
          this.graficarParadasFinal();
      }
    }
  }

  openModal() {
    const myModal = this.modal.create('ModalPage');
    myModal.present();
  }

}
