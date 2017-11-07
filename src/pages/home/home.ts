import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AlertController } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Network } from '@ionic-native/network';
import { SQLite } from '@ionic-native/sqlite';
import { ToastController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;
  tabBarElement: any;
  rootPage: any = 'MiDestino';
  pages: Array<{ title: string, component: any, icon: string }>;
  activePage: any;
  conexionInternet: boolean = false;
  logoApp: string = this.servicio.logoApp;
  salida: boolean = false;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public sqlite: SQLite,
    public servicio: KaypiServices,
    public diagnostic: Diagnostic,
    private network: Network,
    public platform: Platform,
    public screenOrientation: ScreenOrientation,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public menuCtrl: MenuController) {
    this.llenarListadoOpciones();
    this.platform.ready().then(() => {
      if (this.platform.is('ios') || this.platform.is('android')) {
        this.bloquearRotacion();
      }
      
      setTimeout(() => {
        //this.abrirMenu();
        this.comprobarConexion();
        if (this.platform.is('ios')) {

        } else if (this.platform.is('android')) {

        }
        else {
          this.servicio.asignarPathsPorDefecto();
          this.servicio.obtenerDatos();
          this.servicio.cambiarIdioma("es");
          return;
        }
        if (this.servicio.conexionInternet) {
          if (this.servicio.existeNuevaVersion()) {
            if (this.servicio.configuracion.actualizacion == 0)
              this.actualizarApp();
            else
              this.actualizacionAutomatica();
          }
        }
      }, 3000);
    });
  }

  abrirMenu() {
    this.menuCtrl.open();
  }

  llenarListadoOpciones() {
    this.pages = [
      { title: 'IrDesdeMiUbicacion', component: 'MiDestino', icon: 'navigate' },
      { title: 'BusquedaDeLineas', component: 'Linea', icon: 'bus' },
      { title: 'PuntosEstrategicos', component: 'PuntoEstrategico', icon: 'pricetags' },
      { title: 'Radio Movil', component: 'RadioMovilPage', icon: 'car' },
      { title: 'NoticiasTrafico', component: 'Noticias', icon: 'paper' },
      { title: 'Configuracion', component: 'Configuracion', icon: 'construct' },
      { title: 'Ayuda', component: 'Ayuda', icon: 'help-circle' },
      { title: 'AcercaDe', component: 'AcercaDe', icon: 'information-circle' }
    ];
    this.activePage = [0];
  }

  comprobarConexion() {
    if (this.network.type === 'none' || this.network.type === 'unknown') {
      this.mensajeNoInternet();
    }
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.mensajeNoInternet();
    });

    let connectSubscription = this.network.onConnect().subscribe(() => {
      let toast = this.toastCtrl.create({
        message: this.servicio.traducir("ConInternet"),
        duration: 4000,
        position: 'bottom'
      });
      toast.present(toast);
      this.servicio.conexionInternet = true;
    });
  }

  mensajeNoInternet() {
    let toast = this.toastCtrl.create({
      message: this.servicio.traducir("SinInternet"),
      duration: 4000,
      position: 'bottom'
    });
    toast.present(toast);
    this.servicio.conexionInternet = false;
  }

  actualizacionAutomatica() {
    let loader = this.loadingCtrl.create({
      content: this.servicio.traducir("Actualizacion.Toast"),
      duration: 10000
    });
    loader.present();
    this.servicio.download();
    setTimeout(() => {
      if (this.servicio.estadoDescarga) {
        this.servicio.obtenerDatos();
        this.servicio.descomprimirZip();
        let loader = this.loadingCtrl.create({
          content: this.servicio.traducir("Actualizacion.ToastCargandoDatos"),
          duration: 3000
        });
        loader.present();
        setTimeout(() => {
          if (!this.servicio.estadoDescarga) {
            this.errorActualizacion();
          }
        }, 3000);
      } else {
        this.errorActualizacion();
      }
    }, 10000);

  }

  actualizarApp() {
    let alertActualizacion = this.alertCtrl.create({
      title: this.servicio.traducir("Actualizacion.TituloMensaje"),
      message: this.servicio.traducir("Actualizacion.ContenidoMensaje"),
      buttons: [
        {
          text: this.servicio.traducir("Botones.Cancelar"),
          handler: data => {

          }
        },
        {
          text: this.servicio.traducir("Botones.Actualizar"),
          handler: data => {
            this.servicio.download();
            let loader = this.loadingCtrl.create({
              content: this.servicio.traducir("Actualizacion.Toast"),
              duration: 15000
            });
            loader.present();
            setTimeout(() => {
              if (this.servicio.estadoDescarga) {
                console.log("esta es las lineas descargadas: ");
                console.log(this.servicio.lineas);
                let alertActualizado = this.alertCtrl.create({
                  title: this.servicio.traducir("Actualizacion.TituloAlert"),
                  message: this.servicio.traducir("Actualizacion.ContenidoAlert"),
                  buttons: [
                    {
                      text: this.servicio.traducir("Botones.Aceptar"),
                      handler: data => {
                        this.servicio.obtenerDatos();
                        this.servicio.descomprimirZip();
                        let loader = this.loadingCtrl.create({
                          content: this.servicio.traducir("Actualizacion.ToastCargandoDatos"),
                          duration: 3000
                        });
                        loader.present();
                        setTimeout(() => {
                          if (!this.servicio.estadoDescarga) {
                            this.errorActualizacion();
                          }
                        }, 3000);
                      }
                    }
                  ]
                });
                alertActualizado.present();
              } else {
                this.errorActualizacion();
              }
            }, 15000);

          }
        }
      ]
    });
    alertActualizacion.present();
  }

  errorActualizacion() {
    let error = this.alertCtrl.create({
      title: this.servicio.traducir("Actualizacion.TituloAlertError"),
      message: this.servicio.traducir("Actualizacion.MensajeAlertError"),
      buttons: [
        {
          text: this.servicio.traducir("Botones.Aceptar"),
          handler: data => {
            this.salida = false;
          }
        },
        {
          text: this.servicio.traducir("Botones.VolverIntentar"),
          handler: data => {
            this.actualizarApp();
          }
        }
      ]
    });
    error.present();
  }

  salir() {
    let prompt = this.alertCtrl.create({
      title: this.servicio.traducir("TituloMensajeSalir"),
      message: this.servicio.traducir("ContenidoMensajeSalir"),
      buttons: [
        {
          text: this.servicio.traducir("Botones.Cancelar"),
          handler: data => {
            this.salida = false;
          }
        },
        {
          text: this.servicio.traducir("Botones.Salir"),
          handler: data => {
            this.platform.exitApp();
          }
        }
      ]
    });
    this.salida = true;
    prompt.present();
  }

  bloquearRotacion() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
  }

  openPage(page) {
    this.rootPage = page.component;
    this.activePage = page;
  }

  checkActive(page) {
    return page == this.activePage;
  }

  pageExit() {
    this.salir();
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;
    }, 4000);
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.pop()
    });
  }
}
