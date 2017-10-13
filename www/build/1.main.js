webpackJsonp([1],{

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__punto_estrategico_mapa__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntoEstrategicoMapaModule", function() { return PuntoEstrategicoMapaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PuntoEstrategicoMapaModule = (function () {
    function PuntoEstrategicoMapaModule() {
    }
    return PuntoEstrategicoMapaModule;
}());
PuntoEstrategicoMapaModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__punto_estrategico_mapa__["a" /* PuntoEstrategicoMapa */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__punto_estrategico_mapa__["a" /* PuntoEstrategicoMapa */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__punto_estrategico_mapa__["a" /* PuntoEstrategicoMapa */]
        ]
    })
], PuntoEstrategicoMapaModule);

//# sourceMappingURL=punto-estrategico-mapa.module.js.map

/***/ }),

/***/ 874:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__);
/* unused harmony export GoogleMapsEvent */
/* unused harmony export GoogleMapsAnimation */
/* unused harmony export GoogleMapsMapTypeId */
/* unused harmony export GoogleMap */
/* unused harmony export GoogleMaps */
/* unused harmony export Marker */
/* unused harmony export Circle */
/* unused harmony export Polyline */
/* unused harmony export Polygon */
/* unused harmony export TileOverlay */
/* unused harmony export GroundOverlay */
/* unused harmony export KmlOverlay */
/* unused harmony export LatLngBounds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatLng; });
/* unused harmony export Geocoder */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * @hidden
 * You can listen to these events where appropriate
 */
var GoogleMapsEvent = {
    MAP_CLICK: 'click',
    MAP_LONG_CLICK: 'long_click',
    MY_LOCATION_CHANGE: 'my_location_change',
    MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
    INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
    INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
    CAMERA_CHANGE: 'camera_change',
    CAMERA_IDLE: 'camera_idle',
    MAP_READY: 'map_ready',
    MAP_LOADED: 'map_loaded',
    MAP_WILL_MOVE: 'will_move',
    MAP_CLOSE: 'map_close',
    MARKER_CLICK: 'click',
    OVERLAY_CLICK: 'overlay_click',
    INFO_CLICK: 'info_click',
    MARKER_DRAG: 'drag',
    MARKER_DRAG_START: 'drag_start',
    MARKER_DRAG_END: 'drag_end'
};
/**
 * @hidden
 */
var GoogleMapsAnimation = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
/**
 * @hidden
 */
var GoogleMapsMapTypeId = {
    HYBRID: 'MAP_TYPE_HYBRID',
    NONE: 'MAP_TYPE_NONE',
    NORMAL: 'MAP_TYPE_NORMAL',
    ROADMAP: 'MAP_TYPE_ROADMAP',
    SATELLITE: 'MAP_TYPE_SATELLITE',
    TERAIN: 'MAP_TYPE_TERRAIN'
};
/**
 * @hidden
 */
