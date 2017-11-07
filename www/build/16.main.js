webpackJsonp([16],{

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__busqueda_calle__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusquedaCallePageModule", function() { return BusquedaCallePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BusquedaCallePageModule = (function () {
    function BusquedaCallePageModule() {
    }
    return BusquedaCallePageModule;
}());
BusquedaCallePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__busqueda_calle__["a" /* BusquedaCallePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__busqueda_calle__["a" /* BusquedaCallePage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__busqueda_calle__["a" /* BusquedaCallePage */]
        ]
    })
], BusquedaCallePageModule);

//# sourceMappingURL=busqueda-calle.module.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__ = __webpack_require__(187);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusquedaCallePage; });
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
 * Generated class for the BusquedaCallePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BusquedaCallePage = (function () {
    function BusquedaCallePage(navCtrl, navParams, servicio, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicio = servicio;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.colorFondo = this.servicio.modoApp;
    }
    BusquedaCallePage.prototype.ionViewDidLoad = function () {
        this.initMap();
        this.mostrarMensajeCalle();
    };
    BusquedaCallePage.prototype.initMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(-17.393835, -66.156946);
        var mapOptions = {
            center: latLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        google.maps.event.addListener(this.map, 'click', function (e) {
            _this.clickMapa(e);
        });
    };
    BusquedaCallePage.prototype.goToIrDesdeUbicacion = function () {
        this.navCtrl.setRoot('MiDestino');
    };
    BusquedaCallePage.prototype.clickMapa = function (punto) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: this.servicio.traducir("BuscandoLineas"),
            duration: 2000
        });
        loader.present();
        this.servicio.obtenerLineasPorPunto({ position: punto.latLng });
        setTimeout(function () {
            var puntos = {
                Inicio: { position: punto.latLng },
                Fin: null
            };
            _this.navCtrl.push('ListaLineas', puntos);
        }, 2000);
    };
    BusquedaCallePage.prototype.mostrarMensajeCalle = function () {
        var alert = this.alertCtrl.create({
            title: this.servicio.traducir("BusquedaDeLineas.TituloAlertCalles"),
            message: this.servicio.traducir("BusquedaDeLineas.ContenidoAlertCalles"),
            buttons: [
                {
                    text: this.servicio.traducir("Botones.Aceptar")
                }
            ]
        });
        alert.present();
    };
    return BusquedaCallePage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */])
], BusquedaCallePage.prototype, "mapElement", void 0);
BusquedaCallePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-busqueda-calle',template:/*ion-inline-start:"E:\Mis proyectos\Kaypi\src\pages\busqueda-calle\busqueda-calle.html"*/'<ion-header>\n  <ion-navbar color="{{colorFondo}}">\n    <ion-title>\n      {{ \'BusquedaPorCalle.Titulo\' | translate}}\n    </ion-title>\n    <ion-buttons end>\n      <img src="img/univalle.png" class="imagenLogo" />\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div #map id="map" name="map"></div>\n  <ion-fab left top class="posicionAccesoDirecto">\n    <button ion-fab mini>\n      <ion-icon name="share-alt"></ion-icon>\n    </button>\n    <ion-fab-list>\n      <button ion-button round item-left color="light" (click)="goToIrDesdeUbicacion()">{{ \'AccesosDirectos.IrMiUbicacion\' | translate }}</button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"E:\Mis proyectos\Kaypi\src\pages\busqueda-calle\busqueda-calle.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__["a" /* KaypiServices */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* AlertController */]])
], BusquedaCallePage);

//# sourceMappingURL=busqueda-calle.js.map

/***/ })

});
//# sourceMappingURL=16.main.js.map