import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';
import { Clipboard } from '@ionic-native/clipboard';
import { ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
//ModalTaxis
export class ModalRadioMovilPage {

  titulo: any;
  direccion: any;
  logo: any;
  telefonos: any;
  rutaImagen: string;
  colorFondo: string;
  telefonoOficial: string='800101010';
  constructor(public navCtrl: NavController, private navParams: NavParams,
    public servicio: KaypiServices,
    public toastCtrl: ToastController,
    public platform: Platform,
    public clipboard: Clipboard,
    private view: ViewController) {
    const data = this.navParams.get('data');
    this.rutaImagen = this.servicio.rutaImagenes;
    this.colorFondo = this.servicio.modoApp;
    this.titulo = data.Objeto.Titulo;
    this.logo = data.Objeto.Logo;
    this.direccion=data.Objeto.Direccion;
    this.telefonos=data.Objeto.Telefonos;
  }


  copiarTelefono(telf) {
    this.clipboard.copy(telf);
    let toast = this.toastCtrl.create({
      message: this.servicio.traducir("BusquedaDeLineas.InformacionLineas.Telefono"),
      duration: 1000,
      position: 'middle'
    });
    toast.present(toast);
    console.log('Telefono copiado'+ telf);
  }



  closeModal() {
    this.view.dismiss();
  }

  ionViewDidLoad() {
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
    });
  }
}
