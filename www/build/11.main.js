webpackJsonp([11],{

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linea_ruta__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineaRutaModule", function() { return LineaRutaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LineaRutaModule = (function () {
    function LineaRutaModule() {
    }
    return LineaRutaModule;
}());
LineaRutaModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__linea_ruta__["a" /* LineaRuta */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__linea_ruta__["a" /* LineaRuta */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__linea_ruta__["a" /* LineaRuta */]
        ]
    })
], LineaRutaModule);

//# sourceMappingURL=linea-ruta.module.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_kaypi_services__ = __webpack_require__(187);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineaRuta; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LineaRuta = (function () {
    function LineaRuta(navCtrl, servicio, navParams, network, toastCtrl, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.servicio = servicio;
        this.navParams = navParams;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.opcion = "";
        this.puntosSelecion = this.navParams.get('Puntos');
        this.linea = this.navParams.get('Linea');
        this.sentido = this.navParams.get('Sentido');
        this.nombreLinea = this.linea.Nombre;
        this.colorFondo = this.servicio.modoApp;
    }
    LineaRuta.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000
        });
        toast.present();
    };
    LineaRuta.prototype.cargarLinea = function () {
        this.nombreLinea = this.linea.Nombre;
        this.rutas = this.linea.Rutas;
    };
    LineaRuta.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
        });
        this.cargarLinea();
        this.initMap();
        this.cargarAllRutas();
        if (this.sentido != null) {
            for (var i = 0; i < this.rutas.length; i++) {
                if (this.rutas[i].Sentido[0] == this.sentido.SentV || this.rutas[i].Sentido[0] == this.sentido.SentH) {
                    this.removeLine(this.rutas[i]);
                    this.mostrarMarcadores();
                    return;
                }
            }
        }
        if (this.puntosSelecion != null) {
            this.mostrarMarcadores();
        }
    };
    LineaRuta.prototype.mostrarMarcadores = function () {
        var marker = new google.maps.Marker({
            position: this.puntosSelecion.Punto1,
            icon: 'img/BusquedaUbicacion/Marcadores/marcadorIni.png',
            map: this.map
        });
        if (this.puntosSelecion.Punto2 != null) {
            var marker2 = new google.maps.Marker({
                position: this.puntosSelecion.Punto2,
                icon: 'img/BusquedaUbicacion/Marcadores/marcadorFin.png',
                map: this.map
            });
        }
    };
    LineaRuta.prototype.cargarAllRutas = function () {
        if (this.opcion != "todos") {
            if (this.flightPath != undefined) {
                this.flightPath.setMap(null);
            }
            this.allRutas = [];
            this.opcion = "todos";
            for (var i = 0; i < this.rutas.length; i++) {
                var linePath = new google.maps.Polyline({
                    path: this.rutas[i].Puntos,
                    geodesic: true,
                    strokeColor: this.cargarColor(this.rutas[i].Color),
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });
                this.allRutas.push(linePath);
                linePath.setMap(this.map);
            }
            this.flightPath = this.allRutas[0];
        }
    };
    LineaRuta.prototype.removeAllRutas = function () {
        for (var i = 0; i < this.rutas.length; i++) {
            this.allRutas[i].setMap(null);
        }
    };
    LineaRuta.prototype.cargarRuta = function (ruta) {
        this.flightPath = new google.maps.Polyline({
            path: ruta.Puntos,
            geodesic: true,
            strokeColor: this.cargarColor(ruta.Color),
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        this.flightPath.setMap(this.map);
        this.opcion = "";
    };
    LineaRuta.prototype.cargarColor = function (color) {
        var result = '';
        if (color == "secondary") {
            result = '#32DB64';
        }
        else if (color == "danger") {
            result = '#F53D3D';
        }
        else if (color == "dark") {
            result = '#222222';
        }
        return result;
    };
    LineaRuta.prototype.removeLine = function (ruta) {
        if (this.opcion == "todos") {
            this.removeAllRutas();
        }
        else {
            this.flightPath.setMap(null);
        }
        this.cargarRuta(ruta);
    };
    LineaRuta.prototype.initMap = function () {
        var latLng = new google.maps.LatLng(-17.393835, -66.156946);
        var mapOptions = {
            center: latLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    return LineaRuta;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */])
], LineaRuta.prototype, "mapElement", void 0);
LineaRuta = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'linea-ruta',template:/*ion-inline-start:"E:\Mis proyectos\Kaypi\src\pages\linea-Ruta\linea-ruta.html"*/'<ion-header>\n\n  <ion-navbar color="{{colorFondo}}">\n\n    <ion-title>\n\n      {{nombreLinea}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <img src="img/univalle.png" class="imagenLogo"/>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div #map id="map" name="map"></div>\n\n  <ion-fab left bottom>\n\n    <button ion-fab color="{{colorFondo}}" class="jellyAnimation"><ion-icon name="arrow-dropup"></ion-icon></button>\n\n    <ion-fab-list side="top" class="itemsFab">\n\n      <button class="margenBoton botonesFab" color="light" ion-button round item-left (click)="cargarAllRutas()">\n\n        <ion-icon name="md-navigate" item-left></ion-icon>\n\n        <ion-label class="colorLetras">{{\'Rutas.Todos\' | translate}}</ion-label>\n\n        </button>\n\n        <button class="margenBoton botonesFab" color="light" ion-button round item-left *ngFor="let r of rutas" (click)="removeLine(r)">\n\n          <ion-icon name="md-navigate" color="{{r.Color}}" item-left></ion-icon>\n\n        <ion-label class="colorLetras">{{\'Rutas.\' + r.Sentido | translate}}</ion-label>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"E:\Mis proyectos\Kaypi\src\pages\linea-Ruta\linea-ruta.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_kaypi_services__["a" /* KaypiServices */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */]])
], LineaRuta);

//# sourceMappingURL=linea-ruta.js.map

/***/ })

});
//# sourceMappingURL=11.main.js.map