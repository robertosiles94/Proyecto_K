import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { LatLng } from '@ionic-native/google-maps';
import { ToastController } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'punto-estrategico-mapa',
  templateUrl: 'punto-estrategico-mapa.html'
})
export class PuntoEstrategicoMapa {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  ubicacionPuntoEstrategico: any;
  nombrePuntoEstrategico: any;
  iconos: any;
  allMarcadores: any;
  opcion: any;
  listaPuntos: any;
  categorias: any;
  fabTodos: boolean;
  fabPunto: boolean;
  userPosicion: any;
  puntoEstrategico: any;
  colorFondo: string;
  isGPS = false;
  origen: boolean = false;
  mensajesToast: any;

  constructor(public navCtrl: NavController, public diagnostic: Diagnostic, public navParams: NavParams, public servicio: KaypiServices, public geolocation: Geolocation, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.cargarFab();
    this.colorFondo = this.servicio.modoApp;
  }

  cargarFab() {
    this.opcion = this.navParams.get('Opcion');
    if (this.opcion == "Todos") {
      this.fabTodos = true;
      this.fabPunto = false;
    }
    else {
      this.fabTodos = false;
      this.fabPunto = true;
    }
  }

  cargarCategorias() {
    this.categorias = [
      { Nombre: "Todos", Valor: "Todos", Imagen: "Todos.png" },
    ];
    for (let i = 0; i < this.listaPuntos.length; i++) {
      if (!this.existeCategoria(this.categorias, this.listaPuntos[i].Categoria)) {
        this.categorias.push({ Nombre: this.listaPuntos[i].Categoria, Valor: this.listaPuntos[i].Categoria, Imagen: this.listaPuntos[i].Marcador });
      }
    }
  }

