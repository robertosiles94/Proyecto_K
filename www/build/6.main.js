webpackJsonp([6],{

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__puntos_estrategicos__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntoEstrategicoModule", function() { return PuntoEstrategicoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PuntoEstrategicoModule = (function () {
    function PuntoEstrategicoModule() {
    }
    return PuntoEstrategicoModule;
}());
PuntoEstrategicoModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__puntos_estrategicos__["a" /* PuntoEstrategico */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__puntos_estrategicos__["a" /* PuntoEstrategico */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__puntos_estrategicos__["a" /* PuntoEstrategico */]
        ]
    })
], PuntoEstrategicoModule);

//# sourceMappingURL=puntos-estrategicos.module.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__ = __webpack_require__(187);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PuntoEstrategico; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PuntoEstrategico = (function () {
    //ruta: string = this.servicio.ruta;
    function PuntoEstrategico(navCtrl, alertCtrl, toastCtrl, servicio) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.servicio = servicio;
        this.Seleccionado = "Todos";
        this.seleccion = "Puntos";
        this.textoBuscador = this.servicio.traducir("PuntosEstrategicos.BarraBusqueda");
        this.textoBuscadorPunto = this.servicio.traducir("PuntosEstrategicos.MisPuntos.BarraBusqueda");
        this.busqueda = false;
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
    PuntoEstrategico.prototype.cargarPuntos = function () {
        this.puntosEstrategicos = this.servicio.obtenerPuntos().PuntosEstrategicos;
        this.ordenarLista(this.puntosEstrategicos);
    };
    PuntoEstrategico.prototype.ordenarLista = function (lista) {
        lista.sort(function (i1, i2) {
            if (i1.Nombre > i2.Nombre) {
                return 1;
            }
            if (i1.Nombre < i2.Nombre) {
                return -1;
            }
            return 0;
        });
    };
    PuntoEstrategico.prototype.ionViewDidLoad = function () {
        this.servicio.paginas = 0;
        this.servicio.getMisPuntos();
    };
    PuntoEstrategico.prototype.cargarCategorias = function () {
        this.categorias = [
            { Nombre: "Todos", Valor: "Todos", Imagen: "Todos.png" },
        ];
        for (var i = 0; i < this.puntosEstrategicos.length; i++) {
            if (!this.existeCategoria(this.categorias, this.puntosEstrategicos[i].Categoria)) {
                this.categorias.push({ Nombre: this.puntosEstrategicos[i].Categoria, Valor: this.puntosEstrategicos[i].Categoria, Imagen: this.puntosEstrategicos[i].Imagen });
            }
        }
    };
    PuntoEstrategico.prototype.esVisible = function () {
        if (!this.busqueda)
            this.listaMisPuntos = this.servicio.misPuntos;
        //this.getMisPuntos({ target: { value: this.busqueda} });
        return false;
    };
    PuntoEstrategico.prototype.editarMiPunto = function (punto) {
        var objeto = {
            Opcion: "modificar",
            Punto: punto
        };
        this.navCtrl.push('MisPuntosPage', objeto);
    };
    PuntoEstrategico.prototype.eliminarMiPunto = function (punto) {
        var _this = this;
        this.servicio.delete(punto)
            .then(function (response) {
            _this.servicio.getMisPuntos();
            _this.misPuntos = _this.servicio.misPuntos;
            var toast = _this.toastCtrl.create({
                message: _this.servicio.traducir("PuntosEstrategicos.MisPuntos.ToastEliminado"),
                duration: 3000,
                position: 'bottom'
            });
            toast.present(toast);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    PuntoEstrategico.prototype.agregarPunto = function () {
        this.navCtrl.push('MisPuntosPage');
    };
    PuntoEstrategico.prototype.existeCategoria = function (lista, categoria) {
        for (var i = 0; i < lista.length; i++) {
            if (lista[i].Nombre == categoria) {
                return true;
            }
        }
        return false;
    };
    PuntoEstrategico.prototype.onSelectChange = function (event) {
        this.categoriaSeleccionada = event;
        if (this.Seleccionado == "Todos") {
            this.lista = this.puntosEstrategicos;
            this.ordenarLista(this.lista);
        }
        else {
            this.cargarCategoria(event);
        }
    };
    PuntoEstrategico.prototype.cargarCategoria = function (categoria) {
        this.lista = [];
        for (var i = 0; i < this.puntosEstrategicos.length; i++) {
            if (this.puntosEstrategicos[i].Categoria == categoria) {
                this.lista.push(this.puntosEstrategicos[i]);
            }
        }
        this.ordenarLista(this.lista);
    };
    PuntoEstrategico.prototype.mostrarPunto = function (punto) {
        this.navCtrl.push('PuntoEstrategicoMapa', punto);
    };
    PuntoEstrategico.prototype.mostrarPuntosEstrategicos = function () {
        this.opcion = "Todos";
        this.verMapa();
    };
    PuntoEstrategico.prototype.mostrarInformacionPuntoFavorito = function (punto) {
        var objeto = {
            Punto: {
                data: {
                    Punto: { lat: punto.lat, lng: punto.lng },
                    Nombre: punto.nombre,
                    Marcador: "Transporte.png"
                }
            },
            Opcion: "Especifico"
        };
        this.navCtrl.push('PuntoEstrategicoMapa', objeto);
    };
    PuntoEstrategico.prototype.verMapa = function () {
        var objeto = {
            CategoriaSeleccionada: this.categoriaSeleccionada,
            Opcion: this.opcion
        };
        this.navCtrl.push('PuntoEstrategicoMapa', objeto);
    };
    PuntoEstrategico.prototype.fabVisible = function () {
        return this.seleccion == "misPuntos";
    };
    PuntoEstrategico.prototype.mostrarInformacion = function (puntosEstrategicos) {
        this.navCtrl.push('PuntosEstrategicosInfo', puntosEstrategicos);
    };
    PuntoEstrategico.prototype.getItems = function (evento) {
        this.onSelectChange(this.Seleccionado);
        var val = evento.target.value;
        if (val && val.trim() != "") {
            this.lista = this.lista.filter(function (item) {
                return (item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    PuntoEstrategico.prototype.getMisPuntos = function (evento) {
        var val = evento.target.value;
        this.listaMisPuntos = this.servicio.misPuntos;
        if (val && val.trim() != "") {
            this.busqueda = true;
            this.listaMisPuntos = this.listaMisPuntos.filter(function (item) {
                return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.busqueda = false;
        }
    };
    PuntoEstrategico.prototype.eliminarPunto = function (punto) {
        var _this = this;
        var mensaje = this.alertCtrl.create({
            title: this.servicio.traducir("PuntosEstrategicos.MisPuntos.TituloAlertEliminar") + " '" + punto.nombre + "'",
            message: this.servicio.traducir("PuntosEstrategicos.MisPuntos.ContenidoAlertEliminar"),
            buttons: [
                {
                    text: this.servicio.traducir("Botones.Cancelar"),
                    handler: function (data) {
                    }
                },
                {
                    text: this.servicio.traducir("Botones.Eliminar"),
                    handler: function (data) {
                        _this.eliminarMiPunto(punto);
                    }
                }
            ]
        });
        mensaje.present();
    };
    return PuntoEstrategico;
}());
PuntoEstrategico = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'puntos-estrategicos',template:/*ion-inline-start:"E:\Mis proyectos\Kaypi\src\pages\puntos-estrategicos\puntos-estrategicos.html"*/'<ion-header>\n\n  <ion-navbar color="{{colorFondo}}">\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      {{\'PuntosEstrategicos.TituloPuntosEstrategicos\' | translate}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <img src="img/univalle.png" class="imagenLogo"/>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-segment [(ngModel)]="seleccion" class="opciones" color="{{colorFondo}}">\n\n    <ion-segment-button value="Puntos" selected>\n\n      {{\'PuntosEstrategicos.TabPuntos\' | translate}}\n\n    </ion-segment-button>\n\n    <ion-segment-button value="misPuntos">\n\n      {{\'PuntosEstrategicos.TabMisPuntos\' | translate}}\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-fab right bottom (click)="agregarPunto()" *ngIf="fabVisible()">\n\n    <button ion-fab class="jellyAnimation" color="{{colorFondo}}"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n  <div [ngSwitch]="seleccion">\n\n    <div *ngSwitchCase="\'Puntos\'">\n\n      <ion-searchbar (ionInput)="getItems($event)" placeholder="{{textoBuscador}}"></ion-searchbar>\n\n      <ion-item class="fondoCategoria">\n\n        <ion-label>{{\'PuntosEstrategicos.Categoria.TituloCategoria\' | translate}}: </ion-label>\n\n        <ion-select [(ngModel)]="Seleccionado" (ionChange)="onSelectChange($event)">\n\n          <ion-option *ngFor="let c of categorias" [value]="c.Valor">{{ \'PuntosEstrategicos.Categoria.\' + c.Nombre | translate}} </ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <button round ion-button block color="secondary" (click)="mostrarPuntosEstrategicos()">\n\n          {{\'Botones.BotonVerTodosLosPuntos\' | translate}}\n\n        </button>\n\n      </ion-item>\n\n      <ion-list>\n\n        <ion-item *ngFor="let puntoE of lista" (click)="mostrarInformacion(puntoE)">\n\n          <ion-thumbnail item-left>\n\n            <img src="{{rutaImagen}}PuntosEstrategicos/{{puntoE.Imagen}}">\n\n          </ion-thumbnail>\n\n          <h2 text-wrap><b>{{puntoE.Nombre}}</b></h2>\n\n          <p>{{ \'PuntosEstrategicos.Categoria.\' + puntoE.Categoria | translate}}</p>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    <div *ngSwitchCase="\'misPuntos\'">\n\n      <ion-searchbar (ionInput)="getMisPuntos($event)" placeholder="{{textoBuscadorPunto}}">\n\n      </ion-searchbar>\n\n      <button *ngIf="esVisible()"></button>\n\n      <ion-list>\n\n        <ion-item *ngFor="let punto of listaMisPuntos">\n\n          <div (click)="mostrarInformacionPuntoFavorito(punto)">\n\n            <div item-left>\n\n              <h2><b>{{punto.nombre}}</b></h2>\n\n            </div>\n\n          </div>\n\n          <div item-end class="opcionesPuntos">\n\n            <ion-icon name="create" class="margen" color="primary" large (click)="editarMiPunto(punto)"></ion-icon>\n\n            <ion-icon name="trash" color="danger" large (click)="eliminarPunto(punto)"></ion-icon>\n\n          </div>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Mis proyectos\Kaypi\src\pages\puntos-estrategicos\puntos-estrategicos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__["a" /* KaypiServices */]])
], PuntoEstrategico);

//# sourceMappingURL=puntos-estrategicos.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map