var GoogleMap = (function () {
    function GoogleMap(element, options) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* checkAvailability */])('plugin.google.maps.Map', null, 'GoogleMaps') === true) {
            if (typeof element === 'string') {
                element = document.getElementById(element);
            }
            this._objectInstance = plugin.google.maps.Map.getMap(element, options);
        }
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    GoogleMap.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    GoogleMap.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    GoogleMap.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    GoogleMap.prototype.on = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.one = function (eventName) {
        var _this = this;
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    GoogleMap.prototype.empty = function () { };
    GoogleMap.prototype.setDebuggable = function (isDebuggable) { };
    GoogleMap.prototype.setClickable = function (isClickable) { };
    /**
     * Get the position of the camera.
     *
     * @returns {Promise<CameraPosition>}
     */
    GoogleMap.prototype.getCameraPosition = function () { return; };
    /**
     * Get the location of the user.
     *
     * @returns {Promise<MyLocation>}
     */
    GoogleMap.prototype.getMyLocation = function (options) { return; };
    /**
     * Get the visible region.
     *
     * @returns {Promise<VisibleRegion>}
     */
    GoogleMap.prototype.getVisibleRegion = function () { return; };
    GoogleMap.prototype.showDialog = function () { };
    GoogleMap.prototype.closeDialog = function () { };
    GoogleMap.prototype.getLicenseInfo = function () { return; };
    GoogleMap.prototype.setCenter = function (latLng) { };
    GoogleMap.prototype.setZoom = function (zoomLevel) { };
    GoogleMap.prototype.setMapTypeId = function (mapTypeId) { };
    GoogleMap.prototype.setTilt = function (tiltLevel) { };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.animateCamera = function (animateCameraOptions) { return; };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.moveCamera = function (cameraPosition) { return; };
    GoogleMap.prototype.setMyLocationEnabled = function (enabled) { };
    GoogleMap.prototype.setIndoorEnabled = function (enabled) { };
    GoogleMap.prototype.setTrafficEnabled = function (enabled) { };
    GoogleMap.prototype.setCompassEnabled = function (enabled) { };
    GoogleMap.prototype.setAllGesturesEnabled = function (enabled) { };
    /**
     * @returns {Promise<Marker | any>}
     */
    GoogleMap.prototype.addMarker = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addMarker(options, function (marker) {
                if (marker) {
                    resolve(new Marker(marker));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<Circle | any>}
     */
    GoogleMap.prototype.addCircle = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addCircle(options, function (circle) {
                if (circle) {
                    resolve(new Circle(circle));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<Polygon | any>}
     */
    GoogleMap.prototype.addPolygon = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolygon(options, function (polygon) {
                if (polygon) {
                    resolve(new Polygon(polygon));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<Polyline | any>}
     */
    GoogleMap.prototype.addPolyline = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolyline(options, function (polyline) {
                if (polyline) {
                    resolve(new Polyline(polyline));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<TileOverlay | any>}
     */
    GoogleMap.prototype.addTileOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                if (tileOverlay) {
                    resolve(new TileOverlay(tileOverlay));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<GroundOverlay | any>}
     */
    GoogleMap.prototype.addGroundOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
                if (groundOverlay) {
                    resolve(new GroundOverlay(groundOverlay));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<KmlOverlay | any>}
     */
    GoogleMap.prototype.addKmlOverlay = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addKmlOverlay(options, function (kmlOverlay) {
                if (kmlOverlay) {
                    resolve(new KmlOverlay(kmlOverlay));
                }
                else {
                    reject();
                }
            });
        });
    };
    GoogleMap.prototype.setDiv = function (domNode) { };
    GoogleMap.prototype.setVisible = function (visible) { };
    GoogleMap.prototype.setOptions = function (options) { };
    GoogleMap.prototype.setBackgroundColor = function (backgroundColor) { };
    GoogleMap.prototype.setPadding = function (top, right, bottom, left) { };
    GoogleMap.prototype.clear = function () { };
    GoogleMap.prototype.refreshLayout = function () { };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.fromLatLngToPoint = function (latLng, point) { return; };
    /**
     * @returns {Promise<LatLng>}
     */
    GoogleMap.prototype.fromPointToLatLng = function (point) { return; };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.toDataURL = function () { return; };
    GoogleMap.prototype.remove = function () { };
    GoogleMap.prototype.panBy = function (x, y) { };
    return GoogleMap;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], GoogleMap.prototype, "addEventListener", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addListenerOnce", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], GoogleMap.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* InstanceCheck */])({ observable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
], GoogleMap.prototype, "on", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "one", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setDebuggable", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setClickable", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "getCameraPosition", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "getMyLocation", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "getVisibleRegion", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "showDialog", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "closeDialog", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "getLicenseInfo", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setCenter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setZoom", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setMapTypeId", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setTilt", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "animateCamera", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "moveCamera", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setMyLocationEnabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setIndoorEnabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setTrafficEnabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setCompassEnabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setAllGesturesEnabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addMarker", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addCircle", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addPolygon", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addPolyline", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addTileOverlay", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addGroundOverlay", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* InstanceCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "addKmlOverlay", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLElement]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setDiv", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setOptions", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setBackgroundColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "setPadding", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "clear", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "refreshLayout", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng, Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "fromLatLngToPoint", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "fromPointToLatLng", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMap.prototype, "toDataURL", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "remove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GoogleMap.prototype, "panBy", null);
GoogleMap = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* Plugin */])({
        pluginName: 'GoogleMaps',
        plugin: 'cordova-plugin-googlemaps'
    }),
    __metadata("design:paramtypes", [Object, Object])
], GoogleMap);

/**
 * @name Google Maps
 * @description This plugin uses the native Google Maps SDK
 * @usage
 * ```typescript
 * import {
 *  GoogleMaps,
 *  GoogleMap,
 *  GoogleMapsEvent,
 *  LatLng,
 *  CameraPosition,
 *  MarkerOptions,
 *  Marker
 * } from '@ionic-native/google-maps';
 *
 * export class MapPage {
 *  constructor(private googleMaps: GoogleMaps) {}
 *
 * // Load map only after view is initialized
 * ngAfterViewInit() {
 *  this.loadMap();
 * }
 *
 * loadMap() {
 *  // make sure to create following structure in your view.html file
 *  // and add a height (for example 100%) to it, else the map won't be visible
 *  // <ion-content>
 *  //  <div #map id="map" style="height:100%;"></div>
 *  // </ion-content>
 *
 *  // create a new map by passing HTMLElement
 *  let element: HTMLElement = document.getElementById('map');
 *
 *  let map: GoogleMap = this.googleMaps.create(element);
 *
 *  // listen to MAP_READY event
 *  // You must wait for this event to fire before adding something to the map or modifying it in anyway
 *  map.one(GoogleMapsEvent.MAP_READY).then(
 *    () => {
 *      console.log('Map is ready!');
 *      // Now you can add elements to the map like the marker
 *    }
 *  );
 *
 *  // create LatLng object
 *  let ionic: LatLng = new LatLng(43.0741904,-89.3809802);
 *
 *  // create CameraPosition
 *  let position: CameraPosition = {
 *    target: ionic,
 *    zoom: 18,
 *    tilt: 30
 *  };
 *
 *  // move the map's camera to position
 *  map.moveCamera(position);
 *
 *  // create new marker
 *  let markerOptions: MarkerOptions = {
 *    position: ionic,
 *    title: 'Ionic'
 *  };
 *
 *  const marker: Marker = map.addMarker(markerOptions)
 *    .then((marker: Marker) => {
 *       marker.showInfoWindow();
 *     });
 *  }
 *
 * }
 * ```
 * @classes
 * GoogleMap
 * Marker
 * LatLng
 * Geocoder
 * @interfaces
 * AnimateCameraOptions
 * MarkerOptions
 * MyLocation
 * MyLocationOptions
 * VisibleRegion
 *
 */
