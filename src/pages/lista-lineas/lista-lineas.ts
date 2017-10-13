import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-lista-lineas',
    templateUrl: 'lista-lineas.html',
})
export class ListaLineas {

    lineas: any;
    inicio: any;
    destino: any;
    rutaImagen: string;
    sentido: any;
    colorFondo: string;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public servicio: KaypiServices,
        public toastCtrl: ToastController,public platform: Platform) {

        this.inicio = this.navParams.get('Inicio');
        this.destino = this.navParams.get('Fin');
        console.log(this.servicio.paginas);
        this.colorFondo = this.servicio.modoApp;
        this.rutaImagen = this.servicio.rutaImagenes;
        if (this.destino == null) {
            this.mostrarLineasPorUnPunto();
        } else {
            this.getListaLineas();
        }
    }

    ionViewDidLoad() {
        if (this.destino == null) {
            this.servicio.paginas = 3;
        } else {
            this.servicio.paginas = 1;
        }
    }

    ionViewDidLeave() {
        this.platform.registerBackButtonAction(() => {
            this.navCtrl.pop();
          });
    }

    getListaLineas() {
        //this.lineas = this.servicio.obtenerLineasPorSelecion(this.inicio, this.destino);
        this.lineas = this.servicio.obtenerListaPorSeleccion();
        this.sentido = this.servicio.getSentido();
        var mensaje = this.servicio.traducir("IrDesdeMiUbicacion.ToastNinguno");
        if (this.lineas.length >= 1) {
            mensaje = this.servicio.traducir("IrDesdeMiUbicacion.ToastLineasCercanas");
        }
        this.mostrarMensaje(mensaje);
    }

    mostrarLineasPorUnPunto() {
        this.lineas = this.servicio.listaLineasPorUnPunto;
        this.sentido = null;
        this.destino = { position: null };
        var mensaje = this.servicio.traducir("IrDesdeMiUbicacion.ToastNinguno");
        if (this.lineas.length >= 1) {
            mensaje = this.servicio.traducir("IrDesdeMiUbicacion.ToastLineasCercanas");
        }
        this.mostrarMensaje(mensaje);
    }

    mostrarRuta(linea) {
        var objeto = {
            Linea: linea,
            Puntos: {
                Punto1: this.inicio.position,
                Punto2: this.destino.position
            },
            Sentido: this.sentido
        }
        this.navCtrl.push('LineaRuta', objeto);
    }

    mostrarMensaje(mensaje) {
        let toast = this.toastCtrl.create({
            message: mensaje,
            duration: 8000,
            position: 'bottom'
        });

        toast.present(toast);
    }
}
