webpackJsonp([16],{

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__acerca_de__ = __webpack_require__(876);
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
            __WEBPACK_IMPORTED_MODULE_2__acerca_de__["a" /* AcercaDe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__acerca_de__["a" /* AcercaDe */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__acerca_de__["a" /* AcercaDe */]
        ]
    })
], ConfiguracionPageModule);

//# sourceMappingURL=acerca-de.module.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__ = __webpack_require__(499);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcercaDe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AcercaDe = (function () {
    function AcercaDe(navCtrl, servicio, toastCtrl, appVersion) {
        this.navCtrl = navCtrl;
        this.servicio = servicio;
        this.toastCtrl = toastCtrl;
        this.appVersion = appVersion;
        this.oculto = false;
        this.colorFondo = this.servicio.modoApp;
        this.obtenerNombreApp();
        this.obtenerVersionApp();
    }
    AcercaDe.prototype.mostrarDesarrolladores = function () {
        this.oculto = !this.oculto;
    };
    AcercaDe.prototype.obtenerNombreApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.appVersion.getAppName()];
                    case 1:
                        _a.appNombre = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AcercaDe.prototype.obtenerVersionApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.appVersion.getVersionCode()];
                    case 1:
                        _a.versionApp = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AcercaDe.prototype.modoUnivalle = function () {
        //var mensaje;
        this.servicio.isModoUnivalle = !this.servicio.isModoUnivalle;
        if (this.servicio.isModoUnivalle) {
            this.servicio.modoApp = "univalle";
            //mensaje = "Modo UNIVALLE Activado";
        }
        else {
            this.servicio.modoApp = "primary";
            //mensaje = "Modo UNIVALLE Desactivado";
        }
        this.colorFondo = this.servicio.modoApp;
        //let toast = this.toastCtrl.create({
        // message: mensaje,
        // duration: 2000,
        // position: 'middle'
        //});
        //toast.present(toast);
    };
    return AcercaDe;
}());
AcercaDe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'acerca-de',template:/*ion-inline-start:"E:\Mis proyectos\Kaypi\src\pages\acerca-de\acerca-de.html"*/'<ion-header>\n\n  <ion-navbar color="{{colorFondo}}">\n\n    <button ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      {{\'AcercaDe.TituloAcercaDe\' | translate}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <img src="img/univalle.png" class="imagenLogo"/>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card class="fondo">\n\n    <ion-card-header style="text-align: center">\n\n      <b><h1 class="encabezado">{{appNombre}}</h1></b>\n\n    </ion-card-header>\n\n    <img src="img/AcercaDe/icon.png" class="imagen">\n\n    <ion-card-content style="text-align: center">\n\n      <h3 class="titulo">{{\'AcercaDe.Version\' | translate}}</h3>\n\n      <p class="letra">{{versionApp}}</p>\n\n      <br>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="img/AcercaDe/cbba.png">\n\n        </ion-avatar>\n\n        <h2 class="titulo">{{\'AcercaDe.Contribuciones\' | translate}}</h2>\n\n        <p text-wrap>Gobierno Autónomo Municipal de Cochabamba</p>\n\n      </ion-item>\n\n      <br>\n\n      <ion-item (click)="modoUnivalle()">\n\n        <ion-avatar item-start>\n\n          <img src="img/AcercaDe/univalle.jpg" class="animation-univalle">\n\n        </ion-avatar>\n\n        <h2 class="titulo">{{\'AcercaDe.DesarrolladoEn\' | translate}}</h2>\n\n        <p text-wrap><a href="http://www.univalle.edu/">Universidad Privada del Valle</a></p>\n\n      </ion-item>\n\n      <br>\n\n      <ion-item (click)="mostrarDesarrolladores()">\n\n        <ion-avatar item-start>\n\n          <img src="img/AcercaDe/soceisi.jpg" class="animacionSOCEISI">\n\n        </ion-avatar>\n\n        <h2 class="titulo">{{\'AcercaDe.GrupoTrabajo\' | translate}}</h2>\n\n        <p>SOCEISI TEAM</p>\n\n        <div *ngIf="oculto">\n\n          <br>\n\n          <h2>{{\'AcercaDe.Desarrolladores\' | translate}}</h2>\n\n          <p>Msc. Ing. Joel Alánez</p>\n\n          <p>José Velasco</p>\n\n          <p>Roberto Siles</p>\n\n          <p>Ismael De la Barra</p>\n\n          <p>Javier Mercado</p>\n\n          <p>Royer Arévalo</p>\n\n        </div>\n\n      </ion-item>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"E:\Mis proyectos\Kaypi\src\pages\acerca-de\acerca-de.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__["a" /* KaypiServices */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__["a" /* AppVersion */]])
], AcercaDe);

//# sourceMappingURL=acerca-de.js.map

/***/ })

});
//# sourceMappingURL=16.main.js.map