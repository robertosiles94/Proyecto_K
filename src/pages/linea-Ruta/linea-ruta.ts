import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';
import { Platform } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'linea-ruta',
  templateUrl: 'linea-ruta.html',
})
export class LineaRuta {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  linea: any;
  nombreLinea: any;
  rutas: any;
  flightPath: any;
  allRutas: any;
  opcion: string;
  puntosSelecion: any;
  sentido: any;
  colorFondo: string;

  constructor(public navCtrl: NavController,
    public servicio: KaypiServices,
    public navParams: NavParams,
    public network: Network,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public platform: Platform) {
    this.opcion = "";
    this.puntosSelecion = this.navParams.get('Puntos');
    this.linea = this.navParams.get('Linea');
    this.sentido = this.navParams.get('Sentido');
    this.nombreLinea = this.linea.Nombre;
    this.colorFondo = this.servicio.modoApp;
  }

  presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

  cargarLinea() {
    this.nombreLinea = this.linea.Nombre;
    this.rutas = this.linea.Rutas;
  }

  ionViewDidLoad() {
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
    });
    this.cargarLinea();
    this.initMap();
    this.cargarAllRutas();
    if (this.sentido != null) {
      for (let i = 0; i < this.rutas.length; i++) {
        if (this.rutas[i].Sentido[0] == this.sentido.SentV || this.rutas[i].Sentido[0] == this.sentido.SentH) {
          this.removeLine(this.rutas[i]);
          this.mostrarMarcadores();
          return;
        }
      }
    }
    if (this.puntosSelecion != null) {
      this.mostrarMarcadores();
    }
  }

  mostrarMarcadores() {
    var marker = new google.maps.Marker({
      position: this.puntosSelecion.Punto1,
      icon: 'img/BusquedaUbicacion/Marcadores/marcadorIni.png',
      map: this.map
    });
    if (this.puntosSelecion.Punto2 != null) {
      var marker2 = new google.maps.Marker({
        position: this.puntosSelecion.Punto2,
        icon: 'img/BusquedaUbicacion/Marcadores/marcadorFin.png',
        map: this.map
      });
    }
  }

  cargarAllRutas() {
    if (this.opcion != "todos") {
      if (this.flightPath != undefined) {
        this.flightPath.setMap(null);
      }
      this.allRutas = [];
      this.opcion = "todos";
      for (let i = 0; i < this.rutas.length; i++) {
        var linePath = new google.maps.Polyline({
          path: this.rutas[i].Puntos,
          geodesic: true,
          strokeColor: this.cargarColor(this.rutas[i].Color),
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        this.allRutas.push(linePath);
        linePath.setMap(this.map);
      }
      this.flightPath = this.allRutas[0];
    }
  }

  animateCircle(line) {
    var count = 0;
    window.setInterval(function () {
      count = (count + 1) % 200;
      var icons = line.get('icons');
      icons[0].offset = (count / 2) + '%';
      line.set('icons', icons);
    }, 20);
  }

  removeAllRutas() {
    for (let i = 0; i < this.rutas.length; i++) {
      this.allRutas[i].setMap(null);
    }
  }

  goToBusquedaPorCalles() {
    this.navCtrl.push('BusquedaCallePage');
  }

  cargarRuta(ruta) {
    var lineSymbol = {
      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
      scale: 3,
      strokeColor: '#488aff'
    };
    this.flightPath = new google.maps.Polyline({
      path: ruta.Puntos,
      icons: [{
        icon: lineSymbol,
        offset: '100%'
      }],
      geodesic: true,
      strokeColor: this.cargarColor(ruta.Color),
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    this.animateCircle(this.flightPath);
    this.flightPath.setMap(this.map);
    this.opcion = "";
  }

  cargarColor(color) {
    var result = '';
    if (color == "secondary") {
      result = '#32DB64';
    } else if (color == "danger") {
      result = '#F53D3D';
    } else if (color == "dark") {
      result = '#222222';
    }
    return result;
  }

  removeLine(ruta) {
    if (this.opcion == "todos") {
      this.removeAllRutas();
    } else {
      this.flightPath.setMap(null);
    }
    this.cargarRuta(ruta);
  }

  initMap() {
    let latLng = new google.maps.LatLng(-17.393835, -66.156946);
    let mapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}