  existeCategoria(lista, categoria) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].Nombre == categoria) {
        return true;
      }
    }
    return false;
  }


  addInfoWindowToMarker(object) {
    var infoWindowContent = '<div id="content"><h1 id="firstHeading" class="firstHeading">' + object.Marker.title + '</h1><br>' + object.Categoria + '<h2></h2></div>';
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    object.Marker.addListener('click', () => {
      infoWindow.open(this.map, object.Marker);
    });
  }

  cargarPosicionPuntosEstrategicos() {
    this.allMarcadores = [];
    for (let i = 0; i < this.listaPuntos.length; i++) {
      let latitude = this.listaPuntos[i].Punto.lat;
      let longitud = this.listaPuntos[i].Punto.lng;
      let myPosition: LatLng = new LatLng(latitude, longitud);
      var marker = new google.maps.Marker({
        position: myPosition,
        map: this.map,
        icon: 'img/PuntosEstrategicos/Marcadores/' + this.listaPuntos[i].Marcador,
        title: this.listaPuntos[i].Nombre
      });
      var object = { Marker: marker, Categoria: this.listaPuntos[i].Categoria }
      this.addInfoWindowToMarker(object);
      this.allMarcadores.push(marker);
      marker.setMap(this.map);
      this.map.setCenter(myPosition);
    }
    this.map.setZoom(13);
  }

  cargarPosicionPuntosEstrategicosCategoria(categorias) {
    this.allMarcadores = [];
    if (categorias == "Todos") {
      this.cargarPosicionPuntosEstrategicos();
    } else {
      for (let i = 0; i < this.listaPuntos.length; i++) {
        if (this.listaPuntos[i].Categoria == categorias) {
          let latitude = this.listaPuntos[i].Punto.lat;
          let longitud = this.listaPuntos[i].Punto.lng;
          let myPosition: LatLng = new LatLng(latitude, longitud);
          var marker = new google.maps.Marker({
            position: myPosition,
            map: this.map,
            icon: 'img/PuntosEstrategicos/Marcadores/' + this.listaPuntos[i].Marcador,
            title: this.listaPuntos[i].Nombre
          });
          var object = { Marker: marker, Categoria: this.listaPuntos[i].Categoria }
          this.addInfoWindowToMarker(object);
          this.allMarcadores.push(marker);
          marker.setMap(this.map);
          this.map.setCenter(myPosition);
        }
      }
      this.map.setZoom(13);
    }
  }

  removeAllPuntos() {
    for (let i = 0; i < this.allMarcadores.length; i++) {
      this.allMarcadores[i].setMap(null);
    }
  }

  removePuntos(categorias) {
    if (categorias == "Todos") {
      this.removeAllPuntos();
      this.cargarPosicionPuntosEstrategicos();
    } else {
      this.removeAllPuntos();
      this.cargarPosicionPuntosEstrategicosCategoria(categorias);
    }
  }

  cargarPuntos() {
    this.listaPuntos = this.servicio.obtenerPuntos().PuntosEstrategicos;
  }

  cargarPuntoEstrategico(punto) {
    this.nombrePuntoEstrategico = punto.data.Nombre;
    this.ubicacionPuntoEstrategico = punto.data.Punto;
    this.iconos = punto.data.Marcador;
  }

  ionViewDidLoad() {
    this.initMap();
    console.log(this.servicio.paginas);
    this.allMarcadores = [];
    this.opcion = this.navParams.get('Opcion');
    this.cargarPuntos();
    if (this.opcion == "Especifico") {
      this.servicio.paginas = 2;
      if (this.allMarcadores.length > 0) {
        this.removeAllPuntos();
      }
      var punto = this.navParams.get('Punto');
      this.cargarPuntoEstrategico(punto);
      this.cargarPosicionPuntoEstrategico();
    }
    else if (this.opcion = "Todos") {
      this.servicio.paginas = 1;
      this.cargarCategorias();
      this.cargarPosicionPuntosEstrategicos();
    }
  }

  ionViewDidLeave() {
    console.log(this.servicio.paginas);
  }

  cargarPosicionPuntoEstrategico() {
    let latitude = this.ubicacionPuntoEstrategico.lat;
    let longitud = this.ubicacionPuntoEstrategico.lng;
    let myPosition: LatLng = new LatLng(latitude, longitud);
    var marker = new google.maps.Marker({
      position: myPosition,
      map: this.map,
      icon: 'img/PuntosEstrategicos/Marcadores/' + this.iconos,
      title: this.nombrePuntoEstrategico
    });
    this.puntoEstrategico = marker;
    this.map.setCenter(myPosition);
    this.map.setZoom(15);
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
      if (this.origen) {
        var marker = new google.maps.Marker({
          position: e.latLng,
          map: this.map
        });
        this.mensajesToast.dismiss();
        let loader2 = this.loadingCtrl.create({
          content: this.servicio.traducir("BuscandoLineas"),
          duration: 3000
        });
        loader2.present();
        this.userPosicion = marker;
        this.servicio.obtenerLineasPorSelecion(marker, this.puntoEstrategico);
        setTimeout(() => {
          this.mostrarLineas();
          this.origen = false;
          this.userPosicion.setMap(null);
        }, 2000);
      }
    });
  }

  getMyCurrentPosition() {
    this.checkLocation();
    setTimeout(() => {
      if (this.isGPS) {
        let loader = this.loadingCtrl.create({
          content: this.servicio.traducir("ObteniendoUbicacion")
        });
        loader.present();
        this.geolocation.getCurrentPosition()
          .then(position => {
            this.cargarMiPosicion(position, loader);
            let loader2 = this.loadingCtrl.create({
              content: this.servicio.traducir("BuscandoLineas"),
              duration: 3000
            });
            loader2.present();
            this.servicio.obtenerLineasPorSelecion(this.userPosicion, this.puntoEstrategico);
            setTimeout(() => {
              this.mostrarLineas();
            }, 2000);
          });
        setTimeout(() => {
          loader.dismiss();
        }, 15000);
      }
    }, 1000);
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

 cargarMiPosicion(position, loader) {
    let latitude = position.coords.latitude;
    let longitud = position.coords.longitude;
    let myPosition: LatLng = new LatLng(latitude, longitud);
    var marker = new google.maps.Marker({
      position: myPosition,
      map: this.map,
      icon: 'img/BusquedaUbicacion/Marcadores/marcadorYo.png',
      title: 'Mi Posicion!'
    });
    this.userPosicion = marker;
    loader.dismiss();
  }

  mostrarLineas() {
    var puntos = {
      Inicio: this.userPosicion,
      Fin: this.puntoEstrategico
    };
    this.navCtrl.push('ListaLineas', puntos);
  }

  seleccionOrigen() { 
    this.mensajesToast = this.toastCtrl.create({
      message: this.servicio.traducir("IrDesdeMiUbicacion.Origen.ContenidoAlertOrigen"),
      position: 'bottom'
    });
    this.mensajesToast.present(this.mensajesToast);
    this.origen = true;
    //let alert = this.alertCtrl.create({
      //title: this.servicio.traducir("IrDesdeMiUbicacion.Origen.TituloAlertOrigen"),
      //subTitle: this.servicio.traducir("IrDesdeMiUbicacion.Origen.ContenidoAlertOrigen")
    //});
    //alert.addButton({
      //text: this.servicio.traducir("Botones.Cancelar"),
      //handler: data => {
        //this.origen = false;
      //}
    //});
    //alert.addButton({
      //text: this.servicio.traducir("Botones.Aceptar"),
      //handler: data => {
        //this.origen = true;
      //}
    //});
    //alert.present();
  }
}