var GoogleMaps = (function (_super) {
    __extends(GoogleMaps, _super);
    function GoogleMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks if a map object has been created and is available.
     *
     * @returns {Promise<boolean>}
     */
    GoogleMaps.prototype.isAvailable = function () { return; };
    /**
     * Creates a new GoogleMap instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {any} Options
     * @returns {GoogleMap}
     */
    GoogleMaps.prototype.create = function (element, options) {
        return new GoogleMap(element, options);
    };
    return GoogleMaps;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* IonicNativePlugin */]));
GoogleMaps.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/** @nocollapse */
GoogleMaps.ctorParameters = function () { return []; };
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Cordova */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleMaps.prototype, "isAvailable", null);
GoogleMaps = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* Plugin */])({
        pluginName: 'GoogleMaps',
        pluginRef: 'plugin.google.maps.Map',
        plugin: 'cordova-plugin-googlemaps',
        repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps',
        install: 'ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"',
        installVariables: ['API_KEY_FOR_ANDROID', 'API_KEY_FOR_IOS'],
        platforms: ['Android', 'iOS']
    })
], GoogleMaps);

/**
 * @hidden
 */
var Marker = (function () {
    function Marker(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    Marker.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    Marker.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    Marker.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    Marker.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    Marker.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    Marker.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    Marker.prototype.empty = function () { };
    /**
     * Return true if the marker is visible
     */
    Marker.prototype.isVisible = function () { return; };
    /**
     * Set false if you want to hide the marker.
     * @param visible
     */
    Marker.prototype.setVisible = function (visible) { };
    /**
     * Return the marker hash code.
     * @return {string} Marker hash code
     */
    Marker.prototype.getHashCode = function () { return; };
    /**
     * Remove the marker completely.
     */
    Marker.prototype.remove = function () { };
    /**
     * Change the marker opacity.
     * @param alpha {number} Opacity
     */
    Marker.prototype.setOpacity = function (alpha) { };
    /**
     * Return the marker opacity.
     * @return {number} Opacity
     */
    Marker.prototype.getOpacity = function () { return; };
    /**
     * iOS only, Plugin Version >= 1.3.3 Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays. (You're able to run this on Android, but it will have no effect)
     * @return {number}
     */
    Marker.prototype.setZIndex = function () { return; };
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
     * @param x {number}
     * @param y {number}
     */
    Marker.prototype.setIconAnchor = function (x, y) { };
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
     * @param x {number}
     * @param y {number}
     */
    Marker.prototype.setInfoWindowAnchor = function (x, y) { };
    /**
     * 	Set true if you allows all users to drag the marker.
     * @param draggable {boolean}
     */
    Marker.prototype.setDraggable = function (draggable) { };
    /**
     * Return true if the marker drag is enabled.
     * @return {boolean}
     */
    Marker.prototype.isDraggable = function () { return; };
    /**
     * Set true if you want to be flat marker.
     * @param flat {boolean}
     */
    Marker.prototype.setFlat = function (flat) { return; };
    /**
     * Change icon url and/or size
     * @param icon
     */
    Marker.prototype.setIcon = function (icon) { return; };
    /**
     * Change title of the infoWindow.
     * @param title {string}
     */
    Marker.prototype.setTitle = function (title) { };
    /**
     * Return the title strings.
     * @return {string}
     */
    Marker.prototype.getTitle = function () { return; };
    /**
     * Change snippet of the infoWindow.
     * @param snippet {string}
     */
    Marker.prototype.setSnippet = function (snippet) { };
    /**
     * Return the snippet strings.
     * @return {string}
     */
    Marker.prototype.getSnippet = function () { return; };
    /**
     * Set the marker rotation angle.
     * @param rotation {number}
     */
    Marker.prototype.setRotation = function (rotation) { };
    /**
     * Return the marker rotation angle.
     * @return {number}
     */
    Marker.prototype.getRotation = function () { return; };
    /**
     * Show the infoWindow of the marker.
     * @return {number}
     */
    Marker.prototype.showInfoWindow = function () { return; };
    /**
     * Hide the infoWindow of the marker.
     * @return {number}
     */
    Marker.prototype.hideInfoWindow = function () { return; };
    /**
     * Set the marker position.
     * @param latLng {LatLng}
     */
    Marker.prototype.setPosition = function (latLng) { return; };
    /**
     * Return the marker position.
     * @return {Promise<LatLng>}
     */
    Marker.prototype.getPosition = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    Marker.prototype.getMap = function () { return; };
    /**
     * Specify the animation either `DROP` or `BOUNCE`
     * @param animation {string}
     */
    Marker.prototype.setAnimation = function (animation) { };
    return Marker;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Marker.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Marker.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Marker.prototype, "isVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Marker.prototype, "getHashCode", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Marker.prototype, "remove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setOpacity", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "getOpacity", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "setZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setIconAnchor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setInfoWindowAnchor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setDraggable", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Marker.prototype, "isDraggable", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setFlat", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setIcon", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setTitle", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Marker.prototype, "getTitle", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setSnippet", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Marker.prototype, "getSnippet", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setRotation", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "getRotation", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "showInfoWindow", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Marker.prototype, "hideInfoWindow", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setPosition", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Marker.prototype, "getPosition", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", GoogleMap)
], Marker.prototype, "getMap", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Marker.prototype, "setAnimation", null);
/**
 * @hidden
 */
