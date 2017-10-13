import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';

/**
 * Generated class for the ConfiguracionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class Configuracion {

  colorFondo : string;
  configuracion: any;
  seleccionado: string = this.servicio.configuracion.idioma;
  idiomas: any;
  isActualizacion: boolean;
  isNoticias: boolean;
  isTrafico: boolean;
  isUnivalle: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio: KaypiServices) {
    this.colorFondo = this.servicio.modoApp;
    this.idiomas = [
      {nombre: "Castellano", valor: "es"},
      {nombre: "Ingles", valor: "en"},
      {nombre: "Portugues",valor:"pt"}
    ];
  }

  ionViewDidLoad() {
    this.servicio.paginas = 0;
    this.configuracion = this.servicio.configuracion;
    this.seleccionado = this.configuracion.idioma;
    this.isActualizacion = this.configuracion.actualizacion == 1;
    this.isNoticias = this.configuracion.noticias == 1;
    this.isTrafico = this.configuracion.trafico == 1;
    this.isUnivalle = this.servicio.isModoUnivalle;
  }

  onSelectChange(event:string) {
    this.actualizarConfiguracion();
  }

  actualizarConfiguracion() {
    var actualizacion;
    var noticias;
    var trafico;
    if (this.isActualizacion) actualizacion = 1; else actualizacion = 0;
    if (this.isNoticias) noticias = 1; else noticias = 0;
    if (this.isTrafico) trafico = 1; else trafico = 0;
    this.servicio.updateConfig({idioma: this.seleccionado, actualizacion: actualizacion, noticias: noticias, trafico: trafico, id: 1});
    this.servicio.getConfiguracion();
    this.servicio.cambiarIdioma(this.seleccionado);
  }

  modoUnivalle() {
    this.servicio.isModoUnivalle = !this.servicio.isModoUnivalle;
    if (this.servicio.isModoUnivalle) {
      this.servicio.modoApp = "univalle";
    } else {
      this.servicio.modoApp = "primary";
    }
    this.colorFondo = this.servicio.modoApp;
  }

}
