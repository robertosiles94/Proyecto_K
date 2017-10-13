webpackJsonp([12],{

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = (function () {
    function HomePage(navCtrl, loadingCtrl, sqlite, servicio, diagnostic, network, platform, screenOrientation, alertCtrl, toastCtrl, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.sqlite = sqlite;
        this.servicio = servicio;
        this.diagnostic = diagnostic;
        this.network = network;
        this.platform = platform;
        this.screenOrientation = screenOrientation;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl = menuCtrl;
        this.splash = true;
        this.rootPage = 'MenuPrincipal';
        this.conexionInternet = false;
        this.logoApp = this.servicio.logoApp;
        this.salida = false;
        this.llenarListadoOpciones();
        this.platform.ready().then(function () {
            _this.bloquearRotacion();
            setTimeout(function () {
                _this.abrirMenu();
                _this.comprobarConexion();
                if (_this.platform.is('ios')) {
                }
                else if (_this.platform.is('android')) {
                }
                else {
                    _this.servicio.asignarPathsPorDefecto();
                    _this.servicio.obtenerDatos();
                    _this.servicio.cambiarIdioma("es");
                    return;
                }
                if (_this.servicio.conexionInternet) {
                    if (_this.servicio.existeNuevaVersion()) {
                        if (_this.servicio.configuracion.actualizacion == 0)
                            _this.actualizarApp();
                        else
                            _this.actualizacionAutomatica();
                    }
                }
            }, 3000);
        });
    }
    HomePage.prototype.abrirMenu = function () {
        this.menuCtrl.open();
    };
    HomePage.prototype.llenarListadoOpciones = function () {
        this.pages = [
            { title: 'Inicio', component: 'MenuPrincipal', icon: 'home' },
            { title: 'BusquedaDeLineas', component: 'Linea', icon: 'bus' },
            { title: 'IrDesdeMiUbicacion', component: 'MiDestino', icon: 'navigate' },
            { title: 'PuntosEstrategicos', component: 'PuntoEstrategico', icon: 'pricetags' },
            { title: 'NoticiasTrafico', component: 'Noticias', icon: 'paper' },
            { title: 'Configuracion', component: 'Configuracion', icon: 'construct' },
            { title: 'Ayuda', component: 'Ayuda', icon: 'help-circle' },
            { title: 'AcercaDe', component: 'AcercaDe', icon: 'information-circle' }
        ];
        this.activePage = [0];
    };
    HomePage.prototype.comprobarConexion = function () {
        var _this = this;
        if (this.network.type === 'none' || this.network.type === 'unknown') {
            this.mensajeNoInternet();
        }
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            _this.mensajeNoInternet();
        });
        var connectSubscription = this.network.onConnect().subscribe(function () {
            var toast = _this.toastCtrl.create({
                message: _this.servicio.traducir("ConInternet"),
                duration: 4000,
                position: 'bottom'
            });
            toast.present(toast);
            _this.servicio.conexionInternet = true;
        });
    };
    HomePage.prototype.mensajeNoInternet = function () {
        var toast = this.toastCtrl.create({
            message: this.servicio.traducir("SinInternet"),
            duration: 4000,
            position: 'bottom'
        });
        toast.present(toast);
        this.servicio.conexionInternet = false;
    };
    HomePage.prototype.actualizacionAutomatica = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: this.servicio.traducir("Actualizacion.Toast"),
            duration: 10000
        });
        loader.present();
        this.servicio.download();
        setTimeout(function () {
            if (_this.servicio.estadoDescarga) {
                _this.servicio.obtenerDatos();
                _this.servicio.descomprimirZip();
                var loader_1 = _this.loadingCtrl.create({
                    content: _this.servicio.traducir("Actualizacion.ToastCargandoDatos"),
                    duration: 3000
                });
                loader_1.present();
                setTimeout(function () {
                    if (!_this.servicio.estadoDescarga) {
                        _this.errorActualizacion();
                    }
                }, 3000);
            }
            else {
                _this.errorActualizacion();
            }
        }, 10000);
    };
    HomePage.prototype.actualizarApp = function () {
        var _this = this;
        var alertActualizacion = this.alertCtrl.create({
            title: this.servicio.traducir("Actualizacion.TituloMensaje"),
            message: this.servicio.traducir("Actualizacion.ContenidoMensaje"),
            buttons: [
                {
                    text: this.servicio.traducir("Botones.Cancelar"),
                    handler: function (data) {
                    }
                },
                {
                    text: this.servicio.traducir("Botones.Actualizar"),
                    handler: function (data) {
                        _this.servicio.download();
                        var loader = _this.loadingCtrl.create({
                            content: _this.servicio.traducir("Actualizacion.Toast"),
                            duration: 15000
                        });
                        loader.present();
                        setTimeout(function () {
                            if (_this.servicio.estadoDescarga) {
                                console.log("esta es las lineas descargadas: ");
                                console.log(_this.servicio.lineas);
                                var alertActualizado = _this.alertCtrl.create({
                                    title: _this.servicio.traducir("Actualizacion.TituloAlert"),
                                    message: _this.servicio.traducir("Actualizacion.ContenidoAlert"),
                                    buttons: [
                                        {
                                            text: _this.servicio.traducir("Botones.Aceptar"),
                                            handler: function (data) {
                                                _this.servicio.obtenerDatos();
                                                _this.servicio.descomprimirZip();
                                                var loader = _this.loadingCtrl.create({
                                                    content: _this.servicio.traducir("Actualizacion.ToastCargandoDatos"),
                                                    duration: 3000
                                                });
                                                loader.present();
                                                setTimeout(function () {
                                                    if (!_this.servicio.estadoDescarga) {
                                                        _this.errorActualizacion();
                                                    }
                                                }, 3000);
                                            }
                                        }
                                    ]
                                });
                                alertActualizado.present();
                            }
                            else {
                                _this.errorActualizacion();
                            }
                        }, 15000);
                    }
                }
            ]
        });
        alertActualizacion.present();
    };
    HomePage.prototype.errorActualizacion = function () {
        var _this = this;
        var error = this.alertCtrl.create({
            title: this.servicio.traducir("Actualizacion.TituloAlertError"),
            message: this.servicio.traducir("Actualizacion.MensajeAlertError"),
            buttons: [
                {
                    text: this.servicio.traducir("Botones.Aceptar"),
                    handler: function (data) {
                        _this.salida = false;
                    }
                },
                {
                    text: this.servicio.traducir("Botones.VolverIntentar"),
                    handler: function (data) {
                        _this.actualizarApp();
                    }
                }
            ]
        });
        error.present();
    };
    HomePage.prototype.salir = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: this.servicio.traducir("TituloMensajeSalir"),
            message: this.servicio.traducir("ContenidoMensajeSalir"),
            buttons: [
                {
                    text: this.servicio.traducir("Botones.Cancelar"),
                    handler: function (data) {
                        _this.salida = false;
                    }
                },
                {
                    text: this.servicio.traducir("Botones.Salir"),
                    handler: function (data) {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.salida = true;
        prompt.present();
    };
    HomePage.prototype.bloquearRotacion = function () {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
    };
    HomePage.prototype.openPage = function (page) {
        this.rootPage = page.component;
        this.activePage = page;
    };
    HomePage.prototype.checkActive = function (page) {
        return page == this.activePage;
    };
    HomePage.prototype.pageExit = function () {
        this.salir();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.splash = false;
        }, 4000);
        this.platform.registerBackButtonAction(function () {
            _this.navCtrl.pop();
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\Mis proyectos\Kaypi\src\pages\home\home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\' : \'none\'">\n  <div class="fib">\n    <div class="Aligner-item Aligner-item--top"></div>\n    <img src="img/SplashScreen/logo.png"/>\n    <div class="Aligner-item Aling-tem--bottom"></div>\n  </div>\n</div>\n\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-item ion-item>\n          <img [src]="logoApp" class="logoGam"/>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list class="menu">\n      <button ion-item *ngFor="let p of pages" menuToggle [class.activeHighlight]="checkActive(p)" (click)="openPage(p)" class="opciones">\n        {{ \'Menu.\' + p.title | translate}}\n        <ion-icon name="{{p.icon}}" item-left></ion-icon>\n      </button>\n      <button ion-item (click)="pageExit()" class="opciones">\n        {{\'Menu.Salir\' | translate}}\n        <ion-icon name="exit" item-left></ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\Mis proyectos\Kaypi\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__["a" /* SQLite */],
        __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__["a" /* KaypiServices */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__["a" /* Diagnostic */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* MenuController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=12.main.js.map