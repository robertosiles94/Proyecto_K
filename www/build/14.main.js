webpackJsonp([14],{

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ayuda__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AyudaModule", function() { return AyudaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AyudaModule = (function () {
    function AyudaModule() {
    }
    return AyudaModule;
}());
AyudaModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ayuda__["a" /* Ayuda */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ayuda__["a" /* Ayuda */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__ayuda__["a" /* Ayuda */]
        ]
    })
], AyudaModule);

//# sourceMappingURL=ayuda.module.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__ = __webpack_require__(187);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ayuda; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Ayuda = (function () {
    function Ayuda(navCtrl, servicio) {
        this.navCtrl = navCtrl;
        this.servicio = servicio;
        this.slides = [
            {
                titulo: "Búsqueda de Líneas",
                descripcion: "Escriba parte o nombre de una línea para encontrar el resultado. Existen criterios  que permiten filtrar la búsqueda  a través de calles y tipos específicos de servicios de transporte.",
                image: "linea.jpg",
                Numero: "Guia1"
            },
            {
                titulo: "Ir desde mi ubicación",
                descripcion: "Elija un punto de partida (puede ser su misma ubicación u otra diferente seleccionada del mapa).",
                image: "ubicaion.jpg",
                Numero: "Guia2"
            },
            {
                titulo: "Ir desde mi ubicación",
                descripcion: "Elija un punto de destino,  y la aplicación le mostrará las líneas más cercanas que pueden llevarle a su destino.",
                image: "ubicaion2.jpg",
                Numero: "Guia3"
            },
            {
                titulo: "Ir desde mi ubicación",
                descripcion: "La cobertura muestra el alcance actual que tiene la aplicación.",
                image: "ubicaion3.jpg",
                Numero: "Guia4"
            },
            {
                titulo: "Puntos Estratégicos",
                descripcion: "Muestra la información y ubicación de los lugares estratégicos del municipio (Centros de Abasto, Turismo, Salud, Educación, etc). Se pueden realizar búsquedas en base a parámetros.",
                image: "puntoEstrategicos.jpg",
                Numero: "Guia5"
            },
            {
                titulo: "Puntos Estratégicos",
                descripcion: "Elegido un punto estratégico es posible  determinar las líneas que pasan por dicho punto así como trazar una ruta desde su ubicación actual. La aplicación le permite crear sus propios puntos estratégicos.",
                image: "puntoEstrategicos2.jpg",
                Numero: "Guia6"
            },
            {
                titulo: "Noticias y Tráfico",
                descripcion: "Muestra noticias relevantes para el municipio así como información acerca del tráfico (Cortes de vías por reparación, bloqueos, etc.). Puede omitirse la recepción de estas noticias a través de las opciones de configuración",
                image: "noticias.jpg",
                Numero: "Guia7"
            }
        ];
        this.colorFondo = this.servicio.modoApp;
    }
    Ayuda.prototype.ionViewDidLoad = function () {
        this.servicio.paginas = 0;
    };
    return Ayuda;
}());
Ayuda = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'ayuda',template:/*ion-inline-start:"E:\Mis proyectos\Kaypi\src\pages\ayuda\ayuda.html"*/'<ion-header>\n\n    <ion-navbar color="{{colorFondo}}">\n\n        <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n        <ion-title>\n\n            {{\'Ayuda.TituloAyuda\' | translate}}\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <img src="img/univalle.png" class="imagenLogo"/>\n\n          </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-slides pager>\n\n        <ion-slide *ngFor="let ayuda of slides">\n\n            <ion-toolbar>\n\n                <ion-buttons end>\n\n                    <label ion-button>{{ \'Ayuda.\' + ayuda.Numero | translate}}</label>\n\n                </ion-buttons>\n\n            </ion-toolbar>\n\n            <img src="img/Ayuda/{{ayuda.image}}" class="slide-image" imageViewer/>\n\n            <h2 class="slide-title">{{\'Ayuda.Titulo\' + ayuda.Numero | translate}}</h2>\n\n            <p>{{\'Ayuda.Contenido\' + ayuda.Numero | translate}}</p>\n\n        </ion-slide>\n\n    </ion-slides>\n\n</ion-content>'/*ion-inline-end:"E:\Mis proyectos\Kaypi\src\pages\ayuda\ayuda.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__["a" /* KaypiServices */]])
], Ayuda);

//# sourceMappingURL=ayuda.js.map

/***/ })

});
//# sourceMappingURL=14.main.js.map