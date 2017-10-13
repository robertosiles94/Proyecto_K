import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-noticias',
    templateUrl: 'noticias.html'
})

export class Noticias {

    tabBarElement: any;
    noticias: any;
    NoticiasTrafico: any;
    linkImagenes: any;
    linkImagenesTrafico: any;
    link: any;
    action: any;
    seleccion: string = "Novedades";
    colorFondo : string;

    constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public servicio: KaypiServices, public loadingCtrl: LoadingController) {
        this.getNoticias();
        this.getTrafNoticias();
        this.colorFondo = this.servicio.modoApp;
    }

    ionViewDidLoad() {
        this.servicio.paginas = 0;
    }

    getNoticias() {
        this.linkImagenes = this.servicio.getImagenesNoticias();
        this.noticias = this.servicio.obtenerNoticias();
    }

    getTrafNoticias() {
        this.linkImagenesTrafico = this.servicio.getImagenesTrafico();
        this.NoticiasTrafico = this.servicio.obtenerNoticiasTrafico();
    }

    MostrarRuta(trafico) {
        this.navCtrl.push('TraficoRuta', { "linea": trafico.linea, "tipo": trafico.tipo });
    }

    mostrarDetalle(noticia) {
        noticia.visto = !noticia.visto;
    }

    refrescarNoticias() {
        this.servicio.getNoticias();
        this.servicio.getTrafNoticias();
        let loader = this.loadingCtrl.create({
            content: this.servicio.traducir("NoticiasTrafico.ToastNoticias"),
            duration: 3000
        });
        loader.present();
        setTimeout(() => {
            this.getNoticias();
            this.getTrafNoticias();
            
        }, 3000);
    }

}