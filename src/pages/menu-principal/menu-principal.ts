import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';

@IonicPage()
@Component({
  selector: 'page-menu-principal',
  templateUrl: 'menu-principal.html'
})
export class MenuPrincipal {

  tabBarElement: any;
  imagenesDeFondo: any;
  lineas: any;
  tiempo: string;
  imagenesDia = [
    'dia0.jpg',
    'dia1.jpg',
    'dia3.jpg',
    'noche0.jpg',
    'noche1.jpg'
  ];
  imagenesNoche = [
    
  ];
  colorFondo: string;

  constructor(public navCtrl: NavController, public platform: Platform, public db: KaypiServices) {
    this.platform.ready().then(() => {
      //this.getEstadoDia();
    });
    this.colorFondo = this.db.modoApp;
  }

  ionViewDidLoad() {
    this.db.paginas = 0;
  }

  getEstadoDia() {
    var d = new Date();
    var n = d.getHours();
    if (n < 18) {
      this.tiempo = "Dia";
      this.imagenesDeFondo = this.imagenesDia.sort(function () { return Math.random() - 0.5 });;
    } else {
      this.tiempo = "Noche";
      this.imagenesDeFondo = this.imagenesNoche.sort(function () { return Math.random() - 0.5 });;
    }
  }
}