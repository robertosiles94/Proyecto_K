webpackJsonp([8],{

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRadioMovilPageModule", function() { return ModalRadioMovilPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModalRadioMovilPageModule = (function () {
    function ModalRadioMovilPageModule() {
    }
    return ModalRadioMovilPageModule;
}());
ModalRadioMovilPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalRadioMovilPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalRadioMovilPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalRadioMovilPage */]
        ]
    })
], ModalRadioMovilPageModule);

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__ = __webpack_require__(498);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalRadioMovilPage; });
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
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ModalRadioMovilPage = (function () {
    function ModalRadioMovilPage(navCtrl, navParams, servicio, toastCtrl, platform, clipboard, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicio = servicio;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.clipboard = clipboard;
        this.view = view;
        this.telefonoOficial = '800101010';
        var data = this.navParams.get('data');
        this.rutaImagen = this.servicio.rutaImagenes;
        this.colorFondo = this.servicio.modoApp;
        this.titulo = data.Objeto.Titulo;
        this.logo = data.Objeto.Logo;
        this.direccion = data.Objeto.Direccion;
        this.telefonos = data.Objeto.Telefonos;
    }
    ModalRadioMovilPage.prototype.copiarTelefono = function (telf) {
        this.clipboard.copy(telf);
        var toast = this.toastCtrl.create({
            message: this.servicio.traducir("BusquedaDeLineas.InformacionLineas.Telefono"),
            duration: 1000,
            position: 'middle'
        });
        toast.present(toast);
        console.log('Telefono copiado' + telf);
    };
    ModalRadioMovilPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    ModalRadioMovilPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
        });
    };
    return ModalRadioMovilPage;
}());
ModalRadioMovilPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-modal',template:/*ion-inline-start:"E:\Mis proyectos\Kaypi\src\pages\modalRadioMovil\modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="{{colorFondo}}">\n    <ion-title>\n      {{\'RadioMoviles.Titulo\' | translate}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">{{\'Botones.Cerrar\' | translate}}</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="fondo" padding>\n  <ion-card-header style="text-align: center">\n    <b>\n      <h1 class="encabezado">{{titulo}}</h1>\n    </b>\n  </ion-card-header>\n  <img src="{{rutaImagen}}RadioMoviles/{{logo}}" class="imagen" imageViewer>\n  <ion-card-content style="text-align: center">\n    <h3 class="titulo">{{\'RadioMoviles.DireccionModal\' | translate}}</h3>\n    <p class="letra">{{direccion}}</p>\n    <h3 class="titulo">{{\'RadioMoviles.Telefonos\' | translate}}</h3>\n    <p *ngFor="let telf of telefonos">\n      <button ion-button clear icon-left (click)="copiarTelefono(telf)">\n        {{telf}}\n        <ion-icon name="copy" class="iconoTelf"></ion-icon>\n      </button>\n    </p>\n    <p class="titulo">\n      {{\'RadioMoviles.Denuncias\' | translate}}\n      <button ion-button clear icon-left (click)="copiarTelefono(telefonoOficial)">\n        800-10-1010\n        <ion-icon name="copy" class="iconoTelf"></ion-icon>\n      </button>\n    </p>\n  </ion-card-content>\n</ion-content>'/*ion-inline-end:"E:\Mis proyectos\Kaypi\src\pages\modalRadioMovil\modal.html"*/,
    })
    //ModalTaxis
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__["a" /* KaypiServices */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__["a" /* Clipboard */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], ModalRadioMovilPage);

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map