var Circle = (function () {
    function Circle(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    Circle.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    Circle.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    Circle.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    Circle.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    Circle.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    Circle.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    Circle.prototype.empty = function () { };
    Circle.prototype.getCenter = function () { return; };
    Circle.prototype.getRadius = function () { return; };
    Circle.prototype.getStrokeColor = function () { return; };
    Circle.prototype.getVisible = function () { return; };
    Circle.prototype.getZIndex = function () { return; };
    Circle.prototype.remove = function () { };
    Circle.prototype.setCenter = function (latLng) { };
    Circle.prototype.setFillColor = function (fillColor) { };
    Circle.prototype.setStrokeColor = function (strokeColor) { };
    Circle.prototype.setStrokeWidth = function (strokeWidth) { };
    Circle.prototype.setVisible = function (visible) { };
    Circle.prototype.setZIndex = function (zIndex) { };
    Circle.prototype.setRadius = function (radius) { };
    Circle.prototype.getMap = function () { return; };
    return Circle;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Circle.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Circle.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", LatLng)
], Circle.prototype, "getCenter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Circle.prototype, "getRadius", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Circle.prototype, "getStrokeColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Circle.prototype, "getVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Circle.prototype, "getZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Circle.prototype, "remove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setCenter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setFillColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setStrokeColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setStrokeWidth", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Circle.prototype, "setRadius", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", GoogleMap)
], Circle.prototype, "getMap", null);
/**
 * @hidden
 */
var Polyline = (function () {
    function Polyline(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    Polyline.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    Polyline.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    Polyline.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    Polyline.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    Polyline.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    Polyline.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    Polyline.prototype.empty = function () { };
    Polyline.prototype.getPoints = function () { return; };
    Polyline.prototype.getCOlor = function () { return; };
    Polyline.prototype.getWidth = function () { return; };
    Polyline.prototype.getGeodesic = function () { return; };
    Polyline.prototype.getZIndex = function () { return; };
    Polyline.prototype.remove = function () { };
    Polyline.prototype.setPoints = function (points) { };
    Polyline.prototype.setColor = function (color) { };
    Polyline.prototype.setWidth = function (width) { };
    Polyline.prototype.setVisible = function (visible) { };
    Polyline.prototype.setZIndex = function (zIndex) { };
    Polyline.prototype.setGeoDesic = function (geoDesic) { };
    Polyline.prototype.getMap = function () { return; };
    return Polyline;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Polyline.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], Polyline.prototype, "getPoints", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Polyline.prototype, "getCOlor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Polyline.prototype, "getWidth", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polyline.prototype, "getGeodesic", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Polyline.prototype, "getZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "remove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setPoints", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setWidth", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polyline.prototype, "setGeoDesic", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", GoogleMap)
], Polyline.prototype, "getMap", null);
/**
 * @hidden
 */
var Polygon = (function () {
    function Polygon(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    Polygon.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    Polygon.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    Polygon.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    Polygon.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    Polygon.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    Polygon.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    Polygon.prototype.empty = function () { };
    Polygon.prototype.getPoints = function () { return; };
    Polygon.prototype.getStrokeColor = function () { return; };
    Polygon.prototype.getFillColor = function () { return; };
    Polygon.prototype.getStrokeWidth = function () { return; };
    Polygon.prototype.getGeodesic = function () { return; };
    Polygon.prototype.getVisible = function () { return; };
    Polygon.prototype.getZIndex = function () { return; };
    Polygon.prototype.remove = function () { };
    Polygon.prototype.setPoints = function (points) { };
    Polygon.prototype.setStrokeColor = function (strokeColor) { };
    Polygon.prototype.setFillColor = function (fillColor) { };
    Polygon.prototype.setStrokeWidth = function (strokeWidth) { };
    Polygon.prototype.setVisible = function (visible) { };
    Polygon.prototype.setZIndex = function (zIndex) { };
    Polygon.prototype.setGeodesic = function (geodesic) { };
    return Polygon;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], Polygon.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], Polygon.prototype, "getPoints", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Polygon.prototype, "getStrokeColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Polygon.prototype, "getFillColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], Polygon.prototype, "getStrokeWidth", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polygon.prototype, "getGeodesic", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polygon.prototype, "getVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], Polygon.prototype, "getZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "remove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setPoints", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setStrokeColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setFillColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setStrokeWidth", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], Polygon.prototype, "setGeodesic", null);
