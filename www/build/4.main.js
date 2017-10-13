webpackJsonp([4],{

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trafico_ruta__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraficoRutaModule", function() { return TraficoRutaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TraficoRutaModule = (function () {
    function TraficoRutaModule() {
    }
    return TraficoRutaModule;
}());
TraficoRutaModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__trafico_ruta__["a" /* TraficoRuta */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__trafico_ruta__["a" /* TraficoRuta */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__trafico_ruta__["a" /* TraficoRuta */]
        ]
    })
], TraficoRutaModule);

//# sourceMappingURL=trafico-ruta.module.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__ = __webpack_require__(187);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TraficoRuta; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TraficoRuta = (function () {
    function TraficoRuta(navCtrl, servicio, navParams, platform) {
        this.navCtrl = navCtrl;
        this.servicio = servicio;
        this.navParams = navParams;
        this.platform = platform;
        this.linea = this.navParams.get('linea');
        this.tipo = this.navParams.get('tipo');
        this.colorFondo = this.servicio.modoApp;
        this.lat = this.linea.Rutas.Puntos[0].lat;
        this.lng = this.linea.Rutas.Puntos[0].lng;
    }
    TraficoRuta.prototype.cargarLinea = function () {
        this.ruta = this.linea.Rutas.Puntos;
    };
    TraficoRuta.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
        });
        console.log(this.servicio.paginas);
        this.cargarLinea();
        this.initMap();
        this.cargarRuta();
    };
    TraficoRuta.prototype.cargarRuta = function () {
        if (this.tipo === "0") {
            var flightPath = new google.maps.Polyline({
                path: this.ruta,
                geodesic: true,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 2
            });
            flightPath.setMap(this.map);
        }
        else {
            var covertura = new google.maps.Polygon({
                path: this.ruta,
                geodesic: true,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35
            });
            covertura.setMap(this.map);
        }
    };
    TraficoRuta.prototype.initMap = function () {
        var latLng = new google.maps.LatLng(this.lat, this.lng);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    return TraficoRuta;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */])
], TraficoRuta.prototype, "mapElement", void 0);
TraficoRuta = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'trafico-ruta',template:/*ion-inline-start:"E:\Mis proyectos\Kaypi\src\pages\trafico-Ruta\trafico-ruta.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom color="{{colorFondo}}">\n\n    <ion-title>\n\n    {{\'NoticiasTrafico.TabTrafico\' | translate}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <img src="img/univalle.png" class="imagenLogo"/>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div #map id="map" name="map"></div>\n\n</ion-content>'/*ion-inline-end:"E:\Mis proyectos\Kaypi\src\pages\trafico-Ruta\trafico-ruta.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__["a" /* KaypiServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */]])
], TraficoRuta);

//# sourceMappingURL=trafico-ruta.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map