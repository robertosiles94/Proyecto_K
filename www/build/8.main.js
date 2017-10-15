webpackJsonp([8],{

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_principal__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalModule", function() { return MenuPrincipalModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MenuPrincipalModule = (function () {
    function MenuPrincipalModule() {
    }
    return MenuPrincipalModule;
}());
MenuPrincipalModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__menu_principal__["a" /* MenuPrincipal */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_principal__["a" /* MenuPrincipal */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__menu_principal__["a" /* MenuPrincipal */]
        ]
    })
], MenuPrincipalModule);

//# sourceMappingURL=menu-principal.module.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__ = __webpack_require__(187);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPrincipal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuPrincipal = (function () {
    function MenuPrincipal(navCtrl, platform, db) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.db = db;
        this.imagenesDia = [
            'dia0.jpg',
            'dia1.jpg',
            'dia3.jpg',
            'noche0.jpg',
            'noche1.jpg'
        ];
        this.imagenesNoche = [];
        this.platform.ready().then(function () {
            //this.getEstadoDia();
        });
        this.colorFondo = this.db.modoApp;
    }
    MenuPrincipal.prototype.ionViewDidLoad = function () {
        this.db.paginas = 0;
    };
    MenuPrincipal.prototype.getEstadoDia = function () {
        var d = new Date();
        var n = d.getHours();
        if (n < 18) {
            this.tiempo = "Dia";
            this.imagenesDeFondo = this.imagenesDia.sort(function () { return Math.random() - 0.5; });
            ;
        }
        else {
            this.tiempo = "Noche";
            this.imagenesDeFondo = this.imagenesNoche.sort(function () { return Math.random() - 0.5; });
            ;
        }
    };
    return MenuPrincipal;
}());
MenuPrincipal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-menu-principal',template:/*ion-inline-start:"E:\Mis proyectos\Kaypi\src\pages\menu-principal\menu-principal.html"*/'\n\n<ion-header>\n\n  <ion-navbar color="{{colorFondo}}">\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      {{\'Menu.Inicio\' | translate}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <img src="img/univalle.png" class="imagenLogo"/>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-slides loop="true" pager>\n\n    <ion-slide *ngFor="let imga of imagenesDia">\n\n      <img src="img/MenuPrincipal/{{imga}}" class="fondoImg">\n\n    </ion-slide>\n\n  </ion-slides> \n\n</ion-content>\n\n'/*ion-inline-end:"E:\Mis proyectos\Kaypi\src\pages\menu-principal\menu-principal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__["a" /* KaypiServices */]])
], MenuPrincipal);

//# sourceMappingURL=menu-principal.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map