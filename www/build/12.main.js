webpackJsonp([12],{

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__informacion_linea__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacionLineaModule", function() { return InformacionLineaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InformacionLineaModule = (function () {
    function InformacionLineaModule() {
    }
    return InformacionLineaModule;
}());
InformacionLineaModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__informacion_linea__["a" /* InformacionLinea */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__informacion_linea__["a" /* InformacionLinea */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__informacion_linea__["a" /* InformacionLinea */]
        ]
    })
], InformacionLineaModule);

//# sourceMappingURL=informacion-linea.module.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__ = __webpack_require__(500);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacionLinea; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InformacionLinea = (function () {
    function InformacionLinea(navCtrl, servicio, navParams, clipboard, platform, toastCtrl) {
        this.navCtrl = navCtrl;
        this.servicio = servicio;
        this.navParams = navParams;
        this.clipboard = clipboard;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.colorFondo = this.servicio.modoApp;
        this.rutaImagen = this.servicio.rutaImagenes;
    }
    InformacionLinea.prototype.cargarLinea = function () {
        this.nombre = this.navParams.get('Nombre');
        this.categoria = this.navParams.get('Categoria');
        this.telefonos = this.navParams.get('Telefono');
        this.calles = this.navParams.get('Calles');
        this.pasaje = this.navParams.get('Pasajes');
        this.imagen = this.navParams.get('Imagen');
        this.rutas = this.navParams.get('Rutas');
        this.horarios = this.navParams.get("Horarios");
    };
    InformacionLinea.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.servicio.paginas = 1;
        this.cargarLinea();
        console.log(this.servicio.paginas);
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
        });
    };
    InformacionLinea.prototype.ionViewDidLeave = function () {
        console.log(this.servicio.paginas);
    };
    InformacionLinea.prototype.copiarTelefono = function (telf) {
        this.clipboard.copy(telf);
        var toast = this.toastCtrl.create({
            message: this.servicio.traducir("BusquedaDeLineas.InformacionLineas.Telefono"),
            duration: 1000,
            position: 'middle'
        });
        toast.present(toast);
    };
    InformacionLinea.prototype.mostrarRuta = function () {
        var objeto = {
            Linea: { Rutas: this.rutas, Nombre: this.nombre },
            Puntos: null,
            Sentido: null
        };
        this.navCtrl.push('LineaRuta', objeto);
    };
    return InformacionLinea;
}());
InformacionLinea = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'informacion-linea',template:/*ion-inline-start:"E:\Mis proyectos\Kaypi\src\pages\informacion-linea\informacion-linea.html"*/'<ion-header>\n\n    <ion-navbar color="{{colorFondo}}">\n\n        <ion-title>\n\n            {{\'BusquedaDeLineas.InformacionLineas.TituloInformacionLinea\' | translate}}\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <img src="img/univalle.png" class="imagenLogo"/>\n\n          </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card class="fondo">\n\n        <ion-card-header style="text-align: center">\n\n            <b><h1 class="encabezado">{{nombre}}</h1></b>\n\n\n\n        </ion-card-header>\n\n        <img src="{{rutaImagen}}Lineas/{{imagen}}" alt="{{nombre}}" class="imagenLinea" imageViewer>\n\n        <ion-card-content style="text-align: center">\n\n            <h3 class="titulo">{{\'BusquedaDeLineas.InformacionLineas.VerRutas\' | translate}} </h3>\n\n            <button ion-button round icon-left color="{{colorFondo}}" (click)="mostrarRuta()">\n\n                <ion-icon name="navigate"></ion-icon>\n\n                {{\'Botones.BotonVerRutas\' | translate}}\n\n            </button>\n\n            <h3 class="titulo">{{\'BusquedaDeLineas.InformacionLineas.CostoDelPasaje\' | translate}} </h3>\n\n            <p class="letra" *ngFor="let p of pasaje">{{p}}</p>\n\n            <br>\n\n            <h3 class="titulo">{{\'BusquedaDeLineas.InformacionLineas.Horarios\' | translate}} </h3>\n\n            <p class="letra" *ngFor="let horario of horarios">{{horario}}</p>\n\n            <br>\n\n            <h3 class="titulo">{{\'BusquedaDeLineas.InformacionLineas.CallesPrincipales\' | translate}}</h3>\n\n            <p *ngFor="let calle of calles" class="letra">{{calle}}</p>\n\n            <br>\n\n            <h3 class="titulo">{{\'BusquedaDeLineas.InformacionLineas.Consultas\' | translate}} </h3>\n\n            <p *ngFor="let telf of telefonos">\n\n                <button ion-button clear icon-left (click)="copiarTelefono(telf)">\n\n                    {{telf}}\n\n                <ion-icon name="copy" class="iconoTelf"></ion-icon>\n\n            </button>\n\n            </p>\n\n            <br>\n\n            <h3 class="titulo">{{\'BusquedaDeLineas.InformacionLineas.Categoria\' | translate}}</h3>\n\n            <p class="letra">{{categoria}}</p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\Mis proyectos\Kaypi\src\pages\informacion-linea\informacion-linea.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__["a" /* KaypiServices */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__["a" /* Clipboard */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], InformacionLinea);

//# sourceMappingURL=informacion-linea.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map