/**
 * @hidden
 */
var TileOverlay = (function () {
    function TileOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    TileOverlay.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    TileOverlay.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    TileOverlay.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    TileOverlay.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    TileOverlay.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    TileOverlay.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    TileOverlay.prototype.empty = function () { };
    TileOverlay.prototype.getVisible = function () { return; };
    TileOverlay.prototype.setVisible = function (visible) { };
    TileOverlay.prototype.getFadeIn = function () { return; };
    TileOverlay.prototype.setFadeIn = function (fadeIn) { };
    TileOverlay.prototype.getZIndex = function () { return; };
    TileOverlay.prototype.setZIndex = function (zIndex) { };
    TileOverlay.prototype.getOpacity = function () { return; };
    TileOverlay.prototype.setOpacity = function (opacity) { };
    TileOverlay.prototype.clearTileCache = function () { };
    TileOverlay.prototype.remove = function () { };
    return TileOverlay;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], TileOverlay.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], TileOverlay.prototype, "getVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], TileOverlay.prototype, "getFadeIn", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setFadeIn", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], TileOverlay.prototype, "getZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setZIndex", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], TileOverlay.prototype, "getOpacity", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "setOpacity", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "clearTileCache", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TileOverlay.prototype, "remove", null);
/**
 * @hidden
 */
var GroundOverlay = (function () {
    function GroundOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    GroundOverlay.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    GroundOverlay.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    GroundOverlay.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    GroundOverlay.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    GroundOverlay.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    GroundOverlay.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    GroundOverlay.prototype.empty = function () { };
    GroundOverlay.prototype.setBearing = function (bearing) { };
    GroundOverlay.prototype.getBearing = function () { return; };
    GroundOverlay.prototype.setOpacity = function (opacity) { };
    GroundOverlay.prototype.getOpacity = function () { return; };
    GroundOverlay.prototype.setVisible = function (visible) { };
    GroundOverlay.prototype.getVisible = function () { return; };
    GroundOverlay.prototype.setImage = function (image) { };
    ;
    GroundOverlay.prototype.remove = function () { };
    return GroundOverlay;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], GroundOverlay.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setBearing", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], GroundOverlay.prototype, "getBearing", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setOpacity", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], GroundOverlay.prototype, "getOpacity", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], GroundOverlay.prototype, "getVisible", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "setImage", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GroundOverlay.prototype, "remove", null);
/**
 * @hidden
 */
var KmlOverlay = (function () {
    function KmlOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    /**
     * Adds an event listener.
     *
     * @returns {Observable<any>}
     */
    KmlOverlay.prototype.addEventListener = function (eventName) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(this._objectInstance, eventName);
    };
    /**
     * Adds an event listener that works once.
     *
     * @returns {Promise<any>}
     */
    KmlOverlay.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.addListenerOnce(eventName, resolve); });
    };
    /**
     * Gets a value
     * @param key
     */
    KmlOverlay.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    KmlOverlay.prototype.set = function (key, value) { };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    KmlOverlay.prototype.on = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.on(eventName, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    KmlOverlay.prototype.one = function (eventName) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(eventName, resolve); });
    };
    /**
     * Clears all stored values
     */
    KmlOverlay.prototype.empty = function () { };
    KmlOverlay.prototype.remove = function () { };
    KmlOverlay.prototype.getOverlays = function () { return; };
    return KmlOverlay;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], KmlOverlay.prototype, "get", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], KmlOverlay.prototype, "set", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KmlOverlay.prototype, "empty", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KmlOverlay.prototype, "remove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], KmlOverlay.prototype, "getOverlays", null);
/**
 * @hidden
 */
