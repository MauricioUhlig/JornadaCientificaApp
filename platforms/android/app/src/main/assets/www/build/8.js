webpackJsonp([8],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFilterPageModule", function() { return EventFilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_filter__ = __webpack_require__(731);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventFilterPageModule = /** @class */ (function () {
    function EventFilterPageModule() {
    }
    EventFilterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_filter__["a" /* EventFilterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_filter__["a" /* EventFilterPage */]),
            ],
        })
    ], EventFilterPageModule);
    return EventFilterPageModule;
}());

//# sourceMappingURL=event-filter.module.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events_events_data__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventFilterPage = /** @class */ (function () {
    function EventFilterPage(navCtrl, navParams, confData, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.confData = confData;
        this.viewCtrl = viewCtrl;
        this.tracks = [];
        var excludedTrackNames = this.navParams.data;
        this.confData
            .getTracks()
            .subscribe(function (trackNames) {
            trackNames.forEach(function (trackName) {
                _this.tracks.push({
                    name: trackName,
                    isChecked: (excludedTrackNames.indexOf(trackName) === -1)
                });
            });
        });
    }
    EventFilterPage.prototype.resetFilters = function () {
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    EventFilterPage.prototype.applyFilters = function () {
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedTrackNames);
    };
    EventFilterPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    EventFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-filter',template:/*ion-inline-start:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\pages\event-filter\event-filter.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">Cancel</button>\n      </ion-buttons>\n  \n      <ion-title>Opções</ion-title>\n  \n      <ion-buttons end>\n        <button ion-button (click)="applyFilters()" strong>OK</button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content class="outer-content">\n  \n    <ion-list>\n      <ion-list-header>Tracks</ion-list-header>\n  \n      <ion-item *ngFor="let track of tracks" [attr.track]="track.name | lowercase">\n        <span item-start class="dot"></span>\n        <ion-label>{{track.name}}</ion-label>\n        <ion-toggle [(ngModel)]="track.isChecked" color="secondary"></ion-toggle>\n      </ion-item>\n  \n    </ion-list>\n  \n    <ion-list>\n      <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n        Reset All Filters\n      </button>\n    </ion-list>\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\Gabriel Ramos\Desktop\_IonicApps\JornadaCientifica2018\JornadaCientifica_Official\JornadaCientificaApp\src\pages\event-filter\event-filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_events_events_data__["a" /* EventsDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], EventFilterPage);
    return EventFilterPage;
}());

//# sourceMappingURL=event-filter.js.map

/***/ })

});
//# sourceMappingURL=8.js.map