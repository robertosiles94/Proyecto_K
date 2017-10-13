import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { KaypiServices } from '../../providers/kaypi-services';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'puntos-estrategicos',
  templateUrl: 'puntos-estrategicos.html'
})
export class PuntoEstrategico {

  puntosEstrategicos: any;
  categorias: any;
  categoria: any;
  categoriaSeleccionada: any;
  lista: any;
  listaPuntosCategoria: any;
  Seleccionado: string = "Todos";
  seleccion: string = "Puntos";
  textoBuscador: string = this.servicio.traducir("PuntosEstrategicos.BarraBusqueda");
  textoBuscadorPunto: string = this.servicio.traducir("PuntosEstrategicos.MisPuntos.BarraBusqueda");
  opcion: any;
  colorFondo: string;
  misPuntos: any;
  listaMisPuntos: any;
  rutaImagen: string;
  busqueda: boolean = false;
  descarga: any;
  //ruta: string = this.servicio.ruta;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController, public servicio: KaypiServices) {
    this.cargarPuntos();
    this.colorFondo = this.servicio.modoApp;
    this.cargarCategorias();
    this.lista = this.puntosEstrategicos;
    this.categoriaSeleccionada = "Todos";
    this.misPuntos = this.servicio.misPuntos;
    this.rutaImagen = this.servicio.rutaImagenes;
    //this.misPuntos = [{ nombre: "casa prima", lat: -17.1555, lng: -17.55888 }];
    this.listaMisPuntos = this.misPuntos;
  }

  cargarPuntos() {
    this.puntosEstrategicos = this.servicio.obtenerPuntos().PuntosEstrategicos;
    this.ordenarLista(this.puntosEstrategicos);
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

  ionViewDidLoad() {
    this.servicio.paginas = 0;
    this.servicio.getMisPuntos();
  }

  cargarCategorias() {
    this.categorias = [
      { Nombre: "Todos", Valor: "Todos", Imagen: "Todos.png" },
    ];
    for (let i = 0; i < this.puntosEstrategicos.length; i++) {
      if (!this.existeCategoria(this.categorias, this.puntosEstrategicos[i].Categoria)) {
        this.categorias.push({ Nombre: this.puntosEstrategicos[i].Categoria, Valor: this.puntosEstrategicos[i].Categoria, Imagen: this.puntosEstrategicos[i].Imagen });
      }
    }
  }

  esVisible() {
    if(!this.busqueda)
      this.listaMisPuntos = this.servicio.misPuntos;
    //this.getMisPuntos({ target: { value: this.busqueda} });
    return false;
  }

  editarMiPunto(punto) {
    var objeto = {
      Opcion: "modificar",
      Punto: punto
    }
    this.navCtrl.push('MisPuntosPage', objeto);
  }

  eliminarMiPunto(punto) {
    this.servicio.delete(punto)
      .then(response => {
        this.servicio.getMisPuntos();
        this.misPuntos = this.servicio.misPuntos;
        let toast = this.toastCtrl.create({
          message: this.servicio.traducir("PuntosEstrategicos.MisPuntos.ToastEliminado"),
          duration: 3000,
          position: 'bottom'
        });
        toast.present(toast);
      })
      .catch(error => {
        console.error(error);
      })
  }

  agregarPunto() {
    this.navCtrl.push('MisPuntosPage');
  }

  existeCategoria(lista, categoria) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].Nombre == categoria) {
        return true;
      }
    }
    return false;
  }

  onSelectChange(event: string) {
    this.categoriaSeleccionada = event;
    if (this.Seleccionado == "Todos") {
      this.lista = this.puntosEstrategicos;
      this.ordenarLista(this.lista);
    } else {
      this.cargarCategoria(event);
    }
  }

  cargarCategoria(categoria) {
    this.lista = [];
    for (let i = 0; i < this.puntosEstrategicos.length; i++) {
      if (this.puntosEstrategicos[i].Categoria == categoria) {
        this.lista.push(this.puntosEstrategicos[i]);
      }
    }
    this.ordenarLista(this.lista);
  }


  mostrarPunto(punto) {
    this.navCtrl.push('PuntoEstrategicoMapa', punto);
  }

  mostrarPuntosEstrategicos() {
    this.opcion = "Todos";
    this.verMapa();
  }

  mostrarInformacionPuntoFavorito(punto) {
    var objeto = {
      Punto: {
        data: {
          Punto: { lat: punto.lat, lng: punto.lng },
          Nombre: punto.nombre,
          Marcador: "Transporte.png"
        }
      },
      Opcion: "Especifico"
    }
    this.navCtrl.push('PuntoEstrategicoMapa', objeto);
  }


  verMapa() {
    var objeto = {
      CategoriaSeleccionada: this.categoriaSeleccionada,
      Opcion: this.opcion
    }
    this.navCtrl.push('PuntoEstrategicoMapa', objeto);
  }

  fabVisible() {
    return this.seleccion == "misPuntos";
  }

  mostrarInformacion(puntosEstrategicos) {
    this.navCtrl.push('PuntosEstrategicosInfo', puntosEstrategicos);
  }

  getItems(evento) {
    this.onSelectChange(this.Seleccionado);
    var val = evento.target.value;
    if (val && val.trim() != "") {
      this.lista = this.lista.filter((item) => {
        return (item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getMisPuntos(evento) {
    var val = evento.target.value;
    this.listaMisPuntos = this.servicio.misPuntos;
    if (val && val.trim() != "") {
      this.busqueda = true;
      this.listaMisPuntos = this.listaMisPuntos.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.busqueda = false;
    }
  }

  eliminarPunto(punto) {
    let mensaje = this.alertCtrl.create({
      title: this.servicio.traducir("PuntosEstrategicos.MisPuntos.TituloAlertEliminar")+" '" + punto.nombre + "'",
      message: this.servicio.traducir("PuntosEstrategicos.MisPuntos.ContenidoAlertEliminar"),
      buttons: [
        {
          text: this.servicio.traducir("Botones.Cancelar"),
          handler: data => {
          }
        },
        {
          text: this.servicio.traducir("Botones.Eliminar"),
          handler: data => {
            this.eliminarMiPunto(punto);
          }
        }
      ]
    });
    mensaje.present();
  }
}