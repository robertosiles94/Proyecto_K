webpackJsonp([14],{

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracion__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionPageModule", function() { return ConfiguracionPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConfiguracionPageModule = (function () {
    function ConfiguracionPageModule() {
    }
    return ConfiguracionPageModule;
}());
ConfiguracionPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__configuracion__["a" /* Configuracion */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__configuracion__["a" /* Configuracion */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__configuracion__["a" /* Configuracion */]
        ]
    })
], ConfiguracionPageModule);

//# sourceMappingURL=configuracion.module.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__ = __webpack_require__(187);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuracion; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConfiguracionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Configuracion = (function () {
    function Configuracion(navCtrl, navParams, servicio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicio = servicio;
        this.seleccionado = this.servicio.configuracion.idioma;
        this.colorFondo = this.servicio.modoApp;
        this.idiomas = [
            { nombre: "Castellano", valor: "es" },
            { nombre: "Ingles", valor: "en" },
            { nombre: "Portugues", valor: "pt" }
        ];
    }
    Configuracion.prototype.ionViewDidLoad = function () {
        this.servicio.paginas = 0;
        this.configuracion = this.servicio.configuracion;
        this.seleccionado = this.configuracion.idioma;
        this.isActualizacion = this.configuracion.actualizacion == 1;
        this.isNoticias = this.configuracion.noticias == 1;
        this.isTrafico = this.configuracion.trafico == 1;
        this.isUnivalle = this.servicio.isModoUnivalle;
    };
    Configuracion.prototype.onSelectChange = function (event) {
        this.actualizarConfiguracion();
    };
    Configuracion.prototype.actualizarConfiguracion = function () {
        var actualizacion;
        var noticias;
        var trafico;
        if (this.isActualizacion)
            actualizacion = 1;
        else
            actualizacion = 0;
        if (this.isNoticias)
            noticias = 1;
        else
            noticias = 0;
        if (this.isTrafico)
            trafico = 1;
        else
            trafico = 0;
        this.servicio.updateConfig({ idioma: this.seleccionado, actualizacion: actualizacion, noticias: noticias, trafico: trafico, id: 1 });
        this.servicio.getConfiguracion();
        this.servicio.cambiarIdioma(this.seleccionado);
    };
    Configuracion.prototype.modoUnivalle = function () {
        this.servicio.isModoUnivalle = !this.servicio.isModoUnivalle;
        if (this.servicio.isModoUnivalle) {
            this.servicio.modoApp = "univalle";
        }
        else {
            this.servicio.modoApp = "primary";
        }
        this.colorFondo = this.servicio.modoApp;
    };
    return Configuracion;
}());
Configuracion = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-configuracion',template:/*ion-inline-start:"E:\Mis proyectos\Kaypi\src\pages\configuracion\configuracion.html"*/'<!--\n  Generated template for the ConfiguracionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="{{colorFondo}}">\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>\n      {{\'Configuracion.TituloConfiguracion\' | translate}}\n    </ion-title>\n    <ion-buttons end>\n      <img src="img/univalle.png" class="imagenLogo"/>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item class="margen" text-wrap>\n      <ion-icon name="chatboxes" item-start></ion-icon>\n      <ion-label>\n        <h2><b>{{\'Configuracion.TituloIdioma\' | translate}}</b></h2>\n        <p>{{\'Configuracion.ContenidoIdioma\' | translate}}</p>\n      </ion-label>\n      <ion-select [(ngModel)]="seleccionado" (ionChange)="onSelectChange($event)">\n        <ion-option *ngFor="let i of idiomas" [value]="i.valor">{{\'Configuracion.MensajeIdioma.\' + i.nombre | translate}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class="margen" text-wrap>\n      <ion-icon name="sync" item-start></ion-icon>\n      <ion-label>\n        <h2><b>{{\'Configuracion.TituloActualizaciones\' | translate}}</b></h2>\n        <p>{{\'Configuracion.ContenidoActualizaciones\' | translate}}</p>\n      </ion-label>\n      <ion-toggle color="secondary" [(ngModel)]="isActualizacion" (ionChange)="actualizarConfiguracion()"></ion-toggle>\n    </ion-item>\n    <ion-item class="margen" text-wrap>\n      <ion-icon name="paper" item-start></ion-icon>\n      <ion-label>\n        <h2><b>{{\'Configuracion.TituloNoticias\' | translate}}</b></h2>\n        <p>{{\'Configuracion.ContenidoNoticias\' | translate}}</p>\n      </ion-label>\n      <ion-toggle color="secondary" [(ngModel)]="isNoticias"(ionChange)="actualizarConfiguracion()"></ion-toggle>\n    </ion-item>\n    <ion-item class="margen" text-wrap>\n      <ion-icon name="warning" item-start></ion-icon>\n      <ion-label>\n        <h2><b>{{\'Configuracion.TituloTrafico\' | translate}}</b></h2>\n        <p>{{\'Configuracion.ContenidoTrafico\' | translate}}</p>\n      </ion-label>\n      <ion-toggle color="secondary" [(ngModel)]="isTrafico" (ionChange)="actualizarConfiguracion()"></ion-toggle>\n    </ion-item>\n    <ion-item class="margen" text-wrap>\n      <ion-icon name="school" item-start></ion-icon>\n      <ion-label>\n        <h2><b>{{\'Configuracion.TituloUnivalle\' | translate}}</b></h2>\n        <p>{{\'Configuracion.ContenidoUnivalle\' | translate}}</p>\n      </ion-label>\n      <ion-toggle color="secondary" [(ngModel)]="isUnivalle" (ionChange)="modoUnivalle()"></ion-toggle>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\Mis proyectos\Kaypi\src\pages\configuracion\configuracion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__["a" /* KaypiServices */]])
], Configuracion);

//# sourceMappingURL=configuracion.js.map

/***/ })

});
//# sourceMappingURL=14.main.js.map