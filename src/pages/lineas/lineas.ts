import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';
import { LoadingController } from 'ionic-angular';
import { Select } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'lineas',
  templateUrl: 'lineas.html'
})
export class Linea {

  lineas: any;
  listaVisible: any;
  categorias: any;
  seleccionado: string = "Todos";
  colorFondo: string;
  rutaImagen: string;
  seleccion: string = "Lineas";
  selectControl: Select;
  //img/Lineas/{{linea.Categoria}}
  textoSearcher: string = this.servicio.traducir("BusquedaDeLineas.BarraBusqueda.Lineas");

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public servicio: KaypiServices, public loadingCtrl: LoadingController) {
    this.cargarLineas();
    this.cargarCategorias();
    this.listaVisible = this.lineas;
    this.colorFondo = this.servicio.modoApp;
    this.rutaImagen = this.servicio.rutaImagenes;

  }

  ionViewWillEnter() {
    this.seleccionado = "Todos";
    this.cargarCategorias();
    this.listaVisible = this.lineas;
  }

  onSelectChange(event: string) {
    if (this.seleccionado == "Todos" || this.seleccionado == "Zona") {
      this.listaVisible = this.lineas;
      if (this.seleccionado == "Todos") {
        this.textoSearcher = this.servicio.traducir("BusquedaDeLineas.BarraBusqueda.Lineas");
      } else {
        this.textoSearcher = this.servicio.traducir("BusquedaDeLineas.BarraBusqueda.Zonas");
      }
      this.ordenarLista(this.listaVisible);
    } else if (this.seleccionado == "Calles") {
      this.navCtrl.push('BusquedaCallePage');
    } else {
      this.cargarCategoria(event);
    }
  }

  cargarCategoria(categoria) {
    this.listaVisible = [];
    for (let i = 0; i < this.lineas.length; i++) {
      if (this.lineas[i].Categoria == categoria) {
        this.listaVisible.push(this.lineas[i]);
      }
    }
    this.ordenarLista(this.listaVisible);
    this.textoSearcher = this.servicio.traducir("BusquedaDeLineas.BarraBusqueda." + categoria);
  }

  cargarLineas() {
    this.lineas = this.servicio.obtenerLineas();
    this.ordenarLista(this.lineas);
  }

  ordenarLista(lista) {
    lista.sort((i1, i2) => {
      if (i1.Nombre > i2.Nombre) {
        return 1;
      }
      if (i1.Nombre < i2.Nombre) {
        return -1;
      }
      return 0;
    });
  }

  cargarCategorias() {
    this.categorias = [
      { nombre: "Todos", valor: "Todos" },
      { nombre: "Calles", valor: "Calles" }
    ];
    for (let i = 0; i < this.lineas.length; i++) {
      if (!this.existeCategoria(this.categorias, this.lineas[i].Categoria)) {
        this.categorias.push({ nombre: this.lineas[i].Categoria, valor: this.lineas[i].Categoria });
      }
    }
    this.categorias.push({ nombre: "Zona", valor: "Zona" });

  }

  existeCategoria(lista, categoria) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].nombre == categoria) {
        return true;
      }
    }
    return false;
  }

  mostrarInformacion(linea) {
    this.navCtrl.push('InformacionLinea', linea);
  }

  getItems(ev) {
    this.onSelectChange(this.seleccionado);
    if (this.seleccionado == "Zona") {
      var val = ev.target.value;
      if (val && val.trim() != '') {
        this.listaVisible = this.listaVisible.filter((item) => {
          for (let i = 0; i < item.ZonasCBBA.length; i++) {
            if (item.ZonasCBBA[i].toLowerCase().indexOf(val.toLowerCase()) > -1) {
              return item;
            }
          }
        })
      }
    } else {
      var val = ev.target.value;
      if (val && val.trim() != '') {
        this.listaVisible = this.listaVisible.filter((item) => {
          return (item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
  }
}