import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';
import { Clipboard } from '@ionic-native/clipboard';
import { Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'informacion-linea',
  templateUrl: 'informacion-linea.html'
})
export class InformacionLinea {
  nombre: any;
  categoria: any;
  telefonos: any;
  calles: any;
  pasaje: any;
  imagen: any;
  rutas: any;
  horarios: any;
  colorFondo: string;
  rutaImagen: string;

  constructor(public navCtrl: NavController,
    public servicio: KaypiServices,
    public navParams: NavParams,
    public clipboard: Clipboard,
    public platform: Platform,
    public toastCtrl: ToastController) {
    this.colorFondo = this.servicio.modoApp;
    this.rutaImagen = this.servicio.rutaImagenes;
  }

  cargarLinea() {
    this.nombre = this.navParams.get('Nombre');
    this.categoria = this.navParams.get('Categoria');
    this.telefonos = this.navParams.get('Telefono');
    this.calles = this.navParams.get('Calles');
    this.pasaje = this.navParams.get('Pasajes');
    this.imagen = this.navParams.get('Imagen');
    this.rutas = this.navParams.get('Rutas');
    this.horarios = this.navParams.get("Horarios");
  }

  ionViewDidLoad() {
    this.servicio.paginas = 1;
    this.cargarLinea();
    console.log(this.servicio.paginas);
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.pop();
    });
  }

  ionViewDidLeave() {
    console.log(this.servicio.paginas);
  }

  copiarTelefono(telf) {
    this.clipboard.copy(telf);
    let toast = this.toastCtrl.create({
      message: this.servicio.traducir("BusquedaDeLineas.InformacionLineas.Telefono"),
      duration: 1000,
      position: 'middle'
    });
    toast.present(toast);
  }

  mostrarRuta() {
    var objeto = {
      Linea: { Rutas: this.rutas , Nombre: this.nombre},
      Puntos: null,
      Sentido: null
    }
    this.navCtrl.push('LineaRuta', objeto);
  }
}