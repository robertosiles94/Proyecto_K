import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';
import { SQLiteObject } from '@ionic-native/sqlite';
import { SQLite } from '@ionic-native/sqlite';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Zip } from '@ionic-native/zip';
import { TranslateService } from '@ngx-translate/core';
/*
  Generated class for the KaypiServices provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class KaypiServices {

  db: SQLiteObject = null;
  lineas: any;
  puntos: any;
  zonas: any;
  cobertura: any;
  direccionV: string = "";
  direccionH: string = "";
  puntosEstrategicosCategoria: any;
  noticias: any;
  noticiasTrafico: any;
  sentido: any;
  public paginas: any = 0;
  cantidadMostradaLineas: any = 10;
  public listaLineasSeleccion: any = [];
  public listaLineasPorUnPunto: any;
  versionNube: any;
  public versionApp: any;
  public configuracion: any;
  estadoDescarga: boolean = false;
  ruta: string;
  rutaImagenes: string;
  public conexionInternet: boolean = true;
  rutaJson: any;
  link: any = 'http://www.kaypi.hol.es/Kaypi/';
  public misPuntos: any[] = [];
  public modoApp: string = "primary";
  public isModoUnivalle: boolean = false;
  public logoApp: string = "img/MenuPrincipal/logoGAM.jpg";

  constructor(public http: Http,
    public plt: Platform,
    public sqlite: SQLite,
    private transfer: FileTransfer,
    private file: File,
    private zip: Zip,
    private translateService: TranslateService) {

    console.log("rutas por defecto");
    this.asignarPathsPorDefecto();
    this.getVersion().then((data) => {
    });
    this.createDatabase();
  }

  obtenerDatos() {
    console.log("Obteniendo JSON");
    this.obtenerRuta();
    this.getLinea().then((data) => {
      this.lineas = data;
    });
    this.puntos = this.getPuntoEstrategico().then((data) => {
      this.puntos = data;
    });
    this.getZonas().then((data) => {
      this.zonas = data;
    });
  }

  download() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const urlZip = 'http://www.kaypi.hol.es/Kaypi/update/Update.zip';

    fileTransfer.download(urlZip, this.file.dataDirectory + "update.zip").then((entry) => {
      console.log('download complete zip: ' + entry.toURL());
      this.estadoDescarga = true;
    });
  }

  descomprimirZip() {
    if (this.estadoDescarga) {
      this.zip.unzip(this.file.dataDirectory + 'update.zip', this.file.dataDirectory, (progress) => console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%'))
        .then((result) => {
          if (result === 0) {
            this.updateVersionApp({ versionDatos: this.versionNube, versionApp: 1.0, id: 1 });
            console.log('SUCCESS');
            this.getVersionApp();
            setTimeout(() => {
              this.obtenerDatos();
            }, 2000);
          }
          if (result === -1) {
            this.estadoDescarga = false;
            console.log('FAILED');
          }
        });
    }
  }

  obtenerRuta() {
    console.log("rutas");
    if (this.plt.is('android')) {
      console.log("obteneindo rutas: " + this.versionApp[0].versionDatos);
      if (this.versionApp[0].versionDatos < 1.1) {
        this.asignarPathsPorDefecto();
      } else {
        this.asignarPathsPorActualizado();
      }
    } else {
      this.asignarPathsPorDefecto();
    }
    //this.ruta = "file:///data/user/0/com.univalle.kaipy553350/files/Kaypi/update/";
  }

  private createDatabase() {
    this.sqlite.create({
      name: 'kaypi.db',
      location: 'default'
    })
      .then((db) => {
        this.setDatabase(db);
        console.log("base de datos creada");
        return this.createTable();
      })
      .then(() => {
        this.translateService.setDefaultLang('es');
        this.getVersionApp();
        this.getConfiguracion();
        this.getMisPuntos();
        setTimeout(() => {
          this.idioma();
          this.configuracionNoticias();
          this.obtenerDatos();
        }, 2000);

      })
      .catch(error => {
        console.error(error);
      });
  }

  configuracionNoticias() {
    if (this.configuracion.noticias == 1) {
      this.getNoticias();
    }
    if (this.configuracion.trafico == 1) {
      this.getTrafNoticias();
    }
  }

  traducir(frase) {
    var fraseTraducido = "";
    this.translateService.get(frase).subscribe(
      value => {
        console.log("La traduccion es: " + value);
        fraseTraducido = value;
      }
    )
    return fraseTraducido;
  }

  idioma() {
    console.log("Idioma conseguido: " + this.configuracion.idioma);
    this.translateService.use(this.configuracion.idioma);
  }

  cambiarIdioma(idioma) {
    this.translateService.use(idioma);
  }

  setDatabase(db: SQLiteObject) {
    if (this.db === null) {
      this.db = db;
    }
  }

  createTable() {
    let sql = 'CREATE TABLE IF NOT EXISTS misPuntos(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, lat REAL, lng REAL)';
    let sql2 = 'CREATE TABLE IF NOT EXISTS version(id INTEGER PRIMARY KEY AUTOINCREMENT, versionDatos REAL, versionApp REAL)';
    let sql3 = 'CREATE TABLE IF NOT EXISTS config(id INTEGER PRIMARY KEY AUTOINCREMENT, idioma TEXT, actualizacion INTEGER, noticias INTEGER, trafico INTEGER)';
    this.db.executeSql(sql3, []);
    this.db.executeSql(sql2, []);
    return this.db.executeSql(sql, []);
  }

  getMisPuntos() {
    let sql = 'SELECT * FROM misPuntos';
    return this.db.executeSql(sql, [])
      .then(response => {
        console.log("lista");
        this.misPuntos = [];
        for (let index = 0; index < response.rows.length; index++) {
          this.misPuntos.push(response.rows.item(index));
          console.log(response.rows.item(index));
        }
        return Promise.resolve(this.misPuntos);
      })
      .catch(error => Promise.reject(error));
  }

  getVersionApp() {
    let sql = 'SELECT * FROM version';
    return this.db.executeSql(sql, [])
      .then(response => {
        console.log("version");
        this.versionApp = [];
        for (let index = 0; index < response.rows.length; index++) {
          this.versionApp.push(response.rows.item(index));
          console.log(response.rows.item(index));
        }
        console.log(this.versionApp.length);
        if (this.versionApp.length == 0 || this.versionApp == null) {
          let sql = 'INSERT INTO version(versionDatos, versionApp) VALUES(?,?)';
          this.db.executeSql(sql, ["1.0", "1.0"]);
          this.getVersionApp();
        }
        return Promise.resolve(this.versionApp);
      })
      .catch(error => Promise.reject(error));
  }

  getConfiguracion() {
    let sql = 'SELECT * FROM config';
    return this.db.executeSql(sql, [])
      .then(response => {
        console.log("configuracion de la app");
        this.configuracion = null;
        for (let index = 0; index < response.rows.length; index++) {
          this.configuracion = response.rows.item(index);
          console.log(response.rows.item(index));
        }
        console.log("configuracion: " + this.configuracion);
        if (this.configuracion == null) {
          let sql = 'INSERT INTO config(idioma, actualizacion, noticias, trafico) VALUES(?,?,?,?)';
          this.db.executeSql(sql, ["es", 0, 1, 1]);
          this.getConfiguracion();
        }
        return Promise.resolve(this.configuracion);
      })
      .catch(error => Promise.reject(error));
  }

  asignarPathsPorDefecto() {
    if (this.plt.is('android')) {
      this.rutaImagenes = "img/";
      this.rutaJson = 'file:///android_asset/www/assets/Kaypi/update/';
    } else if (this.plt.is('ios')) {
      this.rutaImagenes = "img/";
      this.rutaJson = '../assets/Kaypi/update/';
    } else {
      this.rutaImagenes = "img/";
      this.rutaJson = 'http://www.kaypi.hol.es/Kaypi/update/';
    }

  }

  asignarPathsPorActualizado() {
    if (this.plt.is('android')) {
      this.rutaImagenes = this.file.dataDirectory + "Kaypi/update/";
      this.rutaJson = this.file.dataDirectory + 'Kaypi/update/';
    } else if (this.plt.is('ios')) {
      this.rutaImagenes = "img/";
      this.rutaJson = '../assets/Kaypi/update/';
    } else {
      this.rutaImagenes = "img/";
      this.rutaJson = '../assets/Kaypi/update/';
    }
  }

  existeNuevaVersion() {
    console.log(this.versionApp[0].versionDatos);
    console.log(this.versionNube);
    return this.versionNube > this.versionApp[0].versionDatos;
  }

  obeterMisPuntos() {
    return this.misPuntos;
  }

  create(miPunto: any) {
    let sql = 'INSERT INTO misPuntos(nombre, lat, lng) VALUES(?,?,?)';
    return this.db.executeSql(sql, [miPunto.nombre, miPunto.lat, miPunto.lng]);
  }

  delete(miPunto: any) {
    let sql = 'DELETE FROM misPuntos WHERE id=?';
    return this.db.executeSql(sql, [miPunto.id]);
  }

  update(miPunto: any) {
    let sql = 'UPDATE misPuntos SET nombre=?, lat=?, lng=? WHERE id=?';
    console.log(miPunto);
    return this.db.executeSql(sql, [miPunto.nombre, miPunto.lat, miPunto.lng, miPunto.id]);
  }

  updateVersionApp(version: any) {
    let sql = 'UPDATE version SET versionDatos=?, versionApp=? WHERE id=?';
    console.log(version);
    return this.db.executeSql(sql, [version.versionDatos, version.versionApp, version.id]);
  }

  updateConfig(config: any) {
    let sql = 'UPDATE config SET idioma=?, actualizacion=?, noticias=?, trafico=? WHERE id=?';
    console.log(config);
    return this.db.executeSql(sql, [config.idioma, config.actualizacion, config.noticias, config.trafico, config.id]);
  }

  getLinea() {
    return new Promise((resolve, reject) => {
      console.log(this.rutaJson);
      this.http.get(this.rutaJson + 'Lineas.json').subscribe(data => {
        this.lineas = data.json();
      });
    })
  }

  getVersion() {
    return new Promise((resolve, reject) => {
      if (this.plt.is('android')) {
        this.http.get('http://www.kaypi.hol.es/Config').subscribe(data => {
          console.log(data.json());
          this.versionNube = data.json().Version;
          console.log("Test: " + this.versionNube);
        });
      } else {

      }
    })
  }

  getZonas() {
    return new Promise((resolve, reject) => {
      //this.http.get('file:///android_asset/www/assets/Zonas/ZonasBusqueda.json').subscribe(data => {
      //this.zonas = data.json();
      //});
      this.http.get(this.rutaJson + 'ZonasBusqueda.json').subscribe(data => {
        this.zonas = data.json();
      });
    })
  }

  getDescarga() {
    return new Promise((resolve, reject) => {
      if (this.plt.is('android')) {
        this.http.get(this.file.dataDirectory + 'Lineas.json').subscribe(data => {
          this.lineas = data.json();
        });
        this.http.get(this.file.dataDirectory + 'PuntosEstrategicos.json').subscribe(data => {
          this.puntos = data.json();
        });
        this.http.get(this.file.dataDirectory + 'ZonasBusqueda.json').subscribe(data => {
          this.zonas = data.json();
        });
      }
    });
  }

  obtenerZonas() {
    return this.zonas.Zonas;
  }

  obtenerLineas() {
    return this.lineas.Lineas;
  }

  calcularDireccion(puntoIni, puntoFin) {
    var direccionVertical = Math.abs(puntoIni.position.lat()) - Math.abs(puntoFin.position.lat());
    var direccionHorizontal = Math.abs(puntoIni.position.lng()) - Math.abs(puntoFin.position.lng());
    if (direccionVertical >= 0) {
      this.direccionV = "S";
    } else {
      this.direccionV = "N";
    }
    if (direccionHorizontal >= 0) {
      this.direccionH = "O";
    } else {
      this.direccionH = "E";
    }
    this.sentido = { SentV: this.direccionV, SentH: this.direccionH };
  }

  getSentido() {
    return this.sentido;
  }

  obtenerLineasPorSelecion(puntoIni, puntoFin) {
    //this.listaLineasSeleccion = [];
    //var zonaInicio = this.getNameZona(puntoIni.position);
    //console.log(zonaInicio);
    //var zonaFin = this.getNameZona(puntoFin.position);
    //console.log(zonaFin);
    //var lineasZonaIni = this.getLineasByZona(zonaInicio);
    //var lineasZonaFin = this.getLineasByZona(zonaFin);
    //var listaLineasComunes = this.getListaLineasEnComun(lineasZonaIni, lineasZonaFin);
    this.calcularDireccion(puntoIni, puntoFin);
    console.log("direccionH: " + this.direccionH + " direccionV: " + this.direccionV);
    var listaDireccion = this.getLineasSegunDireccion(this.lineas.Lineas);
    console.log(listaDireccion);
    var listaConMenosDistancia = this.getLineasConMenosDistancias(listaDireccion, puntoIni, puntoFin);
    console.log(listaConMenosDistancia);
    this.listaLineasSeleccion = listaConMenosDistancia;
  }

  obtenerLineasPorPunto(puntoIni) {
    var zona = this.getNameZona(puntoIni.position);
    console.log(zona);
    var lineasZonaIni = this.getLineasByZona(zona);
    var listaConMenosDistancia = this.getLineasDeUnPuntoConMenosDistancia(lineasZonaIni, puntoIni);
    this.listaLineasPorUnPunto = listaConMenosDistancia;
  }

  obtenerListaPorSeleccion() {
    return this.listaLineasSeleccion;
  }

  getNameZona(punto) {
    var cantidadZonas = this.obtenerZonas();
    for (let i = 0; i < cantidadZonas.length; i++) {
      if (this.getZonaByPoint(punto, cantidadZonas[i].Puntos)) {
        return cantidadZonas[i].Nombre;
      }
    }
  }

  getLineasDeUnPuntoConMenosDistancia(lista, puntoIni) {
    var listaDistancia = [];
    for (var k = 0; k < lista.length; k++) {
      for (var h = 0; h < lista[k].Rutas.length; h++) {
        var pI = this.getPuntoCercano(lista[k].Rutas[h], puntoIni);
        var distanciaI = Math.sqrt(Math.pow(Math.abs(pI.lat) - Math.abs(puntoIni.position.lat()), 2) + Math.pow(Math.abs(pI.lng) - Math.abs(puntoIni.position.lng()), 2));
        if (!listaDistancia.some(x => x == lista[k])) {
          listaDistancia.push({ Linea: lista[k], Distancia: distanciaI });
        }
      }
    }

    var sortedArray = listaDistancia.sort((n1, n2) => {
      if (n1.Distancia > n2.Distancia) {
        return 1;
      }

      if (n1.Distancia < n2.Distancia) {
        return -1;
      }

      return 0;
    });
    var listaLineasOficial = [];
    var cantidad = 0;
    if (sortedArray.length > this.cantidadMostradaLineas) {
      cantidad = this.cantidadMostradaLineas;
    } else {
      cantidad = sortedArray.length;
    }
    for (let i = 0; i < cantidad; i++) {
      listaLineasOficial.push(sortedArray[i].Linea);
    }
    var listaLineas = [];
    for (let i = 0; i < listaLineasOficial.length; i++) {
      if (!this.existeLinea(listaLineas, listaLineasOficial[i]))
        listaLineas.push(listaLineasOficial[i]);
    }
    return listaLineas;
  }

  getLineasConMenosDistancias(lista, puntoIni, puntoFin) {
    var listaDistancia = [];
    for (let i = 0; i < lista.length; i++) {
      for (let j = 0; j < lista[i].Rutas.length; j++) {
        if (lista[i].Rutas[j].Sentido[0] == this.direccionH || lista[i].Rutas[j].Sentido[0] == this.direccionV) {
          var pI = this.getPuntoCercanoV2(lista[i].Rutas[j], puntoIni);
          var pF = this.getPuntoCercanoV2(lista[i].Rutas[j], puntoFin);
          var distanciaI = Math.sqrt(Math.pow(Math.abs(pI.lat) - Math.abs(puntoIni.position.lat()), 2) + Math.pow(Math.abs(pI.lng) - Math.abs(puntoIni.position.lng()), 2)) * 100000;
          var distanciaF = Math.sqrt(Math.pow(Math.abs(pF.lat) - Math.abs(puntoFin.position.lat()), 2) + Math.pow(Math.abs(pF.lng) - Math.abs(puntoFin.position.lng()), 2)) * 100000;
          var distanciaT = distanciaI + distanciaF;
          if (distanciaT <= 1500) {
            if (!listaDistancia.some(x => x == lista[i])) {
              listaDistancia.push({ Linea: lista[i], Distancia: distanciaT });
            }
          }
        }
      }
    }

    var sortedArray = listaDistancia.sort((n1, n2) => {
      if (n1.Distancia > n2.Distancia) {
        return 1;
      }

      if (n1.Distancia < n2.Distancia) {
        return -1;
      }

      return 0;
    });
    var listaLineasOficial = [];
    var cantidad = 0;
    if (sortedArray.length > this.cantidadMostradaLineas) {
      cantidad = this.cantidadMostradaLineas;
    } else {
      cantidad = sortedArray.length;
    }
    for (let i = 0; i < cantidad; i++) {
      listaLineasOficial.push(sortedArray[i].Linea);
    }
    var listaLineas = [];
    for (let i = 0; i < listaLineasOficial.length; i++) {
      if (!this.existeLinea(listaLineas, listaLineasOficial[i]))
        listaLineas.push(listaLineasOficial[i]);
    }
    return listaLineas;
  }

  existeLinea(lista, linea) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].Nombre == linea.Nombre)
        return true;
    }
  }

  getLineasSegunDireccion(lista) {
    var listaLineas = [];
    for (let i = 0; i < lista.length; i++) {
      for (let j = 0; j < lista[i].Rutas.length; j++) {
        if (!listaLineas.some(x => x == lista[i])) {
          listaLineas.push(lista[i]);
        }
      }
    }
    return listaLineas;
  }

  getListaLineasEnComun(listaIni, listaFin) {
    var listaComunes = [];
    listaIni.forEach(element => {
      if (!listaComunes.some(x => x == element)) {
        listaComunes.push(element);
      }
    });
    listaFin.forEach(element => {
      if (!listaComunes.some(x => x == element)) {
        listaComunes.push(element);
      }
    });
    return listaComunes;
  }

  getPuntoCercano(ruta, punto) {
    var iteracion = Math.trunc(ruta.Puntos.length / 2);
    var posicion = iteracion;
    var puntoInicio = ruta.Puntos[0];
    var puntoFin = ruta.Puntos[ruta.Puntos.length - 1];
    var puntoMedio = ruta.Puntos[posicion];
    var puntoCercano = null;

    while (iteracion != 1) {
      var distanciaIni = Math.sqrt(Math.pow(puntoInicio.lat - punto.position.lat(), 2) + Math.pow(puntoInicio.lng - punto.position.lng(), 2));
      var distanciaFin = Math.sqrt(Math.pow(puntoFin.lat - punto.position.lat(), 2) + Math.pow(puntoFin.lng - punto.position.lng(), 2));

      if (distanciaIni < distanciaFin) {
        puntoFin = puntoMedio;
        posicion -= Math.trunc(iteracion / 2);
      } else {
        puntoInicio = puntoMedio;
        posicion += Math.trunc(iteracion / 2);
      }
      puntoMedio = ruta.Puntos[posicion];
      iteracion = Math.trunc(iteracion / 2);
    }

    var opciones = new Array();
    var distancia = 10000;
    for (let i = ruta.Puntos.indexOf(puntoInicio); i <= ruta.Puntos.indexOf(puntoFin); i++) {
      opciones.push(ruta.Puntos[i]);
    }

    for (let i = 0; i < opciones.length; i++) {
      var actual = opciones[i];
      var distanciaA = Math.sqrt(Math.pow(actual.lat - punto.position.lat(), 2) + Math.pow(actual.lng - punto.position.lng(), 2));

      if (distanciaA < distancia) {
        puntoCercano = actual;
        distancia = distanciaA;
      }
    }
    return puntoCercano;
  }

  getPuntoCercanoV2(ruta, punto) {
    //var iteracion = Math.trunc(ruta.Puntos.length / 2);
    //var posicion = iteracion;
    //var puntoInicio = ruta.Puntos[0];
    //var puntoFin = ruta.Puntos[ruta.Puntos.length - 1];
    //var puntoMedio = ruta.Puntos[posicion];
    var puntoCercano = null;
    var distancia = Number.MAX_VALUE;
    for (let i = 0; i < ruta.Puntos.length; i++) {
      //var distanciaIni = Math.sqrt(Math.pow(puntoInicio.lat - punto.position.lat(), 2) + Math.pow(puntoInicio.lng - punto.position.lng(), 2));
      //var distanciaFin = Math.sqrt(Math.pow(puntoFin.lat - punto.position.lat(), 2) + Math.pow(puntoFin.lng - punto.position.lng(), 2));
      var calculo = Math.sqrt(Math.pow(ruta.Puntos[i].lat - punto.position.lat(), 2) + Math.pow(ruta.Puntos[i].lng - punto.position.lng(), 2));
      if (calculo < distancia) {
        distancia = calculo;
        puntoCercano = ruta.Puntos[i];
      }
    }
    return puntoCercano;
  }

  getLineasByZona(zonaIni) {
    var listaLineas = new Array();
    for (let i = 0; i < this.lineas.Lineas.length; i++) {
      for (let j = 0; j < this.lineas.Lineas[i].ZonasBusqueda.length; j++) {
        if (this.lineas.Lineas[i].ZonasBusqueda[j].indexOf(zonaIni) == 0) {
          listaLineas.push(this.lineas.Lineas[i]);
        }
      }
    }
    return listaLineas;
  }

  getZonaByPoint(punto, poligono) {
    var interseccion = 0;
    var tamano = poligono.length;
    for (let i = 1; i < tamano; i++) {
      var coordenadas1 = poligono[i - 1];
      var coordenadas2 = poligono[i];
      if (punto.lng() > this.minimo(coordenadas1.lng, coordenadas2.lng) && punto.lng() <= this.maximo(coordenadas1.lng, coordenadas2.lng) &&
        punto.lat() <= this.maximo(coordenadas1.lat, coordenadas2.lat) && coordenadas1.lng != coordenadas2.lng) {
        var valor = (punto.lng() - coordenadas1.lng) * ((coordenadas2.lat - coordenadas1.lat) / ((coordenadas2.lng - coordenadas1.lng) + coordenadas1.lat));

        if (coordenadas1.lat == coordenadas2.lat || punto.lat() <= valor) {
          interseccion++;
        }
      }
    }

    if (interseccion % 2 != 0) {
      return true;
    }
    return false;
  }

  minimo(c1, c2) {
    if (c1 < c2) {
      return c1;
    }
    return c2;
  }

  maximo(c1, c2) {
    if (c1 < c2) {
      return c2;
    }
    return c1;
  }

  distanciaEntreDosPuntos(pI, pF) {
    return (Math.sqrt(Math.pow(Math.abs(pF.position.lat()) - Math.abs(pI.position.lat()), 2) + Math.pow(Math.abs(pF.position.lng()) - Math.abs(pI.position.lng()), 2)) * 100000);
  }

  getPuntoEstrategico() {
    return new Promise((resolve, reject) => {
      //this.http.get('file:///android_asset/www/assets/PuntosEstrategicos/PuntosEstrategicos.json').subscribe(data => {
      //this.puntos = data.json();
      //});
      this.http.get(this.rutaJson + 'PuntosEstrategicos.json').subscribe(data => {
        this.puntos = data.json();
      });
    });
  }

  obtenerPuntos() {
    return this.puntos;
  }

  getNoticias() {
    var nuevo;
    this.http.get(this.link + 'noticias/').subscribe(data => {
      nuevo = data.json().Noticias;
      this.noticias = nuevo;
    });
  }

  obtenerNoticias() {
    return this.noticias;
  }

  getImagenesNoticias() {
    return 'http://www.kaypi.hol.es/Kaypi/images/noticias/';
  }

  getTrafNoticias() {
    this.http.get(this.link + 'noticiasTrafico/').subscribe(data => {
      this.noticiasTrafico = data.json().Noticias;
    });
  }

  obtenerNoticiasTrafico() {
    return this.noticiasTrafico;
  }

  getImagenesTrafico() {
    return 'http://www.kaypi.hol.es/Kaypi/images/trafico/';
  }
}