var LatLngBounds = (function () {
    function LatLngBounds(southwestOrArrayOfLatLng, northeast) {
        var args = !!northeast ? [southwestOrArrayOfLatLng, northeast] : southwestOrArrayOfLatLng;
        this._objectInstance = new plugin.google.maps.LatLngBounds(args);
    }
    LatLngBounds.prototype.toString = function () { return; };
    LatLngBounds.prototype.toUrlValue = function (precision) { return; };
    LatLngBounds.prototype.extend = function (LatLng) { };
    LatLngBounds.prototype.contains = function (LatLng) { return; };
    LatLngBounds.prototype.getCenter = function () { return; };
    return LatLngBounds;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* InstanceProperty */],
    __metadata("design:type", LatLng)
], LatLngBounds.prototype, "northeast", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* InstanceProperty */],
    __metadata("design:type", LatLng)
], LatLngBounds.prototype, "southwest", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* InstanceProperty */],
    __metadata("design:type", String)
], LatLngBounds.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], LatLngBounds.prototype, "toString", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], LatLngBounds.prototype, "toUrlValue", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng]),
    __metadata("design:returntype", void 0)
], LatLngBounds.prototype, "extend", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LatLng]),
    __metadata("design:returntype", Boolean)
], LatLngBounds.prototype, "contains", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* CordovaInstance */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", LatLng)
], LatLngBounds.prototype, "getCenter", null);
/**
 * @hidden
 */
var LatLng = (function () {
    function LatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    LatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
    };
    LatLng.prototype.toString = function () {
        return this.lat + ',' + this.lng;
    };
    LatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
    };
    return LatLng;
}());

/**
 * @hidden
 */
var Geocoder = (function () {
    function Geocoder() {
    }
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @returns {Promise<GeocoderResult[]>}
     */
    Geocoder.prototype.geocode = function (request) {
        return new Promise(function (resolve) {
            plugin.google.maps.Geocoder.geocode(request, resolve);
        });
    };
    return Geocoder;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* CordovaCheck */])(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Geocoder.prototype, "geocode", null);
