webpackJsonp([8],{

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_lineas__ = __webpack_require__(882);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaLineasModule", function() { return ListaLineasModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListaLineasModule = (function () {
    function ListaLineasModule() {
    }
    return ListaLineasModule;
}());
ListaLineasModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lista_lineas__["a" /* ListaLineas */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_lineas__["a" /* ListaLineas */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__lista_lineas__["a" /* ListaLineas */]
        ]
    })
], ListaLineasModule);

//# sourceMappingURL=lista-lineas.module.js.map

/***/ }),

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__ = __webpack_require__(187);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaLineas; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaLineas = (function () {
    function ListaLineas(navCtrl, navParams, servicio, toastCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicio = servicio;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.inicio = this.navParams.get('Inicio');
        this.destino = this.navParams.get('Fin');
        console.log(this.servicio.paginas);
        this.colorFondo = this.servicio.modoApp;
        this.rutaImagen = this.servicio.rutaImagenes;
        if (this.destino == null) {
            this.mostrarLineasPorUnPunto();
        }
        else {
            this.getListaLineas();
        }
    }
    ListaLineas.prototype.ionViewDidLoad = function () {
        if (this.destino == null) {
            this.servicio.paginas = 3;
        }
        else {
            this.servicio.paginas = 1;
        }
    };
    ListaLineas.prototype.ionViewDidLeave = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
        });
    };
    ListaLineas.prototype.getListaLineas = function () {
        //this.lineas = this.servicio.obtenerLineasPorSelecion(this.inicio, this.destino);
        this.lineas = this.servicio.obtenerListaPorSeleccion();
        this.sentido = this.servicio.getSentido();
        var mensaje = this.servicio.traducir("IrDesdeMiUbicacion.ToastNinguno");
        if (this.lineas.length >= 1) {
            mensaje = this.servicio.traducir("IrDesdeMiUbicacion.ToastLineasCercanas");
        }
        this.mostrarMensaje(mensaje);
    };
    ListaLineas.prototype.mostrarLineasPorUnPunto = function () {
        this.lineas = this.servicio.listaLineasPorUnPunto;
        this.sentido = null;
        this.destino = { position: null };
        var mensaje = this.servicio.traducir("IrDesdeMiUbicacion.ToastNinguno");
        if (this.lineas.length >= 1) {
            mensaje = this.servicio.traducir("IrDesdeMiUbicacion.ToastLineasCercanas");
        }
        this.mostrarMensaje(mensaje);
    };
    ListaLineas.prototype.mostrarRuta = function (linea) {
        var objeto = {
            Linea: linea,
            Puntos: {
                Punto1: this.inicio.position,
                Punto2: this.destino.position
            },
            Sentido: this.sentido
        };
        this.navCtrl.push('LineaRuta', objeto);
    };
    ListaLineas.prototype.mostrarMensaje = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 8000,
            position: 'bottom'
        });
        toast.present(toast);
    };
    return ListaLineas;
}());
ListaLineas = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-lista-lineas',template:/*ion-inline-start:"E:\Mis proyectos\Kaypi\src\pages\lista-lineas\lista-lineas.html"*/'<ion-header>\n    <ion-navbar color="{{colorFondo}}">\n        <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n        <ion-title>\n            {{\'IrDesdeMiUbicacion.ResultadoBusqueda\' | translate}}\n        </ion-title>\n        <ion-buttons end>\n            <img src="img/univalle.png" class="imagenLogo"/>\n          </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor="let linea of lineas" (click)="mostrarRuta(linea)">\n            <ion-thumbnail item-left>\n                <img src="{{rutaImagen}}Lineas/{{linea.Imagen}}">\n            </ion-thumbnail>\n            <h2><b>{{linea.Nombre}}</b></h2>\n            <p>{{linea.Categoria}}</p>\n            <button ion-button clear color="{{colorFondo}}" item-end>\n                {{\'Botones.VerDetalles\' | translate}}\n            </button>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"E:\Mis proyectos\Kaypi\src\pages\lista-lineas\lista-lineas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__["a" /* KaypiServices */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */]])
], ListaLineas);

//# sourceMappingURL=lista-lineas.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map