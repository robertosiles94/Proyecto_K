webpackJsonp([9],{

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lineas__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineaModule", function() { return LineaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LineaModule = (function () {
    function LineaModule() {
    }
    return LineaModule;
}());
LineaModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lineas__["a" /* Linea */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lineas__["a" /* Linea */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__lineas__["a" /* Linea */]
        ]
    })
], LineaModule);

//# sourceMappingURL=lineas.module.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__ = __webpack_require__(187);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Linea; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Linea = (function () {
    function Linea(navCtrl, alertCtrl, servicio, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.servicio = servicio;
        this.loadingCtrl = loadingCtrl;
        this.seleccionado = "Todos";
        this.seleccion = "Lineas";
        this.isCalles = false;
        //img/Lineas/{{linea.Categoria}}
        this.textoSearcher = this.servicio.traducir("BusquedaDeLineas.BarraBusqueda.Lineas");
        this.cargarLineas();
        this.cargarCategorias();
        this.listaVisible = this.lineas;
        this.colorFondo = this.servicio.modoApp;
        this.rutaImagen = this.servicio.rutaImagenes;
    }
    Linea.prototype.onSelectChange = function (event) {
        if (this.seleccionado == "Todos" || this.seleccionado == "Zona") {
            this.listaVisible = this.lineas;
            if (this.seleccionado == "Todos") {
                this.textoSearcher = this.servicio.traducir("BusquedaDeLineas.BarraBusqueda.Lineas");
            }
            else {
                this.textoSearcher = this.servicio.traducir("BusquedaDeLineas.BarraBusqueda.Zonas");
            }
            this.isCalles = false;
            this.ordenarLista(this.listaVisible);
        }
        else if (this.seleccionado == "Calles") {
            this.isCalles = true;
            this.buscador.setFocus();
            this.mostrarMensajeCalle();
        }
        else {
            this.isCalles = false;
            this.cargarCategoria(event);
        }
    };
    Linea.prototype.ionViewDidLoad = function () {
        this.initMap();
        this.servicio.paginas = 0;
        this.isCalles = false;
    };
    Linea.prototype.initMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(-17.393835, -66.156946);
        var mapOptions = {
            center: latLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        google.maps.event.addListener(this.map, 'click', function (e) {
            _this.clickMapa(e);
        });
    };
    Linea.prototype.clickMapa = function (punto) {
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
    Linea.prototype.cargarCategoria = function (categoria) {
        this.listaVisible = [];
        for (var i = 0; i < this.lineas.length; i++) {
            if (this.lineas[i].Categoria == categoria) {
                this.listaVisible.push(this.lineas[i]);
            }
        }
        this.ordenarLista(this.listaVisible);
        this.textoSearcher = this.servicio.traducir("BusquedaDeLineas.BarraBusqueda." + categoria);
    };
    Linea.prototype.cargarLineas = function () {
        this.lineas = this.servicio.obtenerLineas();
        this.ordenarLista(this.lineas);
    };
    Linea.prototype.ordenarLista = function (lista) {
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
    Linea.prototype.cargarCategorias = function () {
        this.categorias = [
            { nombre: "Todos", valor: "Todos" },
            { nombre: "Calles", valor: "Calles" }
        ];
        for (var i = 0; i < this.lineas.length; i++) {
            if (!this.existeCategoria(this.categorias, this.lineas[i].Categoria)) {
                this.categorias.push({ nombre: this.lineas[i].Categoria, valor: this.lineas[i].Categoria });
            }
        }
        this.categorias.push({ nombre: "Zona", valor: "Zona" });
    };
    Linea.prototype.existeCategoria = function (lista, categoria) {
        for (var i = 0; i < lista.length; i++) {
            if (lista[i].nombre == categoria) {
                return true;
            }
        }
        return false;
    };
    Linea.prototype.mostrarInformacion = function (linea) {
        this.navCtrl.push('InformacionLinea', linea);
    };
    Linea.prototype.getItems = function (ev) {
        this.onSelectChange(this.seleccionado);
        if (this.seleccionado == "Zona") {
            var val = ev.target.value;
            if (val && val.trim() != '') {
                this.listaVisible = this.listaVisible.filter(function (item) {
                    for (var i = 0; i < item.ZonasCBBA.length; i++) {
                        if (item.ZonasCBBA[i].toLowerCase().indexOf(val.toLowerCase()) > -1) {
                            return item;
                        }
                    }
                });
            }
        }
        else {
            var val = ev.target.value;
            if (val && val.trim() != '') {
                this.listaVisible = this.listaVisible.filter(function (item) {
                    return (item.Nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
        }
    };
    Linea.prototype.mostrarMensajeCalle = function () {
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
    return Linea;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */])
], Linea.prototype, "mapElement", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('buscador'),
    __metadata("design:type", Object)
], Linea.prototype, "buscador", void 0);
Linea = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'lineas',template:/*ion-inline-start:"E:\Mis proyectos\Kaypi\src\pages\lineas\lineas.html"*/'<ion-header>\n\n  <ion-navbar color="{{colorFondo}}">\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      {{ \'BusquedaDeLineas.TituloBusquedaLineas\' | translate }}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <img src="img/univalle.png" class="imagenLogo"/>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="getItems($event)" #buscador placeholder="{{textoSearcher}}">\n\n  </ion-searchbar>\n\n  <ion-item class="fondoCategoria">\n\n    <ion-label>{{ \'BusquedaDeLineas.Categoria.TituloCategoria\' | translate }} </ion-label>\n\n    <ion-select [(ngModel)]="seleccionado" (ionChange)="onSelectChange($event)">\n\n      <ion-option *ngFor="let c of categorias" [value]="c.valor">{{ \'BusquedaDeLineas.Categoria.\' + c.nombre | translate}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-list *ngIf="!isCalles">\n\n    <ion-item *ngFor="let linea of listaVisible" (click)="mostrarInformacion(linea)">\n\n      <ion-thumbnail item-left>\n\n        <img src="{{rutaImagen}}Lineas/{{linea.Imagen}}">\n\n      </ion-thumbnail>\n\n      <h2><b>{{linea.Nombre}}</b></h2>\n\n      <p>{{linea.Categoria}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div #map id="map" name="map" [ngClass]="{\'hide\' : !isCalles, \'show\':isCalles}">\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Mis proyectos\Kaypi\src\pages\lineas\lineas.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__["a" /* KaypiServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], Linea);

//# sourceMappingURL=lineas.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map