import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { LatLng } from '@ionic-native/google-maps';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
/**
 * Generated class for the MiDestino page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-mi-destino',
  templateUrl: 'mi-destino.html',
})
export class MiDestino {
  select: string = "Ubicacion";
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  rutaA: any;
  origen: any;
  destino: any;
  miPosicion: any;
  marcadorYo: any;
  puntosSelecionados: boolean;
  marcadoresActuales: number;
  testRadioOpen: boolean;
  isCovertura: boolean = false;
  covertura: any;
  isBusqueda: boolean = false;
  isBloqueado: boolean = false;
  valorCobertura: boolean = false;
  isGPS: boolean;
  conexionInter: boolean;
  colorFondo: string;
  mensajesToast: any;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public diagnostic: Diagnostic,
    public servicio: KaypiServices,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private openNativeSettings: OpenNativeSettings) {

    this.marcadoresActuales = 0;
    this.colorFondo = this.servicio.modoApp;
    this.conexionInter = this.servicio.conexionInternet;
  }

  ionViewDidLoad() {
    this.servicio.paginas = 0;
    this.initMap();
    //this.empezarBusqueda();
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

  hayListado() {
    return this.servicio.listaLineasSeleccion.length != 0;
  }

  empezarBusqueda() {
    this.limpiarPuntos();
    this.servicio.listaLineasSeleccion = [];
    this.isBloqueado = true;
    this.isBusqueda = true;
    this.valorCobertura = false;
    let alert = this.alertCtrl.create();
    alert.setTitle(this.servicio.traducir("IrDesdeMiUbicacion.TituloAlertSeleccioneOrigen"));

    alert.addInput({
      type: 'radio',
      label: this.servicio.traducir("IrDesdeMiUbicacion.ContenidoAlertMiUbicacion"),
      value: 'miUbicacion',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: this.servicio.traducir("IrDesdeMiUbicacion.ContenidoAlertElegirOrigen"),
      value: 'eleccion',
      checked: false
    });

    alert.addButton({
      text: this.servicio.traducir("Botones.Cancelar"),
      handler: data => {
        this.isBusqueda = false;
        this.isBloqueado = false;
      }
    });
    alert.addButton({
      text: this.servicio.traducir("Botones.Aceptar"),
      handler: data => {
        this.testRadioOpen = false;
        this.seleccionOrigen(data);
      }
    });
    alert.present();
  }

  seleccionOrigen(opcion) {
    if (opcion == "miUbicacion") {
      this.desdeUbicacion();
    } else {
      this.seleccioneOrigen();
      this.marcadorYo = null;
      this.marcadoresActuales = 0;
    }
  }

  seleccioneOrigen() {
    if (this.mensajesToast != null)
      this.mensajesToast.dismiss();
    this.mensajesToast = this.toastCtrl.create({
      message: this.servicio.traducir("IrDesdeMiUbicacion.Origen.ContenidoAlertOrigen"),
      position: 'bottom'
    });
    this.mensajesToast.present(this.mensajesToast);
    //let alert = this.alertCtrl.create({
      //title: this.servicio.traducir("IrDesdeMiUbicacion.Origen.TituloAlertOrigen"),
      //subTitle: this.servicio.traducir("IrDesdeMiUbicacion.Origen.ContenidoAlertOrigen"),
      //buttons: [this.servicio.traducir("Botones.Aceptar")]
    //});
    //alert.present();
  }

  selecioneDestino() {
    this.mensajesToast = this.toastCtrl.create({
      message: this.servicio.traducir("IrDesdeMiUbicacion.Origen.ContenidoAlertDestino"),
      position: 'bottom'
    });
    this.mensajesToast.present(this.mensajesToast);
    //let alert = this.alertCtrl.create({
      //title: this.servicio.traducir("IrDesdeMiUbicacion.Origen.TituloAlertDestino"),
      //subTitle: this.servicio.traducir("IrDesdeMiUbicacion.Origen.ContenidoAlertDestino"),
      //buttons: [this.servicio.traducir("Botones.Aceptar")]
    //});
    //alert.present();
  }

  clickMapa(punto) {
    if (this.isBusqueda) {
      if (this.marcadoresActuales < 2) {
        if (this.marcadoresActuales == 0) {
          var marker = new google.maps.Marker({
            position: punto.latLng,
            icon: 'img/BusquedaUbicacion/Marcadores/marcadorIni.png',
            map: this.map
          });
          this.origen = marker;
          this.marcadoresActuales += 1;
          this.map.panTo(punto.latLng);
          console.log(this.servicio.obtenerLineasPorPunto(this.origen));
          if (this.mensajesToast != null)
            this.mensajesToast.dismiss();
          this.selecioneDestino();
        } else if (this.marcadoresActuales == 1) {
          var marker = new google.maps.Marker({
            position: punto.latLng,
            icon: 'img/BusquedaUbicacion/Marcadores/marcadorFin.png',
            map: this.map
          });
          this.destino = marker;
          this.marcadoresActuales += 1;
          this.map.panTo(punto.latLng);
          this.selecionados();
          this.mostrarLineas();
        }
      }
    }
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

  desdeUbicacion() {
    this.checkLocation();
    setTimeout(() => {
      if (this.isGPS) {
        this.getMyCurrentPosition();
      } else {
        this.marcadorYo = null;
        this.marcadoresActuales = 0;
        this.isBusqueda = false;
      }
    }, 1000);
  }

  selecionDePuntos() {
    this.limpiarPuntos();
    this.marcadoresActuales = 0;
  }

  async cargarMiPosicion(position, loader) {
    let latitude = await position.coords.latitude;
    let longitud = await position.coords.longitude;
    let myPosition: LatLng = new LatLng(latitude, longitud);
    var marker = new google.maps.Marker({
      position: myPosition,
      map: this.map,
      icon: 'img/BusquedaUbicacion/Marcadores/marcadorYo.png',
      title: 'Mi Posicion!'
    });
    this.marcadoresActuales = 1;
    this.marcadorYo = marker;
    this.miPosicion = myPosition;
    this.origen = this.marcadorYo;
    this.map.setCenter(myPosition);
    this.map.setZoom(14);
    loader.dismiss();
    this.selecioneDestino();
  }

  selecionados() {
    this.puntosSelecionados = this.origen !== undefined && this.destino !== undefined;
  }

  listadoLineas() {
    var puntos = {
      Inicio: this.origen,
      Fin: this.destino
    };
    this.navCtrl.push('ListaLineas', puntos);
  }

  limpiarPuntos() {
    if (this.origen !== undefined) {
      this.origen.setMap(null);
      this.origen = undefined;
      this.marcadoresActuales--;
    }
    if (this.destino !== undefined) {
      this.destino.setMap(null);
      this.destino = undefined;
      this.marcadoresActuales--;
    }
    this.selecionados();
  }

  mostrarLineas() {
    if (this.mensajesToast != null)
      this.mensajesToast.dismiss();
    if (this.origen != null) {
      var distancia = this.servicio.distanciaEntreDosPuntos(this.origen, this.destino);
      if (distancia > 300) {
        let loader = this.loadingCtrl.create({
          content: this.servicio.traducir("BuscandoLineas"),
          duration: 3000
        });
        loader.present();
        this.servicio.obtenerLineasPorSelecion(this.origen, this.destino);
        setTimeout(() => {
          var puntos = {
            Inicio: this.origen,
            Fin: this.destino
          };
          this.navCtrl.push('ListaLineas', puntos);
        }, 3000);
      } else {
        let alert = this.alertCtrl.create({
          title: this.servicio.traducir("IrDesdeMiUbicacion.TituloAlertDistancia"),
          subTitle: this.servicio.traducir("IrDesdeMiUbicacion.ContenidoAlertDistancia"),
          buttons: [this.servicio.traducir("Botones.Aceptar")]
        });
        alert.present();
      }
    } else {
      let alert = this.alertCtrl.create({
        title: this.servicio.traducir("IrDesdeMiUbicacion.TituloAlertErrorBusqueda"),
        subTitle: this.servicio.traducir("IrDesdeMiUbicacion.ContenidoAlertErrorBusqueda"),
        buttons: [this.servicio.traducir("Botones.Aceptar")]
      });
      alert.present();
    }
    this.isBusqueda = false;
    this.isBloqueado = false;
  }

  mostrarMensaje() {
    let toast = this.toastCtrl.create({
      message: this.servicio.traducir("IrDesdeMiUbicacion.ToastCobertura"),
      duration: 6000,
      position: 'bottom'
    });
    toast.present(toast);
  }

  mostrarCobertura() {
    if (this.valorCobertura) {
      var puntos = this.servicio.obtenerZonas();
      this.covertura = [];
      for (let i = 0; i < puntos.length; i++) {
        var covertura = new google.maps.Polygon({
          path: puntos[i].Puntos,
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35
        });
        covertura.setMap(this.map);
        this.covertura.push(covertura);
      }
      this.isCovertura = true;
      this.mostrarMensaje();
    } else {
      for (let i = 0; i < this.covertura.length; i++) {
        this.covertura[i].setMap(null);
      }
      this.covertura = [];
      this.isCovertura = false;
    }
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
}
