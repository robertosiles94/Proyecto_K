webpackJsonp([7],{

/***/ 871:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noticias__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasModule", function() { return NoticiasModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NoticiasModule = (function () {
    function NoticiasModule() {
    }
    return NoticiasModule;
}());
NoticiasModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__noticias__["a" /* Noticias */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__noticias__["a" /* Noticias */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__noticias__["a" /* Noticias */]
        ]
    })
], NoticiasModule);

//# sourceMappingURL=noticias.module.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_kaypi_services__ = __webpack_require__(187);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Noticias; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Noticias = (function () {
    function Noticias(navCtrl, http, navParams, servicio, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.servicio = servicio;
        this.loadingCtrl = loadingCtrl;
        this.seleccion = "Novedades";
        this.getNoticias();
        this.getTrafNoticias();
        this.colorFondo = this.servicio.modoApp;
    }
    Noticias.prototype.ionViewDidLoad = function () {
        this.servicio.paginas = 0;
    };
    Noticias.prototype.getNoticias = function () {
        this.linkImagenes = this.servicio.getImagenesNoticias();
        this.noticias = this.servicio.obtenerNoticias();
    };
    Noticias.prototype.getTrafNoticias = function () {
        this.linkImagenesTrafico = this.servicio.getImagenesTrafico();
        this.NoticiasTrafico = this.servicio.obtenerNoticiasTrafico();
    };
    Noticias.prototype.MostrarRuta = function (trafico) {
        this.navCtrl.push('TraficoRuta', { "linea": trafico.linea, "tipo": trafico.tipo });
    };
    Noticias.prototype.mostrarDetalle = function (noticia) {
        noticia.visto = !noticia.visto;
    };
    Noticias.prototype.refrescarNoticias = function () {
        var _this = this;
        this.servicio.getNoticias();
        this.servicio.getTrafNoticias();
        var loader = this.loadingCtrl.create({
            content: this.servicio.traducir("NoticiasTrafico.ToastNoticias"),
            duration: 3000
        });
        loader.present();
        setTimeout(function () {
            _this.getNoticias();
            _this.getTrafNoticias();
        }, 3000);
    };
    return Noticias;
}());
Noticias = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-noticias',template:/*ion-inline-start:"E:\Mis proyectos\Kaypi\src\pages\noticias\noticias.html"*/'<ion-header>\n\n    <ion-navbar color="{{colorFondo}}">\n\n        <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n        <ion-title>\n\n            {{\'NoticiasTrafico.TituloNoticiasTrafico\' | translate}}\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="refrescarNoticias()">\n\n                <ion-icon name="refresh"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        <ion-buttons end>\n\n            <img src="img/univalle.png" class="imagenLogo"/>\n\n          </ion-buttons>\n\n    </ion-navbar>\n\n    <div padding>\n\n        <ion-segment [(ngModel)]="seleccion" color="{{colorFondo}}">\n\n            <ion-segment-button value="Novedades" selected>\n\n                {{\'NoticiasTrafico.TabNovedades\' | translate}}\n\n            </ion-segment-button>\n\n            <ion-segment-button value="Trafico">\n\n                {{\'NoticiasTrafico.TabTrafico\' | translate}}\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div [ngSwitch]="seleccion">\n\n        <ion-list *ngSwitchCase="\'Novedades\'">\n\n            <ion-card *ngFor="let n of noticias" (click)="mostrarDetalle(n)">\n\n                <img src="{{linkImagenes}}{{n.foto}}.png" />\n\n                <ion-card-content>\n\n                    <ion-card-title>\n\n                        <b class="titulo">{{n.titulo}}</b>\n\n                        <p>publicado: {{n.fecha}}</p>\n\n                        <button *ngIf="!n.visto" color="{{colorFondo}}" ion-button clear color="primary" end>\n\n                            <ion-icon name=\'share-alt\'></ion-icon>\n\n                            {{\'Botones.VerDetalles\' | translate}}\n\n                        </button>\n\n                    </ion-card-title>\n\n                    <div *ngIf="n.visto">\n\n                        <p class="letra">\n\n                            {{n.contenido}}\n\n                        </p>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'Trafico\'">\n\n            <ion-card *ngFor="let trafico of NoticiasTrafico">\n\n                <img src="{{linkImagenesTrafico}}{{trafico.foto}}.png" />\n\n                <ion-card-content>\n\n                    <ion-card-title>\n\n                        <b class="titulo">{{trafico.titulo}}</b>\n\n                    </ion-card-title>\n\n                    <p class="letra">\n\n                        {{trafico.contenido}}\n\n                    </p>\n\n                    <button color="{{colorFondo}}" ion-button class="button button-full" color="primary" (click)="MostrarRuta(trafico)">\n\n                        {{\'Botones.VerUbicacionTrafico\' | translate}}\n\n                </button>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"E:\Mis proyectos\Kaypi\src\pages\noticias\noticias.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_kaypi_services__["a" /* KaypiServices */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */]])
], Noticias);

//# sourceMappingURL=noticias.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map