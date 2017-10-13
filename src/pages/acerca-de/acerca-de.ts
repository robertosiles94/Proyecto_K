import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';
import { ToastController } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';

@IonicPage()
@Component({
  selector: 'acerca-de',
  templateUrl: 'acerca-de.html'
})
export class AcercaDe {

  oculto: boolean = false;
  colorFondo: string;
  appNombre: string;
  versionApp:string;

  constructor(public navCtrl: NavController, 
    public servicio: KaypiServices, 
    public toastCtrl: ToastController, 
    private appVersion: AppVersion) {
    this.colorFondo = this.servicio.modoApp;
    this.obtenerNombreApp();
    this.obtenerVersionApp();
  }

  mostrarDesarrolladores() {
    this.oculto = !this.oculto;
  }

  async obtenerNombreApp() {
    this.appNombre = await this.appVersion.getAppName();
  }

  async obtenerVersionApp() {
    this.versionApp = await this.appVersion.getVersionCode();
  }

  modoUnivalle() {
    //var mensaje;
    this.servicio.isModoUnivalle = !this.servicio.isModoUnivalle;
    if (this.servicio.isModoUnivalle) {
      this.servicio.modoApp = "univalle";
      //mensaje = "Modo UNIVALLE Activado";
    } else {
      this.servicio.modoApp = "primary";
      //mensaje = "Modo UNIVALLE Desactivado";
    }
    this.colorFondo = this.servicio.modoApp;
    //let toast = this.toastCtrl.create({
     // message: mensaje,
     // duration: 2000,
     // position: 'middle'
    //});
    //toast.present(toast);
  }

}