Geocoder = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* Plugin */])({
        pluginName: 'Geocoder',
        pluginRef: 'plugin.google.maps.Geocoder',
        plugin: 'cordova-plugin-googlemaps',
        repo: ''
    })
], Geocoder);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__ = __webpack_require__(874);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PuntoEstrategicoMapa; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PuntoEstrategicoMapa = (function () {
    function PuntoEstrategicoMapa(navCtrl, diagnostic, navParams, servicio, geolocation, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.diagnostic = diagnostic;
        this.navParams = navParams;
        this.servicio = servicio;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.isGPS = false;
        this.origen = false;
        this.cargarFab();
        this.colorFondo = this.servicio.modoApp;
    }
    PuntoEstrategicoMapa.prototype.cargarFab = function () {
        this.opcion = this.navParams.get('Opcion');
        if (this.opcion == "Todos") {
            this.fabTodos = true;
            this.fabPunto = false;
        }
        else {
            this.fabTodos = false;
            this.fabPunto = true;
        }
    };
    PuntoEstrategicoMapa.prototype.cargarCategorias = function () {
        this.categorias = [
            { Nombre: "Todos", Valor: "Todos", Imagen: "Todos.png" },
        ];
        for (var i = 0; i < this.listaPuntos.length; i++) {
            if (!this.existeCategoria(this.categorias, this.listaPuntos[i].Categoria)) {
                this.categorias.push({ Nombre: this.listaPuntos[i].Categoria, Valor: this.listaPuntos[i].Categoria, Imagen: this.listaPuntos[i].Marcador });
            }
        }
    };
    PuntoEstrategicoMapa.prototype.existeCategoria = function (lista, categoria) {
        for (var i = 0; i < lista.length; i++) {
            if (lista[i].Nombre == categoria) {
                return true;
            }
        }
        return false;
    };
    PuntoEstrategicoMapa.prototype.addInfoWindowToMarker = function (object) {
        var _this = this;
        var infoWindowContent = '<div id="content"><h1 id="firstHeading" class="firstHeading">' + object.Marker.title + '</h1><br>' + object.Categoria + '<h2></h2></div>';
        var infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });
        object.Marker.addListener('click', function () {
            infoWindow.open(_this.map, object.Marker);
        });
    };
    PuntoEstrategicoMapa.prototype.cargarPosicionPuntosEstrategicos = function () {
        this.allMarcadores = [];
        for (var i = 0; i < this.listaPuntos.length; i++) {
            var latitude = this.listaPuntos[i].Punto.lat;
            var longitud = this.listaPuntos[i].Punto.lng;
            var myPosition = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* LatLng */](latitude, longitud);
            var marker = new google.maps.Marker({
                position: myPosition,
                map: this.map,
                icon: 'img/PuntosEstrategicos/Marcadores/' + this.listaPuntos[i].Marcador,
                title: this.listaPuntos[i].Nombre
            });
            var object = { Marker: marker, Categoria: this.listaPuntos[i].Categoria };
            this.addInfoWindowToMarker(object);
            this.allMarcadores.push(marker);
            marker.setMap(this.map);
            this.map.setCenter(myPosition);
        }
        this.map.setZoom(13);
    };
    PuntoEstrategicoMapa.prototype.cargarPosicionPuntosEstrategicosCategoria = function (categorias) {
        this.allMarcadores = [];
        if (categorias == "Todos") {
            this.cargarPosicionPuntosEstrategicos();
        }
        else {
            for (var i = 0; i < this.listaPuntos.length; i++) {
                if (this.listaPuntos[i].Categoria == categorias) {
                    var latitude = this.listaPuntos[i].Punto.lat;
                    var longitud = this.listaPuntos[i].Punto.lng;
                    var myPosition = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* LatLng */](latitude, longitud);
                    var marker = new google.maps.Marker({
                        position: myPosition,
                        map: this.map,
                        icon: 'img/PuntosEstrategicos/Marcadores/' + this.listaPuntos[i].Marcador,
                        title: this.listaPuntos[i].Nombre
                    });
                    var object = { Marker: marker, Categoria: this.listaPuntos[i].Categoria };
                    this.addInfoWindowToMarker(object);
                    this.allMarcadores.push(marker);
                    marker.setMap(this.map);
                    this.map.setCenter(myPosition);
                }
            }
            this.map.setZoom(13);
        }
    };
    PuntoEstrategicoMapa.prototype.removeAllPuntos = function () {
        for (var i = 0; i < this.allMarcadores.length; i++) {
            this.allMarcadores[i].setMap(null);
        }
    };
    PuntoEstrategicoMapa.prototype.removePuntos = function (categorias) {
        if (categorias == "Todos") {
            this.removeAllPuntos();
            this.cargarPosicionPuntosEstrategicos();
        }
        else {
            this.removeAllPuntos();
            this.cargarPosicionPuntosEstrategicosCategoria(categorias);
        }
    };
    PuntoEstrategicoMapa.prototype.cargarPuntos = function () {
        this.listaPuntos = this.servicio.obtenerPuntos().PuntosEstrategicos;
    };
    PuntoEstrategicoMapa.prototype.cargarPuntoEstrategico = function (punto) {
        this.nombrePuntoEstrategico = punto.data.Nombre;
        this.ubicacionPuntoEstrategico = punto.data.Punto;
        this.iconos = punto.data.Marcador;
    };
    PuntoEstrategicoMapa.prototype.ionViewDidLoad = function () {
        this.initMap();
        console.log(this.servicio.paginas);
        this.allMarcadores = [];
        this.opcion = this.navParams.get('Opcion');
        this.cargarPuntos();
        if (this.opcion == "Especifico") {
            this.servicio.paginas = 2;
            if (this.allMarcadores.length > 0) {
                this.removeAllPuntos();
            }
            var punto = this.navParams.get('Punto');
            this.cargarPuntoEstrategico(punto);
            this.cargarPosicionPuntoEstrategico();
        }
        else if (this.opcion = "Todos") {
            this.servicio.paginas = 1;
            this.cargarCategorias();
            this.cargarPosicionPuntosEstrategicos();
        }
    };
    PuntoEstrategicoMapa.prototype.ionViewDidLeave = function () {
        console.log(this.servicio.paginas);
    };
    PuntoEstrategicoMapa.prototype.cargarPosicionPuntoEstrategico = function () {
        var latitude = this.ubicacionPuntoEstrategico.lat;
        var longitud = this.ubicacionPuntoEstrategico.lng;
        var myPosition = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* LatLng */](latitude, longitud);
        var marker = new google.maps.Marker({
            position: myPosition,
            map: this.map,
            icon: 'img/PuntosEstrategicos/Marcadores/' + this.iconos,
            title: this.nombrePuntoEstrategico
        });
        this.puntoEstrategico = marker;
        this.map.setCenter(myPosition);
        this.map.setZoom(15);
    };
    PuntoEstrategicoMapa.prototype.initMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(-17.393835, -66.156946);
        var mapOptions = {
            center: latLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        google.maps.event.addListener(this.map, 'click', function (e) {
            if (_this.origen) {
                var marker = new google.maps.Marker({
                    position: e.latLng,
                    map: _this.map
                });
                var loader2 = _this.loadingCtrl.create({
                    content: _this.servicio.traducir("BuscandoLineas"),
                    duration: 3000
                });
                loader2.present();
                _this.userPosicion = marker;
                _this.servicio.obtenerLineasPorSelecion(marker, _this.puntoEstrategico);
                setTimeout(function () {
                    _this.mostrarLineas();
                    _this.origen = false;
                    _this.userPosicion.setMap(null);
                }, 2000);
            }
        });
    };
    PuntoEstrategicoMapa.prototype.getMyCurrentPosition = function () {
        var _this = this;
        this.checkLocation();
        setTimeout(function () {
            if (_this.isGPS) {
                var loader_1 = _this.loadingCtrl.create({
                    content: _this.servicio.traducir("ObteniendoUbicacion")
                });
                loader_1.present();
                _this.geolocation.getCurrentPosition()
                    .then(function (position) {
                    _this.cargarMiPosicion(position, loader_1);
                    var loader2 = _this.loadingCtrl.create({
                        content: _this.servicio.traducir("BuscandoLineas"),
                        duration: 3000
                    });
                    loader2.present();
                    _this.servicio.obtenerLineasPorSelecion(_this.userPosicion, _this.puntoEstrategico);
                    setTimeout(function () {
                        _this.mostrarLineas();
                    }, 2000);
                });
                setTimeout(function () {
                    loader_1.dismiss();
                }, 15000);
            }
        }, 1000);
    };
    PuntoEstrategicoMapa.prototype.checkLocation = function () {
        var _this = this;
        this.diagnostic.isLocationEnabled().then(function (isAvailable) {
            if (!isAvailable) {
                var alert_1 = _this.alertCtrl.create({
                    title: _this.servicio.traducir("IrDesdeMiUbicacion.TituloAlertGps"),
                    subTitle: _this.servicio.traducir("IrDesdeMiUbicacion.ContenidoAlertGps"),
                    buttons: [_this.servicio.traducir("Botones.Aceptar")]
                });
                alert_1.present();
                _this.isGPS = false;
            }
            else {
                _this.isGPS = true;
            }
        }).catch(function (e) {
        });
    };
    PuntoEstrategicoMapa.prototype.cargarMiPosicion = function (position, loader) {
        var latitude = position.coords.latitude;
        var longitud = position.coords.longitude;
        var myPosition = new __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_maps__["a" /* LatLng */](latitude, longitud);
        var marker = new google.maps.Marker({
            position: myPosition,
            map: this.map,
            icon: 'img/BusquedaUbicacion/Marcadores/marcadorYo.png',
            title: 'Mi Posicion!'
        });
        this.userPosicion = marker;
        loader.dismiss();
    };
    PuntoEstrategicoMapa.prototype.mostrarLineas = function () {
        var puntos = {
            Inicio: this.userPosicion,
            Fin: this.puntoEstrategico
        };
        this.navCtrl.push('ListaLineas', puntos);
    };
    PuntoEstrategicoMapa.prototype.seleccionOrigen = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.servicio.traducir("IrDesdeMiUbicacion.Origen.TituloAlertOrigen"),
            subTitle: this.servicio.traducir("IrDesdeMiUbicacion.Origen.ContenidoAlertOrigen")
        });
        alert.addButton({
            text: this.servicio.traducir("Botones.Cancelar"),
            handler: function (data) {
                _this.origen = false;
            }
        });
        alert.addButton({
            text: this.servicio.traducir("Botones.Aceptar"),
            handler: function (data) {
                _this.origen = true;
            }
        });
        alert.present();
    };
    return PuntoEstrategicoMapa;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */])
], PuntoEstrategicoMapa.prototype, "mapElement", void 0);
PuntoEstrategicoMapa = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'punto-estrategico-mapa',template:/*ion-inline-start:"E:\Mis proyectos\Kaypi\src\pages\punto-estrategico-mapa\punto-estrategico-mapa.html"*/'<ion-header>\n\n  <ion-navbar color="{{colorFondo}}">\n\n    <ion-title>\n\n      {{\'PuntosEstrategicos.TituloPuntosEstrategicos\' | translate}} \n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <img src="img/univalle.png" class="imagenLogo"/>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-fab left bottom *ngIf="fabPunto">\n\n    <button ion-fab color="{{colorFondo}}" class="jellyAnimation"><ion-icon  name="arrow-dropup"></ion-icon></button>\n\n    <ion-fab-list side="top" color="primary" class="itemsFab"  >\n\n      <button class="margenBoton botonesFab" color="light" ion-button round item-left (click)="getMyCurrentPosition()">\n\n      <ion-label class="colorLetras">{{\'PuntosEstrategicos.InformacionPuntoEstrategico.Fab\' | translate}}</ion-label>\n\n      </button>\n\n      <button class="margenBoton botonesFab" color="light" ion-button round item-left (click)="seleccionOrigen()">\n\n        <ion-label class="colorLetras">{{\'IrDesdeMiUbicacion.Origen.TituloAlertOrigen\' | translate}}</ion-label>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n   <ion-fab left bottom *ngIf="fabTodos">\n\n    <button ion-fab color="{{colorFondo}}" class="jellyAnimation"><ion-icon name="arrow-dropup"></ion-icon></button>\n\n    <ion-fab-list side="top" color="primary" class="itemsFab"  >\n\n      <button class="margenBoton botonesFab" color="light" ion-button round item-left *ngFor="let c of categorias" [value]="c.Nombre" (click)="removePuntos(c.Nombre)">\n\n      <img src="img/PuntosEstrategicos/Marcadores/{{c.Imagen}}" alt="" class="divCuadrado">\n\n        <ion-label class="colorLetras">{{c.Nombre}}</ion-label>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n</ion-content>\n\n<ion-content>\n\n  <div #map id="map" name="map" >\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Mis proyectos\Kaypi\src\pages\punto-estrategico-mapa\punto-estrategico-mapa.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_kaypi_services__["a" /* KaypiServices */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* AlertController */]])
], PuntoEstrategicoMapa);

//# sourceMappingURL=punto-estrategico-mapa.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map